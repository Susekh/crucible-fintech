import { DollarSign, BarChart3, Handshake, Target } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: DollarSign,
      title: "Fundraising Solutions",
      description: "End-to-end fundraising support from pitch deck creation to investor negotiations.",
      features: ["Pitch deck optimization", "Investor matching", "Due diligence support", "Term sheet negotiation"],
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Advanced analytics and reporting tools to track performance and make data-driven decisions.",
      features: ["Real-time dashboards", "Performance metrics", "Predictive analytics", "Custom reporting"],
    },
    {
      icon: Handshake,
      title: "Investor Relations",
      description: "Comprehensive investor relations management to maintain strong stakeholder relationships.",
      features: ["Investor updates", "Communication tools", "Relationship management", "Compliance tracking"],
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Strategic financial planning and advisory services to optimize your growth trajectory.",
      features: ["Financial modeling", "Growth strategy", "Risk assessment", "Market analysis"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fintech solutions designed to accelerate your business growth and funding success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
