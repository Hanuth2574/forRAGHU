"use client"

import { useState } from "react"
import {
  Info,
  ChevronDown,
  Search,
  Download,
  RefreshCw,
  MoreHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"

export function NewsFlash() {
  const [selectedCountries, setSelectedCountries] = useState(["India"])
  const [countrySearchTerm, setCountrySearchTerm] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const countries = [
    "India",
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
  ]

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(countrySearchTerm.toLowerCase()),
  )

  const handleCountryToggle = (country: string) => {
    setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]))
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">Armaudit NewsFlash</h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-gray-600">Select your fiat currency and your favourite payment method</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <span>Select Duration</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            India
            <button className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
              <X className="w-3 h-3" />
            </button>
          </Badge>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4" />
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
        <Popover open={isCountryDropdownOpen} onOpenChange={setIsCountryDropdownOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
              <span>Select Countries</span>
              <Badge className="bg-[#46e595] rounded-full text-gray-700 text-xs px-1.5 py-0.5 ml-1">
                {selectedCountries.length}
              </Badge>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search"
                  value={countrySearchTerm}
                  onChange={(e) => setCountrySearchTerm(e.target.value)}
                  className="pl-10 h-9 bg-white border-gray-200"
                />
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredCountries.map((country, index) => (
                <div
                  key={`${country}-${index}`}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleCountryToggle(country)}
                >
                  <Checkbox
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountryToggle(country)}
                    className="data-[state=checked]:bg-[#5454d4] data-[state=checked]:border-[#5454d4]"
                  />
                  <span className="text-sm text-gray-700">{country}</span>
                </div>
              ))}
              {filteredCountries.length === 0 && (
                <div className="px-3 py-4 text-sm text-gray-500 text-center">No countries found</div>
              )}
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Regions</span>
          <Badge className="bg-[#46e595] rounded-full text-gray-700 text-xs px-1.5 py-0.5 ml-1">1</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Industries</span>
          <Badge className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 ml-1">0</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <span>Select Tags</span>
          <Badge className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 ml-1">0</Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Data Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-700">Date</th>
                  <th className="text-left p-4 font-medium text-gray-700">Threat Actor</th>
                  <th className="text-left p-4 font-medium text-gray-700">Title</th>
                  <th className="text-left p-4 font-medium text-gray-700">Country</th>
                  <th className="text-left p-4 font-medium text-gray-700">Region</th>
                  <th className="text-left p-4 font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "13 Dec, 2024",
                    actor: "Vaibhav",
                    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "Shift",
                    title: "Customers Data Stolen from an Indian Jewelry Store, on Sale",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "NanC",
                    title: "Data Allegedly Pertaining to 'UKSoccershop.com', Leaked",
                    country: "United kingdom, India",
                    region: "Europe & UK, Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "Shift",
                    title: "Akira Ransomware Group Claims Breach of Indian Pharmaceutical Giant Cipla",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "VIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "billy100",
                    title: "940k Pii Records Stolen from an Indian Jewelry Retailer, Leaked",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "Akira",
                    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "VIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "Akira",
                    title: "940k Pii Records Stolen from an Indian Jewelry Retailer, Leaked",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                  {
                    date: "13 Dec, 2024",
                    actor: "gwap",
                    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
                    country: "India",
                    region: "Asia & Pacific (APAC)",
                    status: "UNVIEWED",
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm text-gray-700">{row.date}</td>
                    <td className="p-4 text-sm text-gray-700 font-medium">{row.actor}</td>
                    <td className="p-4 text-sm text-gray-700 max-w-md">{row.title}</td>
                    <td className="p-4 text-sm text-gray-700">{row.country}</td>
                    <td className="p-4 text-sm text-gray-700">{row.region}</td>
                    <td className="p-4">
                      <Badge
                        className={
                          row.status === "VIEWED"
                            ? "bg-[#5454d4] text-gray-700 hover:bg-[#5454d4]"
                            : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        }
                      >
                        {row.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Footer */}
          <div className="flex items-center justify-between p-4 border-t bg-gray-50">
            <div className="text-sm text-gray-600">
              1-10 of <span className="font-medium">184,934</span> Records
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Item per page</span>
              <Button variant="outline" size="sm" className="h-8 px-2 bg-transparent">
                4 <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
              <div className="flex items-center gap-1 ml-4">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-600 px-2">1/20</span>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
