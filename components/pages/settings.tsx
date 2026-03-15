'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Lock, Users, Database } from 'lucide-react'

interface ToggleSetting {
  id: string
  label: string
  description: string
  enabled: boolean
}

export default function Settings() {
  const [notifications, setNotifications] = useState<ToggleSetting[]>([
    {
      id: 'daily',
      label: 'Daily Digest',
      description: 'Receive daily summary of analytics',
      enabled: true,
    },
    {
      id: 'alerts',
      label: 'Critical Alerts',
      description: 'Get notified of unusual activity',
      enabled: true,
    },
    {
      id: 'weekly',
      label: 'Weekly Report',
      description: 'Receive comprehensive weekly report',
      enabled: false,
    },
    {
      id: 'updates',
      label: 'Product Updates',
      description: 'Learn about new features',
      enabled: true,
    },
  ])

  const toggleSetting = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    )
  }

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and application preferences</p>
      </div>

      {/* Account Settings */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Users className="w-5 h-5" />
            Account Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Full Name</label>
            <Input
              defaultValue="John Doe"
              className="mt-2 bg-input border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Email Address</label>
            <Input
              type="email"
              defaultValue="john@example.com"
              className="mt-2 bg-input border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Company</label>
            <Input
              defaultValue="Acme Corporation"
              className="mt-2 bg-input border-border"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Two-Factor Authentication
          </Button>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Active Sessions</p>
            <div className="space-y-2">
              {[
                { device: 'Chrome on MacOS', location: 'New York, USA', last: '2 hours ago', current: true },
                { device: 'Safari on iPhone', location: 'New York, USA', last: '1 day ago', current: false },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{session.device}</p>
                    <p className="text-xs text-muted-foreground">{session.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{session.last}</p>
                    {session.current && <p className="text-xs text-green-500">Current</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-start justify-between pb-4 border-b border-border last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{notif.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{notif.description}</p>
                </div>
                <button
                  onClick={() => toggleSetting(notif.id)}
                  className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notif.enabled ? 'bg-primary' : 'bg-secondary'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notif.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Database className="w-5 h-5" />
            Data & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Data Export</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Download all your data in a portable format
            </p>
            <Button variant="outline">Export Data</Button>
          </div>
          <div className="pt-4 border-t border-border">
            <h4 className="font-medium text-foreground mb-2">Danger Zone</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Permanently delete your account and all associated data
            </p>
            <Button variant="outline" className="text-red-500 hover:text-red-600">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
