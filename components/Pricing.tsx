import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { plans } from "@/constents/util"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 container mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 to-transparent" />

      <div className="mx-5 md:mx-3 lg:mx-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-400 mb-4">
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Plan for Your Freelance Journey</h2>
          <p className="text-slate-400 text-lg">
            No hidden fees. No complicated tiers. Just straightforward pricing to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 relative",
                plan.popular
                  ? "border-2 border-purple-500 shadow-xl shadow-purple-500/10 scale-105 md:scale-110 z-10"
                  : "border border-slate-700/50 hover:border-slate-600/50",
              )}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-slate-400">{plan.description}</p>
              </div>

              <div className="p-6 bg-slate-800/50 space-y-4">
                <h4 className="font-medium">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}

                  {plan.missingFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-500">
                      <X className="h-5 w-5 text-slate-600 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full mt-4",
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20"
                      : "",
                  )}
                  variant={plan.buttonVariant as any}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-2">Need a custom plan for your agency?</p>
          <Button variant="link" className="text-purple-400 hover:text-purple-300">
            Contact us for enterprise pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
