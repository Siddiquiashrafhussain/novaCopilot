'use client'

import { Menu, Bell, Search, User, LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/common/theme-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface TopBarProps {
  onToggleSidebar: () => void
  onNavigate?: (page: string) => void
}

export default function TopBar({ onToggleSidebar, onNavigate }: TopBarProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="hidden lg:flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt="NovaCopilot"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-sm font-bold text-foreground">NovaCopilot</h1>
            <p className="text-xs text-muted-foreground">AI Assistant</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs ml-8">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="bg-secondary border-0 h-9"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="font-semibold text-sm leading-none">New Weekly Report</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1.5 ml-4">Your Q1 sales report is ready to view.</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="font-semibold text-sm leading-none">Data Processing Complete</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1.5 ml-4">March_User_Feedback.csv has been analyzed.</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center w-full text-xs text-muted-foreground justify-center p-2 cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-white text-sm font-bold">U</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
              if (onNavigate) {
                onNavigate('profile')
              }
            }}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile & Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:bg-destructive/10">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
