'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Mail, MapPin, Building2, CalendarDays, Edit, ArrowRight } from 'lucide-react'

interface UserProfileProps {
  onNavigate?: (page: string) => void
}

export default function UserProfile({ onNavigate }: UserProfileProps) {
  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-5xl mx-auto">
      {/* Profile Header section with Cover and Avatar */}
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
        {/* Cover Image Placeholder */}
        <div className="h-32 md:h-48 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 flex flex-col md:flex-row md:items-end gap-6 -mt-12 md:-mt-16">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-card bg-card shadow-md">
            <AvatarImage src="/avatar-placeholder.png" alt="User Avatar" />
            <AvatarFallback className="text-3xl font-bold bg-indigo-600 text-white">AH</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Ashraf Hussain Siddiqui</h1>
            <p className="text-muted-foreground font-medium">Founder & CEO</p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => onNavigate && onNavigate('settings')}
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Details */}
        <div className="space-y-6 md:col-span-1">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate entrepreneur building AI solutions to help startups and small businesses make data-driven decisions effortlessly.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  ashraf@example.com
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  NovaCopilot Inc.
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  New York, USA
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <CalendarDays className="w-4 h-4 text-muted-foreground" />
                  Joined March 2026
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Activity and Stats */}
        <div className="space-y-6 md:col-span-2">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Card className="bg-card border-border text-center py-4">
              <CardContent className="p-0">
                <p className="text-3xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Reports Generated</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center py-4">
              <CardContent className="p-0">
                <p className="text-3xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Datasets Uploaded</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center py-4 hidden sm:block">
              <CardContent className="p-0">
                <p className="text-3xl font-bold text-foreground">94</p>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Insights Found</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>Your latest actions across NovaCopilot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { title: "Generated Weekly Q1 Sales Report", time: "2 hours ago", type: "report" },
                  { title: "Uploaded 'March_User_Feedback.csv'", time: "Yesterday", type: "data" },
                  { title: "Investigated an anomalous churn rate insight", time: "3 days ago", type: "insight" },
                  { title: "Changed account billing plan to Pro", time: "1 week ago", type: "settings" },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-0.5">
                      <div className={`w-2 h-2 rounded-full ring-4 ring-background ${
                        activity.type === 'report' ? 'bg-blue-500' :
                        activity.type === 'data' ? 'bg-emerald-500' :
                        activity.type === 'insight' ? 'bg-purple-500' : 'bg-orange-500'
                      }`} />
                    </div>
                    <div className="space-y-1 pb-4 border-b border-border w-full last:pb-0 last:border-0">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-xs font-semibold uppercase tracking-wider"
                onClick={() => onNavigate && onNavigate('dashboard')}
              >
                View All Activity <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
