import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Sparkles, Zap, Shield, Clock, Users, BarChart3 } from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"
import { faqs } from "@/constants/util"
import { plan as plans } from "@/constants/util"



export default function PricingPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 premium-text">Choose the Perfect Plan</h1>
          <p className="text-slate-400 text-lg">
            Select the plan that best fits your freelancing needs and take your profiles to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-slate-800/30 backdrop-blur-sm relative overflow-hidden ${
                plan.popular ? "border-violet-500/50 premium-glow" : "border-slate-700 hover:border-slate-600"
              } transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}

                    {plan.limitations.map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-500">
                        <X className="h-5 w-5 text-slate-600 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "premium-button" : "bg-slate-700 hover:bg-slate-600 text-white"}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-500/40 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-slate-400">
                Our advanced AI optimizes your profiles for each platform's specific algorithm
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/40 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
              <p className="text-slate-400">Save 5+ hours per platform with our automated profile generation tools</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/40 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Clients</h3>
              <p className="text-slate-400">
                Our users report 3.4× more client inquiries after optimizing their profiles
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-500/40 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk-Free</h3>
              <p className="text-slate-400">Try our Free plan or upgrade with our 14-day money-back guarantee</p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-16 premium-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <Badge className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">Limited Time Offer</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 premium-text">Get 20% off the Lifetime plan</h2>
                <p className="text-slate-300 mb-6">
                  Upgrade to our Lifetime plan today and save 20%. This offer is only available for a limited time. Get
                  unlimited access to all features, forever, with a one-time payment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="premium-button">
                    <Zap className="mr-2 h-4 w-4" />
                    Claim Discount
                  </Button>
                  <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-lg opacity-30"></div>
                  <div className="relative bg-slate-800 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2 line-through text-slate-500">$249</div>
                    <div className="text-5xl font-bold mb-2 text-white">$199</div>
                    <div className="text-sm text-slate-400 mb-4">One-time payment</div>
                    <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-2">
                      Save $50
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 premium-text">Compare Plans</h2>
              <p className="text-slate-400">See which plan is right for you with our detailed feature comparison</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 px-6 text-left">Features</th>
                    <th className="py-4 px-6 text-center">Free</th>
                    <th className="py-4 px-6 text-center bg-violet-900/20 border-x border-violet-500/30">Pro</th>
                    <th className="py-4 px-6 text-center">Lifetime</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Base Profiles</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Platform Exports</td>
                    <td className="py-4 px-6 text-center">2 per month</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">AI Optimization</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">Advanced</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Templates</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">Premium</td>
                    <td className="py-4 px-6 text-center">Premium</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Revision History</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-slate-600 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Analytics Dashboard</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-slate-600 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Export Formats</td>
                    <td className="py-4 px-6 text-center">Text only</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">
                      PDF, Markdown, Text
                    </td>
                    <td className="py-4 px-6 text-center">All formats</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Community</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">Priority</td>
                    <td className="py-4 px-6 text-center">VIP</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Future Updates</td>
                    <td className="py-4 px-6 text-center">Limited</td>
                    <td className="py-4 px-6 text-center bg-violet-900/10 border-x border-violet-500/20">
                      During subscription
                    </td>
                    <td className="py-4 px-6 text-center">Lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 premium-text">Frequently Asked Questions</h2>
              <p className="text-slate-400">Have questions about our plans? Find answers to common questions below</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-900/30 to-indigo-900/30 border border-violet-500/30 rounded-xl p-8 text-center premium-glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 premium-text">Ready to Launch Your Freelance Career?</h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of freelancers who are using our platform to stand out, win more clients, and increase
              their income.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="premium-button">
                <Zap className="mr-2 h-4 w-4" />
                Get Started Now
              </Button>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                View All Features
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-6">No credit card required for Free plan. Upgrade anytime.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
