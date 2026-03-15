'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function AnalysisComplete() {
  return (
    <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <CheckCircle className="w-10 h-10 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Analysis Complete</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your dataset has been processed with high confidence
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-3xl font-bold text-indigo-300">98.4%</p>
            <p className="text-xs text-muted-foreground mt-1">Accuracy</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
