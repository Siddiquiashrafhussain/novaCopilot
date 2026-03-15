'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/sidebar'
import TopBar from '@/components/layout/top-bar'
import DashboardOverview from '@/components/pages/dashboard-overview'
import ChatAssistant from '@/components/pages/chat-assistant'
import DataInsights from '@/components/pages/data-insights'
import Reports from '@/components/pages/reports'
import Settings from '@/components/pages/settings'
import UserProfile from '@/components/pages/user-profile'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderPage = () => {
    switch (currentPage) {
      case 'chat':
        return <ChatAssistant />
      case 'insights':
        return <DataInsights />
      case 'reports':
        return <Reports />
      case 'profile':
        return <UserProfile onNavigate={setCurrentPage} />
      case 'settings':
        return <Settings />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isOpen={sidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <TopBar 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          onNavigate={setCurrentPage}
        />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
