"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export const InstructorEducation = () => {
  const certifications = [
    "CCNA v7 Cisco",
    "ECI Sistemas SDHS",
    "Sistemas DWDM Padtec",
    "Sistemas OPLAT e SDHS GE",
    "Cursos livres que somam mais de 2000h",
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Formação Profissional</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formação Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-[#00f2ff]/10 to-transparent border border-[#00f2ff]/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#00f2ff]/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[#00f2ff]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase">Técnico</h3>
                <p className="text-gray-400">Telecomunicações</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2ff]/20 border border-[#00f2ff]/50">
              <Award className="w-4 h-4 text-[#00f2ff]" />
              <span className="text-sm font-bold text-[#00f2ff] uppercase">CFT Ativo</span>
            </div>
          </motion.div>

          {/* Certificações */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-[#00f2ff]" />
              <h3 className="text-xl font-black text-white uppercase">Certificações</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
