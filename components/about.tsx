export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CRUCIBLE FINTECH</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a cutting-edge financial technology company that leverages advanced technology to revolutionize how
              businesses approach financial projects and fundraising. Our platform connects innovative startups with the
              right investors while providing the tools and insights needed for successful funding rounds.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With deep expertise in both technology and finance, we bridge the gap between traditional fundraising
              methods and modern digital solutions, ensuring our clients achieve their funding goals efficiently and
              effectively.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">$500M+</div>
                <div className="text-gray-700">Total Funding Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
                <div className="text-gray-700">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-700">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-gray-700">Partner Investors</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To democratize access to capital by providing innovative fintech solutions that streamline the fundraising
              process and connect visionary entrepreneurs with forward-thinking investors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation First</h4>
                  <p className="text-gray-600 text-sm">
                    Leveraging cutting-edge technology to solve complex financial challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client Success</h4>
                  <p className="text-gray-600 text-sm">Dedicated to achieving exceptional outcomes for every client</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transparency</h4>
                  <p className="text-gray-600 text-sm">
                    Clear communication and honest practices in all our interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
