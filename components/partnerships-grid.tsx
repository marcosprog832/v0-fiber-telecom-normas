"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"

const partners = [
  {
    name: "RG Soluções",
    description: "Distribuidor de instrumentos e ferramentas para atividades em redes de telecomunicações.",
    logo: "/images/rg-solucoes-logo.png",
    active: true,
  },
  {
    name: "ESMIG",
    description: "Fabricante de escada e acessórios de segurança para serviço em altura.",
    logo: "/images/esmig-logo.png",
    active: true,
  },
  {
    name: "YTEK",
    description: "Fabricante de soluções em monitoramento de energia e sensores.",
    logo: "/images/ytek-logo.png",
    active: true,
  },
  {
    name: "Poderá ser sua marca",
    description: "Espaço disponível para empresas que buscam alcançar profissionais qualificados do setor.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Poderá ser sua marca",
    description: "Espaço disponível para empresas que buscam alcançar profissionais qualificados do setor.",
    icon: Sparkles,
    active: false,
  },
]

export const PartnershipsGrid = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">Parcerias Fechadas 2026</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empresas que confiam em nossa audiência técnica e especializada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                partner.active
                  ? "bg-white/5 border-[#00f2ff]/20 hover:border-[#00f2ff]/50 hover:bg-white/10"
                  : "bg-white/[0.02] border-white/10 hover:border-[#00f2ff]/30"
              }`}
            >
              {/* Icon */}
              {partner.active && partner.logo ? (
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl mb-6 bg-white p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00f2ff]/20">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                    partner.active
                      ? "bg-[#00f2ff]/10 border border-[#00f2ff]/20 group-hover:bg-[#00f2ff]/20"
                      : "bg-white/5 border border-white/10 group-hover:border-[#00f2ff]/30"
                  }`}
                >
                  {partner.icon && (
                    <partner.icon
                      className={`w-8 h-8 transition-colors ${
                        partner.active ? "text-[#00f2ff]" : "text-gray-500 group-hover:text-[#00f2ff]"
                      }`}
                    />
                  )}
                </div>
              )}

              {/* Content */}
              <h3
                className={`text-2xl font-black uppercase mb-3 transition-colors ${
                  partner.active ? "text-white" : "text-gray-400 group-hover:text-white"
                }`}
              >
                {partner.name}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">{partner.description}</p>

              {/* Badge */}
              {partner.active ? (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
                    Parceiro 2026
                  </span>
                </div>
              ) : (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-bold uppercase">
                    Disponível
                  </span>
                </div>
              )}

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  partner.active ? "bg-[#00f2ff]/5" : ""
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
