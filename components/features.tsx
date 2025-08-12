import { TrendingUp, Shield, Users, LayoutDashboard, Lightbulb } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: "Comprehensive Financial Tech Solutions",
      description: "From concept to funding to delivery, we provide end-to-end support for your financial projects.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant Frameworks",
      description: "Our platforms are designed for regulatory transparency and financial accuracy, ensuring peace of mind.",
    },
    {
      icon: Users,
      title: "Tailored Platforms",
      description: "Built to match the unique needs of each financial initiative, ensuring a perfect fit for your project.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Supporting projects of any size with flexible, future-ready systems that grow with your ambitions.",
    },
    {
      icon: LayoutDashboard,
      title: "End-to-End Project Visibility",
      description: "Gain complete insight with dashboards, reports, and real-time updates for all stakeholders.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose CRUCIBLE FINTECH?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep financial expertise to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Reverted grid to md:grid-cols-2 for tablets, and lg:grid-cols-3 for desktops to accommodate 5 items nicely */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              {/* Reverted icon margin to mb-6 */}
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-sky-600" />
              </div>
              {/* Reverted title margin to mb-4 */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}