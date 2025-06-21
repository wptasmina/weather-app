"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe, ThermometerSun, Droplets, Wind } from "lucide-react";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  country: string;
};

const mockWeatherData: WeatherData[] = [
  {
    city: "Dhaka",
    temperature: 32,
    condition: "Sunny",
    humidity: 60,
    windSpeed: 12,
    country: "Bangladesh",
  },
  {
    city: "Sylhet",
    temperature: 28,
    condition: "Cloudy",
    humidity: 70,
    windSpeed: 8,
    country: "Bangladesh",
  },
  {
    city: "Chittagong",
    temperature: 30,
    condition: "Rainy",
    humidity: 75,
    windSpeed: 10,
    country: "Bangladesh",
  },
];

export default function CountryWeatherApp() {
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);

  useEffect(() => {
    // Simulate loading from API
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {weatherData
        ? weatherData.map((data, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 shadow-md rounded-2xl border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Globe className="h-5 w-5 text-blue-500" />
                  {data.city}, {data.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <ThermometerSun className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm">{data.temperature}°C - {data.condition}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-cyan-500" />
                  <span className="text-sm">Humidity: {data.humidity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-sky-500" />
                  <span className="text-sm">Wind: {data.windSpeed} km/h</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {data.condition}
                </Badge>
              </CardContent>
            </Card>
          ))
        : Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-[180px] w-full rounded-2xl" />
          ))}
    </div>
  );
}
