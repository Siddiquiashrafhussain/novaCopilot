import { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileUp, Download, Lightbulb, UserPlus, TrendingUp } from 'lucide-react'

export default function DataInsights() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleDownloadClick = () => {
    alert("Downloading report...")
  }

  const handleSaveDraft = () => {
    alert("Report saved as draft successfully!")
  }

  const handlePublishReport = () => {
    alert("Report published successfully!")
  }

  return (
    <div className="p-6 lg:p-8 min-h-screen bg-background text-foreground font-sans">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-[1400px] mx-auto">
        
        {/* LEFT COLUMN: Data Upload & Insights */}
        <div className="xl:col-span-6 space-y-8">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Data Upload & Insights</h1>
            <p className="text-muted-foreground mt-2 text-sm">Upload your datasets to generate AI-powered growth reports.</p>
          </div>

          {/* Upload Area */}
          <div className="border border-dashed border-border rounded-3xl bg-secondary/50 p-12 flex flex-col items-center justify-center text-center transition-colors hover:bg-secondary">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <FileUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">Drag & drop files here</h3>
            <p className="text-muted-foreground text-sm mb-8">Support for CSV, Excel, and PDF (Max 50MB)</p>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              multiple 
              accept=".csv,.xlsx,.xls,.pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  alert(`Selected ${e.target.files.length} file(s) for upload.`)
                }
              }}
            />
            <Button onClick={handleBrowseClick} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-2 rounded-xl h-auto transition-colors">
              Browse Files
            </Button>
          </div>

          {/* Recent Datasets */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground tracking-tight">Recent Datasets</h2>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full">3 Total</span>
            </div>

            <Card className="bg-card border-border rounded-2xl overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border text-xs font-bold text-muted-foreground tracking-wider uppercase">
                <div className="col-span-6">Dataset Name</div>
                <div className="col-span-3">Status</div>
                <div className="col-span-3 text-right">Action</div>
              </div>
              
              {/* List Items */}
              <div className="divide-y divide-border">
                {/* Item 1 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-secondary transition-colors">
                  <div className="col-span-6">
                    <p className="text-sm font-semibold text-foreground truncate">Q3_Revenue_Data.csv</p>
                    <p className="text-xs text-muted-foreground mt-0.5">2.4 MB • 2h ago</p>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded-md">
                      READY
                    </span>
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted h-8">View</Button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-secondary transition-colors">
                  <div className="col-span-6">
                    <p className="text-sm font-semibold text-foreground truncate">Customer_Churn_Analysis.xlsx</p>
                    <p className="text-xs text-muted-foreground mt-0.5">4.1 MB • 5m ago</p>
                  </div>
                  <div className="col-span-6 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[68%]" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-primary w-8 text-right">68%</span>
                    <span className="text-xs text-muted-foreground italic hidden sm:inline-block w-16 text-right">Processing</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT COLUMN: Insights & Reports */}
        <div className="xl:col-span-6 space-y-6">
          {/* Draft Report */}
          <Card className="bg-card border-border rounded-3xl p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-md mb-4 inline-block">
                  DRAFT REPORT
                </span>
                <h2 className="text-2xl font-extrabold text-foreground tracking-tight mt-2">Q3 Revenue & Growth<br/>Analysis</h2>
                <p className="text-sm text-muted-foreground mt-2">Based on "Q3_Revenue_Data.csv"</p>
              </div>
              <Button size="icon" variant="ghost" onClick={handleDownloadClick} className="bg-secondary hover:bg-muted text-foreground rounded-xl h-10 w-10">
                <Download className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-secondary rounded-2xl p-4 border border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Total Revenue</p>
                <p className="text-xl sm:text-2xl font-black text-foreground">$428.5k</p>
                <p className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1">↑ 12.4%</p>
              </div>
              <div className="bg-secondary rounded-2xl p-4 border border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Avg Order Value</p>
                <p className="text-xl sm:text-2xl font-black text-foreground">$84.20</p>
                <p className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1">↑ 3.1%</p>
              </div>
              <div className="bg-secondary rounded-2xl p-4 border border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Growth Opp.</p>
                <p className="text-xl sm:text-2xl font-black text-foreground">18.2%</p>
                <p className="text-xs font-bold text-primary mt-2">High Potential</p>
              </div>
            </div>
          </Card>

          {/* AI Recommendations */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-3.5 h-3.5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">AI Recommendations</h3>
            </div>

            {/* Glowing Card 1 */}
            <div className="relative group">
              {/* Glow border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-primary/10 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative bg-card border-l-4 border-l-primary border-t-border border-r-border border-b-border rounded-2xl p-6 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 shrink-0 flex items-center justify-center border border-primary/20 mt-1">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Optimize Mid-Week Ad Spend</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Data shows a 42% higher conversion rate on Tuesdays and Wednesdays. Shifting budget from weekends could improve ROI by 15%.
                  </p>
                </div>
              </Card>
            </div>

            {/* Glowing Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-primary/10 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative bg-card border-l-4 border-l-primary border-t-border border-r-border border-b-border rounded-2xl p-6 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 shrink-0 flex items-center justify-center border border-emerald-500/20 mt-1">
                  <UserPlus className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Customer Retention Strategy</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    High churn detected in the "Enterprise" tier. Recommend automated follow-up sequences for accounts inactive {'>'} 10 days.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Button onClick={handleSaveDraft} variant="ghost" className="border border-border hover:bg-secondary text-foreground px-6 py-6 rounded-2xl">
              Save as Draft
            </Button>
            <Button onClick={handlePublishReport} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-lg shadow-primary/20">
              Publish Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
