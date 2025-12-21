"use client"

import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { BookOpen, Clock, Users, Star, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CursosPage() {
  const courses = [
    {
      title: "GPON 360 – Do Planejamento à Implantação Completa",
      description: "Domine completamente redes GPON desde o projeto básico até implantação avançada de redes PON.",
      image: "/fiber-optic-cables-and-equipment.jpg",
      students: 150,
      duration: "8h",
      rating: 5,
      link: "https://pay.kiwify.com.br/pC68vFi",
      topics: ["Arquitetura GPON", "Splitters e OLT", "Certificação de rede PON"],
    },
    {
      title: "Telecom Club",
      description: "Comunidade exclusiva com acesso a todos os cursos, mentorias e conteúdos técnicos atualizados.",
      image: "/fiber-optic-cable-installation-infrastructure.jpg",
      students: 320,
      duration: "Vitalício",
      rating: 5,
      link: "https://pay.kiwify.com.br/GYd59p0",
      topics: ["Acesso a todos os cursos", "Mentorias ao vivo", "Grupo VIP de networking"],
    },
    {
      title: "OTDR RAIZ",
      description: "Torne-se especialista em medições com OTDR, análise de eventos e certificação profissional.",
      image: "/fiber-optic-testing-otdr-equipment.jpg",
      students: 95,
      duration: "6h",
      rating: 5,
      link: "https://docs.google.com/forms/d/1f4ZO6w2lZ-ZlMvWCQoNQ2ivxXX_qCFPUKy2aRMcAaeE/closedform?pli=1",
      topics: ["Operação de OTDR", "Análise de eventos", "Documentação técnica"],
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-x-hidden">
      <NeonSnakes />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 rounded-full mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">Nossos Cursos</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Escolha seu <span className="text-[#00f2ff]">treinamento</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cursos práticos e completos ministrados por Giliade Paulino, especialista com 14 anos de experiência
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 overflow-hidden transition-all"
              >
                {/* Course Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-b from-[#0a1520] to-[#02040a]">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: course.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-[#00f2ff] fill-[#00f2ff]" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00f2ff] transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#00f2ff]" />
                      <span>{course.students} alunos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#00f2ff]" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={16} className="text-[#00f2ff] mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#00f2ff]/10 flex items-center justify-center">
                      <BookOpen size={18} className="text-[#00f2ff]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Giliade Paulino</p>
                      <p className="text-xs text-gray-500">Especialista em Telecom</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full px-6 py-4 bg-[#00f2ff] text-[#02040a] font-bold rounded-lg hover:bg-[#00d4e6] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.3)]"
                  >
                    ADQUIRIR AGORA
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
