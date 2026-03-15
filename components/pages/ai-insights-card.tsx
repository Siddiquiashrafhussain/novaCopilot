'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, TrendingUp, Lightbulb } from 'lucide-react'

interface AIInsightsCardProps {
  type: 'warning' | 'success' | 'info'
  title: string
  description: string
  metric?: string
  metricValue?: string | number
  metricHighlight?: boolean
  actionLabel?: string
  secondaryActionLabel?: string
  onAction?: () => void
  onSecondaryAction?: () => void
}

const typeStyles = {
  warning: {
    bg: 'bg-orange-500/10',
    border: 'border-l-4 border-orange-500',
    icon: AlertTriangle,
    title: 'text-orange-300',
  },
  success: {
    bg: 'bg-emerald-500/10',
    border: 'border-l-4 border-emerald-500',
    icon: TrendingUp,
    title: 'text-emerald-300',
  },
  info: {
    bg: 'bg-indigo-500/10',
    border: 'border-l-4 border-indigo-500',
    icon: Lightbulb,
    title: 'text-indigo-300',
  },
}

export default function AIInsightsCard({
  type,
  title,
  description,
  metric,
  metricValue,
  metricHighlight = false,
  actionLabel = 'Investigate',
  secondaryActionLabel = 'Dismiss',
  onAction,
  onSecondaryAction,
}: AIInsightsCardProps) {
  const styles = typeStyles[type]
  const IconComponent = styles.icon

  return (
    <Card className={`${styles.bg} ${styles.border} border-0 bg-card border-border`}>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <IconComponent className={`w-5 h-5 flex-shrink-0 ${styles.title} mt-0.5`} />
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-sm ${styles.title}`}>{title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>

              {metric && metricValue && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">{metric}</p>
                  <p className={`text-lg font-bold mt-1 ${metricHighlight ? styles.title : 'text-foreground'}`}>
                    {metricValue}
                  </p>
                </div>
              )}
            </div>
          </div>

          {(onAction || onSecondaryAction) && (
            <div className="flex gap-2 pt-2">
              {onAction && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={onAction}
                  className="text-xs h-8 px-3"
                >
                  {actionLabel}
                </Button>
              )}
              {onSecondaryAction && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onSecondaryAction}
                  className="text-xs h-8 px-3"
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
