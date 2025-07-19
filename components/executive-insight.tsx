"use client"

import { Sparkles, ChevronDown, AlertTriangle, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ExecutiveInsight() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Executive Insight</h2>
        <p className="text-gray-600">Select your fiat currency and your favourite payment method</p>
      </div>

      {/* AI Summary Card */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#46e595]" />
            <CardTitle className="text-lg">AI Summary</CardTitle>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="flex gap-8 mb-4">
            <div>
              <span className="font-medium">Status</span>
            </div>
            <div>
              <span className="font-medium">Insight</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            We discover publicly available websites, internal/admin applications, APIs, network device (firewall, router
            etc.) interfaces, IoT (camera) devices, virtual hosted applications etc. from the organisation inventory of
            domains, subdomains, IPs. We continuously scan the Asset Inventory (domains, subdomains, IPs, netblocks
            etc.) of the organisation for the exposed ports and parse them to discover web applications.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AlertTriangle className="w-4 h-4" />
            <span>
              AI-generated content may be incorrect.{" "}
              <button className="text-blue-600 hover:underline">Learn more</button>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Darkweb Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Darkweb Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Compromised Endpoints</div>
                <div className="text-2xl font-bold">
                  6,279 <span className="text-sm text-red-500">↓ 15.1%</span>
                </div>
              </div>
              <div className="w-16 h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,20 Q16,15 32,18 T64,16" stroke="#5454d4" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Data Exposures</div>
                <div className="text-2xl font-bold">
                  2,333 <span className="text-sm text-red-500">↓ 6.8%</span>
                </div>
              </div>
              <div className="w-16 h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,16 Q16,20 32,14 T64,18" stroke="#5454d4" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Compromised Files</div>
                <div className="text-2xl font-bold">
                  1,179 <span className="text-sm text-green-500">↑ 1.1%</span>
                </div>
              </div>
              <div className="w-16 h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,24 Q16,18 32,20 T64,12" stroke="#5454d4" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Leaked Credentials</div>
                <div className="text-2xl font-bold">
                  360 <span className="text-sm text-red-500">↓ 17.3%</span>
                </div>
              </div>
              <div className="w-16 h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,12 Q16,16 32,14 T64,20" stroke="#5454d4" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Ransomware Leaks</div>
                <div className="text-2xl font-bold">
                  29 <span className="text-sm text-red-500">↓ 7.7%</span>
                </div>
              </div>
              <div className="w-16 h-8">
                <svg viewBox="0 0 64 32" className="w-full h-full">
                  <path d="M0,18 Q16,22 32,16 T64,14" stroke="#5454d4" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tags Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tags Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">TAG</span>
              <span className="text-sm">Distribution</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cybersecurity Discussions</span>
                <span className="text-sm font-medium">50%</span>
              </div>
              <Progress value={50} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Probable India Bank account</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <Progress value={48} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Credit Card Number</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <Progress value={45} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Chinese</span>
                <span className="text-sm font-medium">43%</span>
              </div>
              <Progress value={43} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">IP Address</span>
                <span className="text-sm font-medium">40%</span>
              </div>
              <Progress value={40} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Crypto Currency</span>
                <span className="text-sm font-medium">39%</span>
              </div>
              <Progress value={39} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Arabic</span>
                <span className="text-sm font-medium">33%</span>
              </div>
              <Progress value={33} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Russian</span>
                <span className="text-sm font-medium">31%</span>
              </div>
              <Progress value={31} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Abusive Language</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <Progress value={32} className="h-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm">Probable Phone Number</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <Progress value={30} className="h-4" />
            </div>
          </CardContent>
        </Card>

        {/* Top Keywords */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Keywords</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">spotify.com</span>
              <span className="text-sm font-bold">6.4</span>
            </div>
            <Progress value={64} className="h-4 [&>div]:bg-yellow-500" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">BMW</span>
              <span className="text-sm font-bold">1.53k</span>
            </div>
            <Progress value={75} className="h-4 [&>div]:bg-purple-500" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">pacinsurance.com.au</span>
              <span className="text-sm font-bold">1.31k</span>
            </div>
            <Progress value={65} className="h-4 [&>div]:bg-blue-500" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Walmart.com</span>
              <span className="text-sm font-bold">947</span>
            </div>
            <Progress value={45} className="h-4 [&>div]:bg-green-500" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">wikipedia.org</span>
              <span className="text-sm font-bold">844</span>
            </div>
            <Progress value={40} className="h-4 [&>div]:bg-red-500" />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Cybercrime Statistics */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Cybercrime Statistics</CardTitle>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index}>
                <div className="text-sm text-gray-600 mb-1">Cybercrime Forum Mentions</div>
                <div className="text-2xl font-bold">
                  1,982 <span className="text-sm text-red-500">↓ 3%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Impacted Organisation */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Impacted organisation and associated business risk</CardTitle>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="flex gap-8 mb-4 text-sm font-medium">
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                THREAT ACTOR
              </span>
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                IMPACTED ORGANISATION
              </span>
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                LATEST NEWS FLASH
              </span>
            </div>
            <div className="space-y-3 text-sm">
              {[
                [
                  "Mohammed/DIGITAL People's Cy...",
                  "Danish Ministry Of Transport",
                  "Pro-russian Hacktivists Launch DDoS...",
                ],
                ["Lockbit3.0, RU, ru", "Ministry Of Public Health", "Data Allegedly Stolen From Ecuador..."],
                ["Counter", "% Latam Spa", "Data Allegedly Stolen From Tourpay a..."],
                ["Killnet (Killnet affiliate)", "Italian Senate", "Coordinated Cyberattack on Italian G..."],
                ["Anonymous Sudan", "Microsoft Azure", "Claimed Responsibility for Azure Out..."],
                ["Ragnar Locker", "Capcom (Japan)", "Ransomware Attack Exposes Internal..."],
                ["LAPSUS$ Group", "Nvidia", "Source Code Leaked After Breach"],
                ["APT29 (Cozy Bear)", "Norwegian Parliament", "Cyberespionage Linked to Russian St..."],
                ["BlackCat (ALPHV)", "Mercier", "Ransomware Attack Leads to Leak of..."],
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <span>{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
