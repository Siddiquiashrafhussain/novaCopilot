'use client'

import { Card, CardContent } from '@/components/ui/card'

interface InsightCardProps {
  title: string
  description: string
  icon: string
  accent?: string
  onClick?: () => void
}

export default function InsightCard({
  title,
  description,
  icon,
  accent = 'bg-primary/20',
  onClick,
}: InsightCardProps) {
  return (
    <Card
      className={`bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg cursor-pointer ${
        onClick ? 'hover:bg-card/80' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className={`${accent} p-3 rounded-lg`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
