import { Country } from '../types';

const TOP_LENGTH = 10;
enum SortOption { desc, asc };

export const getSummPopulation = (countries: Country[]) =>
  countries.reduce(function (acc, obj) { return acc + obj.population; }, 0);

const getBiggestCountries = (sortedCountries: Country[]) => sortedCountries.slice(0, TOP_LENGTH);
const getSmallestCountries = (sortedCountries: Country[]) =>
  sortCountries(sortedCountries.filter((country) => country.population).slice(-TOP_LENGTH), SortOption.asc);

const sortCountries = (countries: Country[], option: SortOption = SortOption.desc) => countries.slice().sort((a: any, b: any) => {
  if (a.population < b.population) {
    return option === SortOption.desc ? 1 : -1;
  }

  if (a.population > b.population) {
    return option === SortOption.desc ? -1 : 1;
  }

  return 0;
});

export const getCountryExtremumCategories = (countries: Country[]) => {
  const sortedCountries = sortCountries(countries);
  const biggestCountries = getBiggestCountries(sortedCountries);
  const smallestCountries = getSmallestCountries(sortedCountries);

  return {
    biggest: biggestCountries,
    smallest: smallestCountries,
  };
};

export const getShortListCountries = (countries: Country[], lastLetter: string) =>
  countries.filter((country) => country.country < lastLetter || country.country.startsWith(lastLetter));
