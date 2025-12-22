"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube, } from "lucide-react"
import { FaTiktok } from "react-icons/fa"


export function SocialMediaStats() {
  const socialNetworks = [
    {
      name: "Instagram",
      handle: "@telecom_normas",
      icon: Instagram,
      color: "#E4405F",
      link: "https://instagram.com/telecom_normas",
      stats: [
        { label: "Seguidores", value: "32,7k" },
        { label: "Visualizações", value: "1,4mi" },
        { label: "Engajamento", value: "42,9k" },
        { label: "Stories", value: "4,5k" },
      ],
      demographics: [
        { label: "Faixa etária 25-34", value: "51,2%" },
        { label: "Faixa etária 35-44", value: "28,5%" },
      ],
    },
    {
      name: "LinkedIn",
      handle: "Giliade Paulino",
      icon: Linkedin,
      color: "#0077B5",
      link: "https://linkedin.com/in/giliade-paulino",
      stats: [
        { label: "Seguidores", value: "7,3k" },
        { label: "Impressões", value: "9,9k" },
        { label: "Conexões", value: "4,8k" },
        { label: "Visualização perfil", value: "663" },
      ],
      demographics: [
        { label: "Setor de telecom", value: "30,2%" },
        { label: "Setor de tecnologia", value: "9,8%" },
        { label: "Setor de energia", value: "16,5%" },
      ],
    },
    {
  name: "TikTok",
  handle: "Telecom Normas",
  icon: FaTiktok, // ✅ agora está correto
  color: "#000000", // ou gradiente se quiser estilizar
  link: "https://www.tiktok.com/@telecomnormas",
  stats: [
    { label: "Seguidores", value: "11,3k" },
    { label: "Visualizações", value: "114,5k" },
    { label: "Curtidas", value: "46,5k" },
  ],
  demographics: [
    { label: "Faixa etária 25-34", value: "46,1%" },
    { label: "Faixa etária 35-44", value: "31,1%" },
  ],
}
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ALCANCE E{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ENGAJAMENTO
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça nosso alcance nas principais redes sociais e o engajamento com profissionais do setor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {socialNetworks.map((network, index) => (
            <motion.a
              key={network.name}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${network.color}20`,
                    boxShadow: `0 0 20px ${network.color}40`,
                  }}
                >
                  <network.icon className="w-8 h-8" style={{ color: network.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{network.name}</h3>
                  <p className="text-cyan-400 font-medium">{network.handle}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Estatísticas</h4>
                <div className="grid grid-cols-2 gap-4">
                  {network.stats.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <p className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demographics */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Demografia</h4>
                {network.demographics.map((demo) => (
                  <div key={demo.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{demo.label}</span>
                    <span className="text-sm font-bold text-cyan-400">{demo.value}</span>
                  </div>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
