"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      role: "Técnico de Fibra Óptica",
      company: "Telecom Solutions",
      text: "O treinamento superou minhas expectativas. Consegui aplicar os conhecimentos imediatamente em projetos reais e já recebi duas promoções na empresa.",
      rating: 5,
    },
    {
      name: "Marina Oliveira Santos",
      role: "Engenheira de Redes",
      company: "NetFiber Brasil",
      text: "Conteúdo extremamente prático e atualizado. Os instrutores dominam completamente o assunto e as aulas práticas com equipamentos reais fizeram toda diferença.",
      rating: 5,
    },
    {
      name: "Roberto Almeida Costa",
      role: "Supervisor de Infraestrutura",
      company: "Connect Telecom",
      text: "Melhor investimento que fiz na minha carreira. Aprendi técnicas de fusão que aumentaram minha produtividade em 40%.",
      rating: 5,
    },
    {
      name: "Juliana Ferreira Lima",
      role: "Técnica de Campo",
      company: "FiberMax",
      text: "Estava há anos querendo me especializar em fibra óptica. O curso me deu toda a base teórica e prática que precisava.",
      rating: 5,
    },
    {
      name: "Anderson Pereira Nunes",
      role: "Coordenador Técnico",
      company: "OpticNet",
      text: "Excelente didática e suporte durante todo o treinamento. Os módulos sobre OTDR e certificação são impecáveis.",
      rating: 5,
    },
    {
      name: "Patrícia Rodrigues Souza",
      role: "Analista de Projetos",
      company: "TechFiber",
      text: "O treinamento é muito completo. Abrange desde fundamentos até técnicas avançadas. Me sinto preparada para qualquer desafio.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 rounded-full mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">Depoimentos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            O que dizem nossos <span className="text-[#00f2ff]">alunos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#00f2ff] fill-[#00f2ff]" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{testimonial.text}</p>
              <div className="border-t border-white/5 pt-4">
                <h4 className="font-bold mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-xs text-[#00f2ff]/60 mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
