export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CRUCIBLE FINTECH</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At <b>Crucible Fintech</b>, we believe that technology can transform how financial projects are executed — from ideation to funding and beyond. Our mission is to bridge the gap between innovation and finance by creating platforms that streamline project financing, facilitate responsible fund management, and ensure transparent investor communication.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We focus on building tailored financial ecosystems that support project-based funding, public-private partnerships, social development initiatives, and capital-raising ventures. With a strong foundation in compliance, analytics, and digital automation, we empower organizations to focus on execution while we handle the financial architecture.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">$500M+</div>
                <div className="text-gray-700">Total Funding Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">200+</div>
                <div className="text-gray-700">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">95%</div>
                <div className="text-gray-700">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
                <div className="text-gray-700">Partner Investors</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To democratize access to capital by providing innovative fintech solutions that streamline the fundraising process and connect visionary entrepreneurs with forward-thinking investors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation First</h4>
                  <p className="text-gray-600 text-sm">
                    Leveraging cutting-edge technology to solve complex financial challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client Success</h4>
                  <p className="text-gray-600 text-sm">Dedicated to achieving exceptional outcomes for every client</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
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