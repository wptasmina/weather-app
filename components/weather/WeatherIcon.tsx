import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react"

const iconMap = {
  sunny: Sun,
  "partly-cloudy": Cloud,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: CloudSnow,
}

const WeatherIcon = ({ icon, size = 24 }: { icon: string; size?: number }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Sun
  return <IconComponent size={size} className="text-blue-400" />
}

export default WeatherIcon
