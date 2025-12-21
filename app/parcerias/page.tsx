"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { Footer } from "@/components/footer"
import { Handshake, Instagram, Linkedin, Youtube, Mail, Phone, Globe } from "lucide-react"

export default function ParceriasPage() {
  const partners = [
    {
      name: "RG Soluções",
      description: "Distribuidor de instrumentos e ferramentas para atividades em redes de telecomunicações.",
      logo: "/images/rg-solucoes-logo.png",
      status: "Fechada 2026",
    },
    {
      name: "ESMIG",
      description: "Fabricante de escada e acessórios de segurança para serviço em altura.",
      logo: "/images/esmig-logo.png",
      status: "Fechada 2026",
    },
    {
      name: "YTEK",
      description: "Fabricante de soluções em monitoramento de energia e sensores.",
      logo: "/images/ytek-logo.png",
      status: "Fechada 2026",
    },
  ]

  const socialStats = [
    {
      network: "Instagram",
      handle: "@telecom_normas",
      url: "https://www.instagram.com/telecom_normas/",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
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
      network: "LinkedIn",
      handle: "Giliade Paulino",
      url: "https://www.linkedin.com/in/giliadepaulino/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-400",
      stats: [
        { label: "Seguidores", value: "7,3k" },
        { label: "Impressões", value: "9,9k" },
        { label: "Conexões", value: "4,8k" },
        { label: "Visualizações", value: "663" },
      ],
      demographics: [
        { label: "Setor de telecom", value: "30,2%" },
        { label: "Setor de tecnologia", value: "9,8%" },
        { label: "Setor de energia", value: "16,5%" },
      ],
    },
    {
      network: "YouTube",
      handle: "@telecom_normas",
      url: "https://www.youtube.com/@telecom_normas",
      icon: Youtube,
      color: "from-red-600 to-red-400",
      stats: [
        { label: "Seguidores", value: "11,3k" },
        { label: "Visualizações", value: "114,5k" },
        { label: "Engajamento", value: "46,5k" },
      ],
      demographics: [
        { label: "Faixa etária 25-34", value: "46,1%" },
        { label: "Faixa etária 35-44", value: "31,1%" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#02040a] text-white relative overflow-hidden">
      <NeonSnakes />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <Handshake className="w-12 h-12 text-[#00f2ff]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              PARCERIAS <span className="text-[#00f2ff]">2026</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Faça parte do nosso ecossistema e alcance milhares de profissionais qualificados no setor de
              telecomunicações
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parceiros Fechados */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              PARCEIROS <span className="text-[#00f2ff]">OFICIAIS</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#00f2ff]/50 transition-all group"
                >
                  <div className="bg-white rounded-xl p-6 mb-6 aspect-square flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded-full mb-4">
                    <span className="text-xs font-bold text-[#00f2ff]">{partner.status}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">{partner.name}</h3>
                  <p className="text-gray-300">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vagas Disponíveis */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              VAGAS <span className="text-[#00f2ff]">DISPONÍVEIS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((slot) => (
                <motion.div
                  key={slot}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: slot * 0.1 }}
                  className="bg-gradient-to-br from-[#00f2ff]/10 to-transparent border-2 border-dashed border-[#00f2ff]/30 rounded-2xl p-12 text-center hover:border-[#00f2ff]/60 transition-all"
                >
                  <div className="w-20 h-20 bg-[#00f2ff]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-[#00f2ff]" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">PODERÁ SER SUA MARCA</h3>
                  <p className="text-gray-300 mb-6">Vaga disponível para parceria estratégica em 2026</p>
                  <div className="inline-block px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded-full">
                    <span className="text-sm font-bold text-[#00f2ff]">Disponível</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas das Redes Sociais */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              ALCANCE NAS <span className="text-[#00f2ff]">REDES SOCIAIS</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {socialStats.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#00f2ff]/50 transition-all group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-2">{social.network}</h3>
                  <p className="text-gray-400 mb-6">{social.handle}</p>

                  <div className="space-y-3 mb-6">
                    {social.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-xl font-bold text-[#00f2ff]">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-2">
                    {social.demographics.map((demo, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{demo.label}</span>
                        <span className="text-sm font-bold text-white">{demo.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00f2ff]/10 to-transparent border border-[#00f2ff]/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              ENTRE EM <span className="text-[#00f2ff]">CONTATO</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="https://wa.me/5594988149435"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#00f2ff]/50 transition-all group"
              >
                <Phone className="w-8 h-8 text-[#00f2ff] mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-2">Telefone</p>
                <p className="font-bold">(94) 98814-9435</p>
              </a>
              <a
                href="mailto:telecomnormasabnt@gmail.com"
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#00f2ff]/50 transition-all group"
              >
                <Mail className="w-8 h-8 text-[#00f2ff] mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="font-bold text-sm">telecomnormasabnt@gmail.com</p>
              </a>
              <a
                href="https://telecomnormas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#00f2ff]/50 transition-all group"
              >
                <Globe className="w-8 h-8 text-[#00f2ff] mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-2">Website</p>
                <p className="font-bold">telecomnormas.com.br</p>
              </a>
            </div>
            <a
              href="https://wa.me/5594988149435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00f2ff] text-black font-black rounded-lg hover:bg-white transition-all hover:scale-105"
            >
              FALAR NO WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
