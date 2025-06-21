"use client"

import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react"

const WeatherIcon = ({ icon, size = 24 }: { icon: string | number | undefined; size?: number }) => {
  const iconMap = {
    sunny: Sun,
    "partly-cloudy": Cloud,
    cloudy: Cloud,
    rainy: CloudRain,
    snowy: CloudSnow,
  }

  const IconComponent = iconMap[icon as keyof typeof iconMap] || Sun
  return <IconComponent size={size} className="text-blue-400" />
}

export default WeatherIcon