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

// WeatherNoResults
export interface WeatherNoResultsProps {
  availableCountries: string[]
  onSelectCountry: (country: string) => void
  searchQuery: string
}

//WeatherSearch
export interface WeatherSearchProps {
  searchQuery: string
  isLoading: boolean
  searchResults: string[]
  showSearchResults: boolean
  onSearch: (e: React.FormEvent) => void
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSelectCountry: (country: string) => void
}
