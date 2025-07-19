"use client"

import { useState } from "react"
import { Search, ChevronDown, Download, RefreshCw, MoreHorizontal, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AssetInventory() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    pixpirate: true,
    "microsoft-windows": true,
  })

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">Asset Inventory</h2>
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
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Severities</span>
          <Badge className="bg-gray-200 rounded-full text-gray-700 text-xs px-1.5 py-0.5 ml-1">0</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Countries</span>
          <Badge className="bg-[#46e595] rounded-full text-gray-700 text-xs px-1.5 py-0.5 ml-1">1</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Regions</span>
          <Badge className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 ml-1">0</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Industries</span>
          <Badge className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 ml-1">0</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Asset Cards */}
      <div className="space-y-4">
        {/* PixPirate Card */}
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-0">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleCardExpansion("pixpirate")}
            >
              <h3 className="text-lg font-semibold text-gray-900">PixPirate</h3>
              {expandedCards["pixpirate"] ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            {expandedCards["pixpirate"] && (
              <div className="px-4 pb-4 border-t">
                <div className="grid grid-cols-3 gap-8 py-4">
                  <div>
                    <span className="text-sm text-gray-600">Description</span>
                    <div className="text-sm text-gray-900 mt-1">PixPirate Exploits WhatsApp in THE LATEST Campaign</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Published On</span>
                    <div className="text-sm text-gray-900 mt-1">10-Dec-2024</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Published By</span>
                    <div className="text-sm text-gray-900 mt-1">Armaudit</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge className="bg-gray-200 text-black hover:bg-red-100">MALWARE</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-green-100">ANDROID</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-purple-100">TROJAN</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-orange-100">EXPLOIT</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-blue-100">SOCIAL ENGINEERING</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-yellow-100">SMISHING</Badge>
                </div>
                <div className="flex items-center">Flag Image</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* HeadMare Cards */}
        {[1, 2].map((index) => (
          <Card key={`headmare-${index}`} className="border-l-4 border-l-orange-500">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleCardExpansion(`headmare-${index}`)}
              >
                <h3 className="text-lg font-semibold text-gray-900">HeadMare</h3>
                {expandedCards[`headmare-${index}`] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Microsoft Windows Card */}
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-0">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleCardExpansion("microsoft-windows")}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900">Microsoft Windows</h3>
                <Badge className="bg-blue-600 text-white hover:bg-blue-600">EXCLUSIVE</Badge>
              </div>
              {expandedCards["microsoft-windows"] ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
            {expandedCards["microsoft-windows"] && (
              <div className="px-4 pb-4 border-t">
                <div className="grid grid-cols-3 gap-8 py-4">
                  <div>
                    <span className="text-sm text-gray-600">Description</span>
                    <div className="text-sm text-gray-900 mt-1">
                      Microsoft Windows Common Log File System Driver Heap-Based Buffer Overflow Vulnerability
                      Incorporated by CISA Known Exploited Vulnerability (KEV) catalog
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Published On</span>
                    <div className="text-sm text-gray-900 mt-1">11-Dec-2024</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Published By</span>
                    <div className="text-sm text-gray-900 mt-1">Armaudit</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge className="bg-gray-200 text-black hover:bg-red-100">VULNERABILITY</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-blue-100">CISA</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-orange-100">EXPLOIT</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-purple-100">KEV HEAP BASED</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-yellow-100">BUFFER</Badge>
                  <Badge className="bg-gray-200 text-black hover:bg-green-100">OVERFLOW</Badge>
                </div>
                <div className="flex items-center">Flag</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional HeadMare Card */}
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-0">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleCardExpansion("headmare-3")}
            >
              <h3 className="text-lg font-semibold text-gray-900">HeadMare</h3>
              {expandedCards["headmare-3"] ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
