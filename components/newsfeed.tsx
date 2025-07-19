"use client"

import { Search, ChevronDown, Download, RefreshCw, MoreHorizontal, AlertTriangle, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ThreatActorsPieChart from "@/app/pieChartComp"

export function Newsfeed() {
  const customData = [
    { name: "Lockbit", value: 40, fill: "#7aaff4" },
    { name: "Lazarus", value: 25, fill: "#f4dc7a" },
    { name: "Kimsuky", value: 15, fill: "#ecb467" },
    { name: "Blackcat", value: 12, fill: "#e396aa" },
    { name: "VoltTyphoon", value: 8, fill: "#b1e1c4" },
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">Armaudit Newsfeed</h2>
          </div>
          <p className="text-gray-600">Select your fiat currency and your favourite payment method</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for IP=192.168.1.1 or Domain..."
              className="pl-10 w-80 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <span>Select Duration</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-4 mb-6 overflow-x-auto">
        {[
          ["Source", "0"],
          ["Industries", "0"],
          ["Countries", "1"],
          ["Regions", "0"],
          ["Threat Actors", "0"],
          ["Malware Families", "0"],
          ["Tags", "0"],
          ["Techniques", "0"],
        ].map(([label, count], index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent whitespace-nowrap"
          >
            <span>{label}</span>
            <Badge
              className={`${count === "1" ? "bg-[#46e595]" : "bg-gray-200"} text-gray-700 text-xs px-1.5 py-0.5 ml-1`}
            >
              {count}
            </Badge>
            <ChevronDown className="w-4 h-4" />
          </Button>
        ))}
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Newsfeed country wise */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Newsfeed country wise (Top 5)</CardTitle>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                ["United States", "2,801", "100%"],
                ["Russian Federation", "1,041", "37%"],
                ["China", "959", "34%"],
                ["United Kingdom", "574", "20%"],
                ["Germany", "445", "16%"],
              ].map(([country, count, percentage], index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{country}</span>
                    <span className="text-sm font-bold">{count}</span>
                  </div>
                  <div className="w-full rounded-full h-4 mt-1">
                    <div className="bg-[#46e595] h-4 rounded-full" style={{ width: percentage }}></div>
                  </div>
                  <div className="w-full bg-gray-200 h-[2px] mt-2"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Total Records: <span className="font-medium">12,390</span>
            </div>
          </CardContent>
        </Card>

        {/* Top 5 threat actors */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Top 5 threat actors</CardTitle>
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div>
              <ThreatActorsPieChart
                title="Security Threats Analysis"
                centerValue="75,432"
                centerLabel="Total Incidents"
                data={customData}
              />
              <div className="ml-6 space-y-2">
                {[
                  ["Lockbit", "bg-[#e396aa]"],
                  ["Lazarus", "bg-[#f5de82]"],
                  ["Kimsuky", "bg-yellow-500"],
                  ["BlackCat", "bg-green-500"],
                  ["VoltTyphoon", "bg-blue-500"],
                ].map(([name, color], index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${color} rounded-full`}></div>
                    <span className="text-sm text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 5 Trending */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Top 5 Trending</CardTitle>
            <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
              <span className="text-sm">Industry</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                ["Government & LEA", "2,801", "100%"],
                ["IT & ITES", "2,801", "100%"],
                ["BFSI", "2,801", "100%"],
                ["Technology", "2,801", "100%"],
                ["Healthcare", "2,601", "93%"],
              ].map(([industry, count, percentage], index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{industry}</span>
                    <span className="text-sm font-bold">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-orange-500 h-4 rounded-full" style={{ width: percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Recommendations */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">News Recommendations</h3>
        <div className="space-y-4">
          {/* News Card 1 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-48 h-32 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-900"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-xs text-gray-300">Security Alert</div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Cyber Security News</Badge>
                    <span className="text-sm text-gray-500">5May 2025</span>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">
                    Researcher Details CVE-2024-44131: A Critical TCC Bypass in macOS and iOS
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    This article discusses the CVE-2024-44131 vulnerability in Apple's TCC framework, allowing malicious
                    applications to bypass user consent mechanisms on macOS and iOS. Attackers can access sensitive data
                    without user knowledge, impacting user privacy and organisational data security. The exploit
                    involves symbolic...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>1 Industries</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>1 Malware Families</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>4 Tags</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>2 CVES</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* News Card 2 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-48 h-32 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-900"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-xs text-gray-300">Security Alert</div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Cyber Security News</Badge>
                    <span className="text-sm text-gray-500">5May 2025</span>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">
                    Researcher Details CVE-2024-44131: A Critical TCC Bypass in macOS and iOS
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    This article discusses the CVE-2024-44131 vulnerability in Apple's TCC framework, allowing malicious
                    applications to bypass user consent mechanisms on macOS and iOS. Attackers can access sensitive data
                    without user knowledge, impacting user privacy and organisational data security. The exploit
                    involves symbolic...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>1 Industries</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>1 Malware Families</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>4 Tags</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>2 CVES</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
