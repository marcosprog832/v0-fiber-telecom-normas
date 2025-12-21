"use client"

import { motion } from "framer-motion"
import { Briefcase, Zap, Wifi, Award } from "lucide-react"

export const InstructorExperience = () => {
  const experiences = [
    {
      icon: Wifi,
      title: "Operadoras de Telecomunicações",
      description: "Experiência sólida em grandes operadoras do setor",
    },
    {
      icon: Briefcase,
      title: "Provedores de Internet (ISPs)",
      description: "Atuação em infraestrutura e gestão de redes",
    },
    {
      icon: Zap,
      title: "Setor Elétrico Brasileiro",
      description: "Objetivo cultivado desde 2017, hoje realizado",
    },
    {
      icon: Award,
      title: "Criação de Conteúdo Técnico",
      description: "Formação profissional e capacitação contínua",
    },
  ]

  return (
    <section className="relative py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Experiência</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto uppercase tracking-wide">
            14 anos de experiência, durante os quais atuei em diversas áreas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center group-hover:bg-[#00f2ff]/20 transition-colors">
                  <exp.icon className="w-6 h-6 text-[#00f2ff]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase">{exp.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
