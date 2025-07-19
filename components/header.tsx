"use client"

import { Search, Bell, Settings, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white text-gray-900 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#46e595]" />
          <span className="font-semibold text-lg">ArmAudit</span>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-10 w-64 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘ K</span>
        </div>
        <Badge className="bg-[#46e595] hover:bg-teal-600 font-bold text-black h-10">Add keyword</Badge>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-gray-600" />
        <Settings className="w-5 h-5 text-gray-600" />
        <HelpCircle className="w-5 h-5 text-gray-600" />
        <div className="w-6 h-6 bg-[#46e595] rounded-full"></div>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">Jacob Shealy</div>
            <div className="text-gray-500 text-xs">jacob@armaudit.com</div>
          </div>
        </div>
      </div>
    </header>
  )
}
