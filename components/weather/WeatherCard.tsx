"use client"

import { MapPin, Droplets, Wind, Gauge, Eye } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import WeatherIcon from "./WeatherIcon"
import { CityWeather } from "@/types"

interface WeatherCardProps {
  city: CityWeather
}


export default function WeatherCard({ city }: WeatherCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <MapPin size={16} className="text-blue-400" />
          {city.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Temperature and Icon */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-light text-white">{city.temperature}°C</div>
            <div className="text-slate-300 text-sm">{city.condition}</div>
          </div>
          <WeatherIcon icon={city.icon} size={48} />
        </div>

        {/* High/Low */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-300">High: {city.high}°</span>
          <span className="text-slate-300">Low: {city.low}°</span>
        </div>

        {/* Weather Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets size={14} className="text-blue-400" />
              <span className="text-slate-300">Humidity</span>
            </div>
            <span className="text-white">{city.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind size={14} className="text-blue-400" />
              <span className="text-slate-300">Wind</span>
            </div>
            <span className="text-white">{city.windSpeed} km/h</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gauge size={14} className="text-blue-400" />
              <span className="text-slate-300">Pressure</span>
            </div>
            <span className="text-white">{city.pressure} hPa</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-blue-400" />
              <span className="text-slate-300">Visibility</span>
            </div>
            <span className="text-white">{city.visibility} km</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}