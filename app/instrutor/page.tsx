"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { Footer } from "@/components/footer"
import { Award, Briefcase, GraduationCap, MapPin, Target, TrendingUp } from "lucide-react"

export default function InstrutorPage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white relative overflow-hidden">
      <NeonSnakes />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/images/whatsapp-image-2025-12-18-at-21.png"
                  alt="Giliade Paulino"
                  fill
                  className="object-cover object-top rounded-2xl"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(0, 242, 255, 0.3))",
                  }}
                />
              </div>
            </div>

            <div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  GILIADE <span className="text-[#00f2ff]">PAULINO</span>
                </h1>
                <p className="text-xl text-gray-300 mb-4">Especialista em Telecomunicações</p>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPin className="w-5 h-5 text-[#00f2ff]" />
                  <span>Pará, Brasil</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  14 anos de experiência no setor de telecomunicações, atuando desde operadoras até o setor elétrico
                  brasileiro.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-black">QUEM SOU EU? MINHA MISSÃO</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Originário do estado do Pará, iniciei minha trajetória no setor de telecomunicações em 2012. Um marco
              significativo em minha carreira foi a minha participação na construção da Usina Hidrelétrica Belo Monte.
              Desde então, tenho me dedicado ao estudo e ao aprimoramento contínuo neste campo.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Ao longo da minha trajetória profissional, adquiri experiências valiosas em provedores de internet e
              operadoras. Atualmente, exerço a função de especialista em telecomunicações no setor elétrico brasileiro.
              Paralelamente, dedico-me à produção de conteúdo técnico, incentivando meus seguidores a buscar
              qualificação e a prosperar no competitivo mercado de telecomunicações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-black">EXPERIÊNCIA</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Possuo 14 anos de experiência, durante os quais atuei em diversas áreas. Trabalhei no setor de operadoras
              de telecomunicações e em provedores de serviços de internet (ISPs). Atualmente, estou realizando um
              objetivo que cultivo desde 2017: integrar o setor elétrico brasileiro. Além disso, dedico-me à criação de
              conteúdo técnico voltado para a formação profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-black">FORMAÇÃO PROFISSIONAL</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-[#00f2ff]">Técnico em Telecomunicações</strong> com CFT ativo.
              </p>
              <div>
                <p className="text-lg font-bold text-white mb-2">Certificações:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>CCNA v7 Cisco</li>
                  <li>Certificado ECI Sistemas SDHS</li>
                  <li>Sistemas DWDM Padtec</li>
                  <li>Sistemas OPLAT e SDHS GE</li>
                  <li>Cursos livres que somam mais de 2000h</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços em Campo */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-black">SERVIÇOS EM CAMPO</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00f2ff] mb-2">Primeiro Treinamento Experiência</h3>
                <p className="text-gray-300">Inspeção em fibras do sistema FACTS</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#00f2ff] mb-2">Importante Atividade em OPGW</h3>
                <p className="text-gray-300">Realizando um sonho profissional</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:col-span-2">
                <h3 className="text-xl font-bold text-[#00f2ff] mb-2">Eventos Nacionais</h3>
                <p className="text-gray-300">Participação na ABRINT e outros eventos do setor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-black">RESULTADOS COMPROVADOS</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Melhora na Manutenção", desc: "Processos otimizados" },
                { title: "Alcance Público Qualificado", desc: "Milhares de profissionais" },
                { title: "Ganho de Agilidade", desc: "Eficiência operacional" },
                { title: "Conteúdo Técnico", desc: "Material de alta qualidade" },
                { title: "Experiência de Mercado", desc: "14 anos de expertise" },
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#00f2ff]/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-[#00f2ff] mb-2">{result.title}</h3>
                  <p className="text-gray-300">{result.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
