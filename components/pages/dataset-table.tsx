'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

interface Dataset {
  id: string
  date: string
  revenue: number
  units: number
  region: string
  status: 'PROCESSED' | 'FLAGGED' | 'PENDING'
}

interface DatasetTableProps {
  data?: Dataset[]
}

const sampleData: Dataset[] = [
  {
    id: '#8821',
    date: '2023-06-12',
    revenue: 12400,
    units: 450,
    region: 'North',
    status: 'PROCESSED',
  },
  {
    id: '#8822',
    date: '2023-06-13',
    revenue: 9800,
    units: 310,
    region: 'South',
    status: 'FLAGGED',
  },
  {
    id: '#8823',
    date: '2023-06-14',
    revenue: 15200,
    units: 520,
    region: 'East',
    status: 'PROCESSED',
  },
  {
    id: '#8824',
    date: '2023-06-15',
    revenue: 11100,
    units: 390,
    region: 'West',
    status: 'PENDING',
  },
]

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'PROCESSED':
      return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
    case 'FLAGGED':
      return 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    case 'PENDING':
      return 'bg-slate-500/20 text-slate-300 border-slate-500/30'
    default:
      return 'bg-slate-500/20 text-slate-300 border-slate-500/30'
  }
}

export default function DatasetTable({ data = sampleData }: DatasetTableProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Dataset Preview</CardTitle>
        <div className="flex items-center gap-2 text-sm">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 font-medium">Live</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">ID</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">DATE</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">REVENUE</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">UNITS</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">REGION</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-3 px-4 text-foreground font-medium">{row.id}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row.date}</td>
                  <td className="py-3 px-4 text-foreground font-semibold text-green-400">
                    ${row.revenue.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{row.units}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row.region}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={`capitalize text-xs border ${getStatusStyles(row.status)}`}
                    >
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
