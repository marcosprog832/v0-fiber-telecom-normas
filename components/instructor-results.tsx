"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, BookOpen, Award } from "lucide-react"

export const InstructorResults = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Melhora na Manutenção",
      description: "Processos otimizados e eficientes",
    },
    {
      icon: Users,
      title: "Alcance Público Qualificado",
      description: "Profissionais capacitados e engajados",
    },
    {
      icon: Zap,
      title: "Ganho de Agilidade",
      description: "Execução rápida e precisa",
    },
    {
      icon: BookOpen,
      title: "Conteúdo Técnico",
      description: "Material de alta qualidade",
    },
    {
      icon: Award,
      title: "Experiência de Mercado",
      description: "14 anos de conhecimento prático",
    },
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
            Resultados <span className="text-[#00f2ff]">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entrega de valor real para profissionais e empresas do setor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00f2ff]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00f2ff]/20 transition-colors">
                <result.icon className="w-7 h-7 text-[#00f2ff]" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2">{result.title}</h3>
              <p className="text-gray-400 text-sm">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/cursos"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00d4ff] text-black font-black uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-300"
          >
            Conheça os Cursos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
