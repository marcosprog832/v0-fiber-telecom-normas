"use client"

import { motion } from "framer-motion"
import { Shield, Target, BookOpen, Users, Calendar, TrendingUp } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield size={40} />,
      title: "Certificação Reconhecida",
      desc: "Certificado com validade nacional e aceito pelas principais empresas do setor de telecomunicações.",
    },
    {
      icon: <Target size={40} />,
      title: "Foco em Resultados",
      desc: "Metodologia orientada para resultados práticos imediatos em projetos reais de infraestrutura.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Conteúdo Atualizado",
      desc: "Material didático sempre atualizado com as últimas normas ABNT e padrões internacionais.",
    },
    {
      icon: <Users size={40} />,
      title: "Instrutores Experientes",
      desc: "Professores com mais de 15 anos de experiência prática em projetos de grande porte.",
    },
    {
      icon: <Calendar size={40} />,
      title: "Flexibilidade Total",
      desc: "Estude no seu ritmo com acesso vitalício ao conteúdo e suporte personalizado.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Networking Profissional",
      desc: "Conecte-se com outros profissionais e acesse oportunidades exclusivas no mercado.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-6"
          >
            Por que escolher a <span className="text-[#00f2ff]">TELECOM NORMAS</span>?
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Treinamento completo com metodologia comprovada e reconhecimento no mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="text-[#00f2ff] mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
