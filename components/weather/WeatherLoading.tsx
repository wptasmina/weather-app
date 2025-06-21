"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function WeatherLoading() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Skeleton className="h-8 w-64 mx-auto bg-white/20" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-64 bg-white/20 rounded-xl" />
        ))}
      </div>
    </div>
  )
}