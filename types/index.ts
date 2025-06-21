// WeatherCard
export interface WeatherCardProps {
  city: {
    name: string
    temperature: number
    condition: string
    icon: string
    humidity: number
    windSpeed: number
    pressure: number
    visibility: number
    high: number
    low: number
  }
}

//City Weather (for reuse)
export interface CityWeather {
  name: string
  temperature: number
  condition: string
  icon?: string | number | undefined
  humidity?: number
  windSpeed?: number
  pressure?: number
  visibility?: number
  high?: number
  low?: number
}

export interface CountryData {
  name: string;
  code: string;
  flag: string;
  timezone: string;
  cities: CityWeather[];
}

// WeatherCountryHeader
export interface WeatherCountryHeaderProps {
  countryData: {
    flag: string
    name: string
    code: string
    timezone: string
    cities: CityWeather[]
  }
}

// WeatherNoResults
export interface WeatherNoResultsProps {
  availableCountries: string[]
  onSelectCountry: (country: string) => void
  searchQuery: string
}

// CountryWeatherData (used in mockCountryData or API)
export interface CountryWeatherData {
  country: string
  description: string
  cities: CityWeather[]
}
