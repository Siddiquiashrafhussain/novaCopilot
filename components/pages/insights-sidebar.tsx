'use client'

import AIInsightsCard from './ai-insights-card'

interface InsightsSidebarProps {
  onInvestigate?: (index: number) => void
  onDismiss?: (index: number) => void
}

export default function InsightsSidebar({ onInvestigate, onDismiss }: InsightsSidebarProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="text-indigo-400">✨</span>
          AI INSIGHTS
        </h2>
      </div>

      <div className="space-y-3">
        <AIInsightsCard
          type="warning"
          title="Revenue Dip Detected"
          description="Anomalous revenue dip of 14.2% detected in the Northern region for June."
          actionLabel="INVESTIGATE"
          secondaryActionLabel="DISMISS"
          onAction={() => onInvestigate?.(0)}
          onSecondaryAction={() => onDismiss?.(0)}
        />

        <AIInsightsCard
          type="success"
          title="Growth Opportunity"
          description="Southern region inventory turnover is 2.5x higher than average. Consider restock."
          metric="Current Turnover"
          metricValue="2.5x"
          metricHighlight={true}
          actionLabel="VIEW ANALYSIS"
          onAction={() => onInvestigate?.(1)}
        />

        <AIInsightsCard
          type="info"
          title="Nova Suggestion"
          description="I've identified a correlation between weekend promotions and high-value customer retention."
          actionLabel="View Correlation Data"
          onAction={() => onInvestigate?.(2)}
        />

        <div className="mt-6 p-4 bg-secondary/50 border border-border rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-2xl">●</span>
            <div>
              <h4 className="font-semibold text-sm text-foreground">Data Integrity</h4>
              <p className="text-xs text-muted-foreground mt-1">
                32 records were automatically corrected for inconsistent date formats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
