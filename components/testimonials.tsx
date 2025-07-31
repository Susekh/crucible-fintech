import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Innovations",
      content:
        "CRUCIBLE helped us raise $2M in Series A funding in just 6 weeks. Their platform and expertise made the entire process seamless.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GreenTech Solutions",
      content:
        "The analytics and investor matching capabilities are game-changing. We connected with the perfect investors for our sustainability focus.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "CFO",
      company: "HealthTech Pro",
      content:
        "Their strategic guidance and platform tools helped us optimize our funding strategy and achieve better terms than we expected.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we have helped innovative companies achieve their funding goals and accelerate their growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed italic">{testimonial.content}</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  height={100}
                  width={100}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-50 rounded-2xl p-12 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Let us help you navigate your funding journey and connect with the right investors for your business.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Start Your Funding Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
