"use client"


import { motion } from "framer-motion"
import { Wrench, CheckCircle } from "lucide-react"

export const InstructorFieldWork = () => {
  const fieldWork = [
    {
      title: "Primeiro Treinamento",
      description: "Experiência em inspeção de fibras do sistema FACTS",
    },
    {
      title: "Atividade em OPGW",
      description: "Realizando um sonho profissional",
    },
    {
      title: "Presença na ABRINT",
      description: "Participação em eventos nacionais",
    },
  ]

  return (
    <section className="relative py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/30">
            <Wrench className="w-5 h-5 text-[#00f2ff]" />
            <span className="text-[#00f2ff] text-xs font-bold uppercase tracking-wider">Experiência Prática</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Serviços em Campo</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {fieldWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 transition-all duration-300"
            >
              <CheckCircle className="w-8 h-8 text-[#00f2ff] mb-4" />
              <h3 className="text-lg font-bold text-white uppercase mb-2">{work.title}</h3>
              <p className="text-gray-400 text-sm">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
