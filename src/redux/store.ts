import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Country, CountryCategory } from '../types';
import thunkMiddleware from 'redux-thunk';

import { getCountryExtremumCategories } from '../helpers/getCountries';

export enum Status { loading, idle };

export interface IState {
  status: Status
  allCountries: Country[]
  countriesByCategories: {
    biggest: CountryCategory
    smallest: CountryCategory
    custom: CountryCategory
  }
};

const initialState: IState = {
  status: Status.idle,
  allCountries: [],
  countriesByCategories: {
    biggest: {
      countries: [],
      total: 0,
    },
    smallest: {
      countries: [],
      total: 0,
    },
    custom: {
      countries: [],
      total: 0,
    },
  }
};


export const actionTypes = {
  GET_COUNTRIES: 'APP/COUNTRIES/GET_COUNTRIES',
}

export const getCountries = createAsyncThunk(
  actionTypes.GET_COUNTRIES,
  async () => {
    const response = await fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json');
    const data = await response.json();

    return data as Country[];
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, { payload }) => { state.allCountries = payload }
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = Status.loading
    });
    builder.addCase(getCountries.fulfilled, (state, { payload }) => {
      state.allCountries = payload

      const categories = getCountryExtremumCategories(payload);

      state.countriesByCategories = { ...state.countriesByCategories, ...categories}
      state.status = Status.idle
    });
  }
})

// actions
export const { setCountries } = countriesSlice.actions

const options = {
  reducer: {
    country: countriesSlice.reducer,
  },
  middleware: [thunkMiddleware],
}

export const store = configureStore(options);

export type RootStore = ReturnType<typeof store.getState>;
