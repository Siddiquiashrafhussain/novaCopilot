'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Eye, Share2 } from 'lucide-react'

const reports = [
  {
    id: 1,
    title: 'Monthly Performance Report',
    description: 'Comprehensive analysis of Q1 performance metrics',
    date: 'March 15, 2024',
    status: 'completed',
    pages: 24,
  },
  {
    id: 2,
    title: 'User Engagement Analysis',
    description: 'Deep dive into user behavior and engagement patterns',
    date: 'March 10, 2024',
    status: 'completed',
    pages: 18,
  },
  {
    id: 3,
    title: 'Conversion Funnel Report',
    description: 'Analysis of conversion rates across all channels',
    date: 'March 5, 2024',
    status: 'completed',
    pages: 12,
  },
  {
    id: 4,
    title: 'Traffic Sources Analysis',
    description: 'Breakdown of traffic by source and channel',
    date: 'February 28, 2024',
    status: 'completed',
    pages: 16,
  },
]

const templates = [
  { 
    name: 'Executive Summary', 
    icon: (
      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-end justify-center pb-2 shadow-sm border border-white/20">
        <div className="flex items-end gap-1 h-3/5 w-3/5">
          <div className="w-1/3 bg-green-400 h-[60%] rounded-[1px]"></div>
          <div className="w-1/3 bg-pink-500 h-[40%] rounded-[1px]"></div>
          <div className="w-1/3 bg-blue-500 h-[80%] rounded-[1px]"></div>
        </div>
      </div>
    ), 
    description: 'High-level overview for stakeholders' 
  },
  { 
    name: 'Detailed Analysis', 
    icon: (
      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-indigo-100 to-gray-200 rounded-2xl relative shadow-sm border border-white/20 overflow-hidden">
        {/* Chart Line Mock */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
           <div className="w-full h-px bg-black mb-4"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
           <div className="h-full w-px bg-black ml-4"></div>
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path d="M10,80 L40,50 L60,60 L90,20" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10,80 L40,50 L60,60 L90,20 L90,100 L10,100 Z" fill="#3b82f6" fillOpacity="0.2" />
        </svg>
      </div>
    ), 
    description: 'Comprehensive data breakdown' 
  },
  { 
    name: 'Custom Report', 
    icon: (
      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg border border-gray-600/50">
        <svg className="w-8 h-8 text-indigo-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      </div>
    ), 
    description: 'Build your own report' 
  },
  { 
    name: 'Automated Weekly', 
    icon: (
      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-md border border-blue-300/30">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
    ), 
    description: 'Auto-generated weekly insights' 
  },
]

export default function Reports() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-1">Create, view, and manage your analytics reports</p>
      </div>

      {/* Report Templates */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Create New Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, i) => (
            <Card
              key={i}
              className="bg-[#0f111a] border border-[#1e2230] rounded-2xl w-full max-w-sm"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex-1 flex flex-col items-center text-center justify-center mb-6">
                  <div className="mb-6">{template.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{template.name}</h3>
                  <p className="text-sm text-gray-400">{template.description}</p>
                </div>
                <Button 
                  onClick={() => alert(`Starting creation of: ${template.name}...`)}
                  className="w-full bg-[#9059e8] hover:bg-[#7e4ad3] text-white font-semibold rounded-xl py-6 tracking-wide transition-colors"
                >
                  Create
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <Card key={report.id} className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span>📅 {report.date}</span>
                      <span>📄 {report.pages} pages</span>
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 rounded">
                        {report.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Report Scheduling */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Report Scheduling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Weekly Summary', schedule: 'Every Monday at 9:00 AM', recipient: 'team@example.com' },
              { name: 'Monthly Analysis', schedule: 'First day of month at 8:00 AM', recipient: 'management@example.com' },
            ].map((schedule, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{schedule.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {schedule.schedule} → {schedule.recipient}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
