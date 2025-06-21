
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