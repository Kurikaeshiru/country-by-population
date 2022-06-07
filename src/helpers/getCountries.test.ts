import { getSummPopulation, getCountryExtremumCategories, getShortListCountries } from './getCountries';

const mockCountries = [
  { country: 'a', population: 0 },
  { country: 'b', population: 1 },
  { country: 'c', population: 10 },
  { country: 'd', population: 100 },
  { country: 'e', population: 1000 },
  { country: 'f', population: 2 },
  { country: 'n', population: 20 },
  { country: 'o', population: 200 },
  { country: 'p', population: 2000 },
  { country: 'q', population: 3 },
  { country: 'r', population: 30 },
  { country: 's', population: 300 },
  { country: 't', population: 3000 },
];

test('get summ of values of array of object by propertypopulation', () => {
  expect(getSummPopulation([
    { country: 'a', population: 1 },
    { country: 'b', population: 1 },
  ])).toBe(2);
});

test('get the biggest and the smallest countries', () => {
  expect(getCountryExtremumCategories(mockCountries)).toEqual({
    biggest: [
      { country: 't', population: 3000 },
      { country: 'p', population: 2000 },
      { country: 'e', population: 1000 },
      { country: 's', population: 300 },
      { country: 'o', population: 200 },
      { country: 'd', population: 100 },
      { country: 'r', population: 30 },
      { country: 'n', population: 20 },
      { country: 'c', population: 10 },
      { country: 'q', population: 3 },
    ],
    smallest: [
      { country: 'b', population: 1 },
      { country: 'f', population: 2 },
      { country: 'q', population: 3 },
      { country: 'c', population: 10 },
      { country: 'n', population: 20 },
      { country: 'r', population: 30 },
      { country: 'd', population: 100 },
      { country: 'o', population: 200 },
      { country: 's', population: 300 },
      { country: 'e', population: 1000 },
    ],
  });
});

test('get shorter list countries to letter "n"', () => {
  expect(getShortListCountries(mockCountries, 'N')).toEqual([
    { country: 'a', population: 0 },
    { country: 'b', population: 1 },
    { country: 'c', population: 10 },
    { country: 'd', population: 100 },
    { country: 'e', population: 1000 },
    { country: 'f', population: 2 },
    { country: 'n', population: 20 },
  ]);
});
