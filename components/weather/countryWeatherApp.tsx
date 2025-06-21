"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import WeatherSearch from "@/components/weather/WeatherSearch"
import WeatherCountryHeader from "@/components/weather/WeatherCountryHeader"
import WeatherCard from "@/components/weather/WeatherCard"
import WeatherNoResults from "@/components/weather/WeatherNoResults"
import WeatherLoading from "@/components/weather/WeatherLoading"
import mockCountryData from "@/data/mockCountryData"


export default function CountryWeatherApp() {
  const [searchQuery, setSearchQuery] = useState("")
  const [setSelectedCountry] = useState<string | null>(null)
  const [countryData, setCountryData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const availableCountries = Object.keys(mockCountryData)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setShowSearchResults(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const country = availableCountries.find((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))

    if (country) {
      setSelectedCountry(country)
      setCountryData(mockCountryData[country as keyof typeof mockCountryData])
    } else {
      setSelectedCountry(null)
      setCountryData(null)
    }

    setIsLoading(false)
    setSearchQuery("")
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.length > 0) {
      const filtered = availableCountries.filter((country) => country.toLowerCase().includes(value.toLowerCase()))
      setSearchResults(filtered.slice(0, 5))
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
    }
  }

  const handleSelectCountry = (country: string) => {
    setSearchQuery(country)
    setShowSearchResults(false)
    // Auto-search when selecting from dropdown
    setTimeout(() => {
      const form = document.querySelector("form")
      if (form) {
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
      }
    }, 100)
  }

  useEffect(() => {
    // Load default country on mount
    setSelectedCountry("United States")
    setCountryData(mockCountryData["United States"])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Globe className="text-blue-400" size={40} />
            Country Weather
          </h1>
          <p className="text-slate-300">Discover weather conditions across countries worldwide</p>
        </div>

        {/* Search */}
        <Card className="mb-8 bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <WeatherSearch
              searchQuery={searchQuery}
              isLoading={isLoading}
              searchResults={searchResults}
              showSearchResults={showSearchResults}
              onSearch={handleSearch}
              onSearchChange={handleSearchInputChange}
              onSelectCountry={handleSelectCountry}
            />
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && <WeatherLoading />}

        {/* Country Weather Data */}
        {!isLoading && countryData && (
          <div className="space-y-6">
            <WeatherCountryHeader countryData={countryData} />
            
            {/* Cities Weather Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countryData.cities.map((city: any, index: number) => (
                <WeatherCard key={index} city={city} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && !countryData && (
          <WeatherNoResults
            availableCountries={availableCountries}
            onSelectCountry={handleSelectCountry}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  )
}