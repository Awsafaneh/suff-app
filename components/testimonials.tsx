"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type Theme = "aurora" | "neon"

interface TestimonialsProps {
  theme: Theme
}

const testimonials = [
  {
    name: "John Smith",
    role: "Cybersecurity Director",
    text: "SuffixSec has revolutionized how we handle threat detection. The results are outstanding!",
  },
  {
    name: "Sarah Johnson",
    role: "E-commerce Store Owner",
    text: "This platform elevated our business to a new level of security and trust. Highly recommended.",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    text: "The API is intuitive and powerful. It makes application development much more secure.",
  },
  {
    name: "Lisa Anderson",
    role: "Project Manager",
    text: "Excellent support and competitive pricing. A smart investment for any business.",
  },
  {
    name: "David Williams",
    role: "Tech Company CEO",
    text: "The best cybersecurity solution on the market. 100% recommended.",
  },
]

export default function Testimonials({ theme }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Client Reviews</h2>
          <p className="text-gray-400 text-lg">What our customers say about us</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8 md:p-12 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/20 to-black/50 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-gray-100 mb-6 leading-relaxed">"{testimonials[current].text}"</p>

              <div>
                <p className="font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-red-400">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-red-500 w-8" : "bg-red-500/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-3 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
