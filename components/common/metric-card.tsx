'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: string
  change: string
  icon: string
  isPositive?: boolean
  subtext?: string
}

export default function MetricCard({
  label,
  value,
  change,
  icon,
  isPositive = true,
  subtext,
}: MetricCardProps) {
  return (
    <Card className="bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
            <div className="flex items-center gap-1 mt-2">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {change}
              </p>
              {subtext && <span className="text-xs text-muted-foreground ml-1">{subtext}</span>}
            </div>
          </div>
          <span className="text-3xl">{icon}</span>
        </div>
      </CardContent>
    </Card>
  )
}
