export interface Country {
  country: string,
  population: number,
}

export interface CountryCategory {
  countries: Country[],
  total: number,
}
