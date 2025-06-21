"use client"

import { Search, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface WeatherSearchProps {
  searchQuery: string
  isLoading: boolean
  searchResults: string[]
  showSearchResults: boolean
  onSearch: (e: React.FormEvent) => void
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSelectCountry: (country: string) => void
}

export default function WeatherSearch({
  searchQuery,
  isLoading,
  searchResults,
  showSearchResults,
  onSearch,
  onSearchChange,
  onSelectCountry,
}: WeatherSearchProps) {
  return (
    <div className="relative">
      <form onSubmit={onSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
          <Input
            type="text"
            placeholder="Search for a country (e.g., United States, Japan, Australia)..."
            value={searchQuery}
            onChange={onSearchChange}
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            disabled={isLoading}
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
            </div>
          )}
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>

      {/* Search Results Dropdown */}
      {showSearchResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {searchResults.map((country, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-white border-b border-gray-700 last:border-b-0 flex items-center gap-2"
              onClick={() => onSelectCountry(country)}
            >
              <Globe size={16} className="text-gray-400" />
              <span>{country}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}