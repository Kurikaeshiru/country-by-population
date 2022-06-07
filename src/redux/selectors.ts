import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from './store';
import { getCountryExtremumCategories, getSummPopulation } from '../helpers';

const getAllCountries = (state: RootStore) => state.country.allCountries;
const getCustomCountries = (state: RootStore) => state.country.custom;

const getCombinedCategories = (state: RootStore) => [...getAllCountries(state), ...getCustomCountries(state)];

export const extremumCountries = createSelector(getAllCountries, countries => getCountryExtremumCategories(countries));

export const totalPopulation = createSelector(getCombinedCategories, countries => getSummPopulation(countries));
