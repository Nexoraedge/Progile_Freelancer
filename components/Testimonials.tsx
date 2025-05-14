"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { testimonials } from "@/constants/util"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 container mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10" />

      <div className="mx-2 md:mx-3 lg:mx-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-sm text-cyan-400 mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Freelancers Worldwide</h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here's what freelancers are saying about our platform.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-slate-800/50 border-slate-700 hover:bg-slate-700 hover:text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-slate-800/50 border-slate-700 hover:bg-slate-700 hover:text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/30 to-cyan-500/30 p-0.5">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-5 w-5 mr-1",
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600",
                              )}
                            />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl italic mb-4">"{testimonial.content}"</blockquote>

                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-slate-400">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-purple-500 w-6" : "bg-slate-700 hover:bg-slate-600",
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
