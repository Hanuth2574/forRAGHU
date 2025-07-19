"use client"

import {
  BarChart3,
  Globe,
  Eye,
  Users,
  Shield,
  AlertTriangle,
  Activity,
  Bell,
  Settings,
  ChevronDown,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-4">MAIN MENU</div>
        <nav className="space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 bg-green-50 rounded-lg text-gray-900 font-medium">
            <BarChart3 className="w-4 h-4 text-[#46e595]" />
            Dashboard
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Globe className="w-4 h-4 text-[#46e595]" />
            Attack Surface
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Eye className="w-4 h-4 text-[#46e595]" />
            Threat Intelligence
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Users className="w-4 h-4 text-[#46e595]" />
            Geolocation
            <ChevronDown className="w-4 h-4 ml-auto" />
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Shield className="w-4 h-4 text-[#46e595]" />
            DeepFake
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-[#46e595]" />
            Physical Threats
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Shield className="w-4 h-4 text-[#46e595]" />
            Cloud Security
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Eye className="w-4 h-4 text-[#46e595]" />
            Brand Intelligence
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Activity className="w-4 h-4 text-[#46e595]" />
            Vulnerability Intelligence
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Bell className="w-4 h-4 text-[#46e595]" />
            Alerts
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Activity className="w-4 h-4 text-[#46e595]" />
            Executive monitoring
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Settings className="w-4 h-4 text-[#46e595]" />
            Settings
          </div>
        </nav>
      </div>
    </aside>
  )
}
