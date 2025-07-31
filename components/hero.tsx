import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Announcement Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
            <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-bold mr-3">New</span>
            We have launched our funding platform →
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Smart funding
            <br />
            for bold ventures
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            We leverage cutting-edge technology to streamline financial projects and connect innovative startups with
            the right investors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg">
              Get a free quote
            </Button>
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                height={100}
                width={100}
                alt="Advisor"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-700 font-medium">Book an intro call</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">2-4 week deployment</h3>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparent pricing</h3>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">100% success guarantee*</h3>
          </div>
        </div>

        {/* Hero Image/Dashboard Mockup */}
        <div className="bg-emerald-500 rounded-3xl p-12 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
                  <span className="font-semibold text-gray-900">CRUCIBLE Dashboard</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding Overview</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Total Raised</span>
                        <span className="font-bold text-emerald-600">$2.4M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Active Investors</span>
                        <span className="font-bold text-gray-900">24</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Investment received</p>
                        <p className="text-xs text-gray-500">$250K from Venture Capital</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Due diligence completed</p>
                        <p className="text-xs text-gray-500">TechStart Industries</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">New pitch deck uploaded</p>
                        <p className="text-xs text-gray-500">Series A presentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
