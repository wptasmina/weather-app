// in src/types/weather.ts:
export interface CountryData {
  name: string;
  code: string;
  flag: string;
  timezone: string;
  cities: Array<{
    name: string;
    temperature: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    pressure: number;
    visibility: number;
    high: number;
    low: number;
  }>;
}
