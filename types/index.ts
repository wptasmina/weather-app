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

//WeatherCountryHeader
export interface WeatherCountryHeaderProps {
  countryData: {
    flag: string
    name: string
    code: string
    timezone: string
    cities: any[]
  }
}