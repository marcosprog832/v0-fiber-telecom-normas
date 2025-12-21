"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const CurriculumSection = () => {
  const modules = [
    {
      number: "01",
      title: "Fundamentos e Normas ABNT",
      topics: ["Conceitos de redes ópticas", "Normas de segurança NR-10 e NR-35", "Tipos de fibra e cabos"],
    },
    {
      number: "02",
      title: "Infraestrutura de Lançamento",
      topics: ["Cálculo de tração", "Técnicas de ancoragem", "Projeto de rotas"],
    },
    {
      number: "03",
      title: "Fusão e Emendas",
      topics: ["Prática com máquina de fusão", "Organização de caixas", "Técnicas de emenda mecânica"],
    },
    {
      number: "04",
      title: "Testes e Certificação",
      topics: ["Medição com OTDR", "Análise de potência", "Documentação técnica"],
    },
    {
      number: "05",
      title: "Projetos FTTH",
      topics: ["Dimensionamento de redes", "Topologias PON", "Equipamentos ativos"],
    },
    {
      number: "06",
      title: "Manutenção e Troubleshooting",
      topics: ["Diagnóstico de falhas", "Procedimentos de reparo", "Otimização de redes"],
    },
  ]

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 rounded-full mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">Conteúdo Programático</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            O que você vai <span className="text-[#00f2ff]">aprender</span>
          </h2>
          <p className="text-gray-400 text-lg">6 módulos completos do básico ao avançado</p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl font-black text-[#00f2ff]/20 group-hover:text-[#00f2ff]/40 transition-colors">
                  {module.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00f2ff] transition-colors">
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <CheckCircle2 size={18} className="text-[#00f2ff] mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowRight className="text-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
