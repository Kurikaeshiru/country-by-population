import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { Country } from '../types';
import { getShortListCountries } from '../helpers/getCountries';

export enum Status { loading, idle };

export interface IState {
  status: Status
  allCountries: Country[]
  custom: Country[]
};

const initialState: IState = {
  status: Status.idle,
  allCountries: [],
  custom: [],
};


export const actionTypes = {
  GET_COUNTRIES: 'APP/COUNTRIES/GET_COUNTRIES',
}

export const getCountries = createAsyncThunk(
  actionTypes.GET_COUNTRIES,
  async (lastLetter?: string) => {
    const response = await fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population.json');
    const data = await response.json();

    if (lastLetter) {
      return getShortListCountries(data as Country[], lastLetter);
    }


    return data as Country[];
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, { payload }) => { state.allCountries = payload },
    addCountry: (state, { payload }) => {
      state.custom.push(payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = Status.loading
    });
    builder.addCase(getCountries.fulfilled, (state, { payload }) => {
      state.allCountries = payload

      state.status = Status.idle
    });
  }
})

// actions
export const { setCountries, addCountry } = countriesSlice.actions

const options = {
  reducer: {
    country: countriesSlice.reducer,
  },
  middleware: (getDefaults: () => any) => getDefaults().concat(thunkMiddleware),
}

export const store = configureStore(options);

export type RootStore = ReturnType<typeof store.getState>;
