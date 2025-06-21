"use client"

import { Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface WeatherNoResultsProps {
  availableCountries: string[]
  onSelectCountry: (country: string) => void
  searchQuery: string
}

export default function WeatherNoResults({
  availableCountries,
  onSelectCountry,
  searchQuery,
}: WeatherNoResultsProps) {
  return (
    <div className="text-center py-12">
      <Globe className="mx-auto text-slate-400 mb-4" size={64} />
      {searchQuery === "" ? (
        <>
          <h3 className="text-xl font-semibold text-white mb-2">Search for a Country</h3>
          <p className="text-slate-300">Enter a country name to see weather conditions in major cities</p>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-white mb-2">Country Not Found</h3>
          <p className="text-slate-300 mb-4">We couldn&apos;t find weather data for that country. Try searching for:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {availableCountries.slice(0, 5).map((country) => (
              <Badge
                key={country}
                variant="outline"
                className="cursor-pointer hover:bg-blue-600 hover:text-white border-blue-400 text-blue-400"
                onClick={() => onSelectCountry(country)}
              >
                {country}
              </Badge>
            ))}
          </div>
        </>
      )}
    </div>
  )
}