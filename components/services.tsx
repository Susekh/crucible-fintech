import { DollarSign, LayoutGrid, ClipboardCheck, MessageSquare, Building } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: LayoutGrid,
      title: "Project-Based Financial Architecture",
      description: "We design and implement structured financial systems for projects across industries. Our platforms support lifecycle-based planning, budgeting, and disbursement mechanisms, ensuring efficient capital use and transparency throughout the project.",
      features: [
        "Lifecycle-based planning",
        "Budgeting & disbursement mechanisms",
        "Efficient capital use",
        "Project transparency"
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Digital Due Diligence & Risk Analysis",
      description: "Our platform integrates automated risk evaluation tools that streamline compliance and vetting processes. This enables faster approvals, more informed investment decisions, and better risk management across financial portfolios.",
      features: [
        "Automated risk evaluation",
        "Streamlined compliance & vetting",
        "Faster approvals",
        "Informed investment decisions"
      ],
    },
    {
      icon: DollarSign,
      title: "Fundraising Enablement",
      description: "From private equity and venture capital to public-sector funding, we provide the technical infrastructure that enables seamless capital raising. Our digital tools simplify investor onboarding, track funding progress, and maintain compliance at every stage.",
      features: [
        "Seamless capital raising infrastructure",
        "Simplified investor onboarding",
        "Funding progress tracking",
        "Stage-wise compliance"
      ],
    },
    {
      icon: MessageSquare,
      title: "Investor Communication & Management",
      description: "We offer secure dashboards for investors and stakeholders, enabling real-time updates, performance tracking, document sharing, and financial reporting — building trust through transparency and accessibility.",
      features: [
        "Secure investor dashboards",
        "Real-time updates & performance tracking",
        "Document sharing & financial reporting",
        "Transparent stakeholder communication"
      ],
    },
    {
      icon: Building,
      title: "Technology for Public-Private Collaborations",
      description: "We develop custom digital solutions that support infrastructure and development-based projects through government-private partnerships. Our tech helps in planning, monitoring, and financing projects with efficiency and regulatory alignment.",
      features: [
        "Custom solutions for PPPs",
        "Infrastructure & development project support",
        "Efficient planning & monitoring",
        "Regulatory alignment for financing"
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Focus Areas</h2>
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