"use client"

import { Info, ChevronDown, Download, RefreshCw, MoreHorizontal, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import RiskGauge from "@/app/riskChart"

export function AlertsInsight() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">Alerts Insight</h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-gray-600">Select your fiat currency and your favourite payment method</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <span>Last 24 Hours</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <span>Keywords</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Risk Gauge */}
        <Card className="flex flex-row" >
          <div className="p-10">
            <RiskGauge />
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                <span>SERVICE</span>
                <span>RISK</span>
                <span>ALERTS</span>
              </div>
              {[
                "Data Exposures...",
                "Ransomware Leaks",
                "Compromised Endpoints",
                "Compromised Cookies",
                "I2P Links",
                "Tor Links",
                "Compromised Files",
                "Leaked Credentials",
              ].map((service, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-700">{service}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">Low</span>
                  </div>
                  <span className="text-gray-700">0</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services Table */}
        
          
    

        {/* Total Alerts */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">TOTAL ALERTS:</span>
                <span className="text-2xl font-bold text-gray-900">35.68k</span>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                {[
                  ["Viewed", "6"],
                  ["Unreviewed", "35.68k"],
                  ["Confirmed", "0"],
                  ["Under Review", "0"],
                  ["Remediation In Progress", "0"],
                  ["Remediation Not Required", "0"],
                ].map(([label, count], index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span>{label}</span>
                    </div>
                    <span className="font-medium">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Filtered Tags Cloud */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">AI Filtered Tags Cloud</h3>
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                {[
                  "#Ransomware",
                  "#DataBreach",
                  "#DDoSAttack",
                  "#Hacktivism",
                  "#ZeroDay",
                  "#NationStateThreat",
                  "#CredentialLeak",
                  "#InsiderThreat",
                ].map((tag, index) => (
                  <div key={index}>
                    <span className="text-blue-600">{tag}</span>
                    <br />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  "#Ransomware",
                  "#PhishingCampaign",
                  "#SupplyChainAttack",
                  "#CyberEspionage",
                  "#DarkWebSale",
                  "#ThreatActor",
                  "#FinancialFraud",
                  "#Malware",
                ].map((tag, index) => (
                  <div key={index}>
                    <span className="text-blue-600">{tag}</span>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Severity Distribution */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Severity Distribution</h3>
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                ["Data Exposures", "60%", "bg-blue-500"],
                ["Ransomware Leaks", "45%", "bg-purple-500"],
                ["Compromised End...", "35%", "bg-gray-600"],
                ["Compromised Co...", "25%", "bg-gray-600"],
                ["I2P Links", "20%", "bg-red-500"],
              ].map(([label, percentage, color], index) => (
                <div key={index} className="space-y-2">
                  <span className="text-sm font-medium">{label}</span>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className={`${color} h-4 rounded-full`} style={{ width: percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
