"use client"

import { motion } from "framer-motion"
import { Users, Award, BookOpen, Globe } from "lucide-react"

export const StatsSection = () => {
  const stats = [
    { icon: <Users size={32} />, value: "+500", label: "Profissionais Certificados" },
    { icon: <Award size={32} />, value: "98%", label: "Taxa de Aprovação" },
    { icon: <BookOpen size={32} />, value: "6", label: "Módulos Completos" },
    { icon: <Globe size={32} />, value: "15+", label: "Estados Atendidos" },
  ]

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-[#00f2ff] mb-3 flex justify-center">{item.icon}</div>
              <div className="text-3xl font-black mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
