"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ExecutiveInsight } from "@/components/executive-insight"
import { AlertsInsight } from "@/components/alerts-insight"
import { AssetInventory } from "@/components/asset-inventory"
import { NewsFlash } from "@/components/news-flash"
import { Newsfeed } from "@/components/newsfeed"

export default function ArmAuditDashboard() {
  const [activeTab, setActiveTab] = useState("Executive Insight")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Executive Insight":
        return <ExecutiveInsight />
      case "Alerts Insight":
        return <AlertsInsight />
      case "Asset Inventory":
        return <AssetInventory />
      case "NewsFlash":
        return <NewsFlash />
      case "Newsfeed":
        return <Newsfeed />
      default:
        return <ExecutiveInsight />
    }
  }

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Select your fiat currency and your favourite payment method</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-200">
            {["Executive Insight", "Alerts Insight", "Asset Inventory", "NewsFlash", "Newsfeed"].map((tab) => (
              <button
                key={tab}
                className={`pb-3 font-medium ${
                  activeTab === tab ? "border-b-2 border-[#46e595] text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "Asset Inventory" ? "Advisories" : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </main>
      </div>
    </div>
  )
}
