import { TrendingUp, Shield, Zap, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Advanced data analytics to optimize your funding strategy and investor matching.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security ensuring your financial data and transactions are protected.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Streamlined processes that reduce funding timelines from months to weeks.",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to our curated network of investors, advisors, and industry experts.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose CRUCIBLE?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep financial expertise to deliver exceptional results for our
            clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
