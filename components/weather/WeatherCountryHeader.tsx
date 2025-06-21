"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// interface WeatherCountryHeaderProps {
//   countryData: {
//     flag: string
//     name: string
//     code: string
//     timezone: string
//     cities: any[]
//   }
// }

// After (good)
interface City {
  name: string;
  temperature: number;
  // ... other city fields
}

interface CountryData {
  flag: string;
  name: string;
  code: string;
  timezone: string;
  cities: City[];
}

interface WeatherCountryHeaderProps {
  countryData: CountryData; // ✅ Explicit type
}

export default function WeatherCountryHeader({ countryData }: WeatherCountryHeaderProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{countryData.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{countryData.name}</h2>
              <p className="text-slate-300">
                {countryData.code} • {countryData.timezone}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {countryData.cities.length} Cities
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}