"use client"

import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { motion } from "framer-motion"
import { Star, Clock, Users, CheckCircle2, BookOpen, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function CursosPage() {
  const courses = [
    {
      id: 1,
      title: "GPON 360 – Do Planejamento à Implantação Completa",
      description:
        "Domine todas as etapas de um projeto GPON, desde o planejamento inicial até a implantação completa. Aprenda dimensionamento, equipamentos OLT/ONU, splitters e configurações avançadas.",
      image: "/fiber-optic-cables-and-equipment.jpg",
      duration: "12h",
      students: 500,
      modules: 10,
      purchaseLink: "https://pay.kiwify.com.br/pC68vFi",
      topics: [
        "Planejamento e dimensionamento GPON",
        "Configuração de OLT e ONU",
        "Topologias e divisores ópticos",
        "Implantação completa de rede",
      ],
    },
    {
      id: 2,
      title: "Telecom Club",
      description:
        "Clube exclusivo com conteúdo contínuo sobre telecomunicações. Acesso a aulas mensais, materiais técnicos, discussões com especialistas e networking profissional.",
      image: "/fiber-optic-cable-installation-infrastructure.jpg",
      duration: "Acesso contínuo",
      students: 450,
      modules: 12,
      purchaseLink: "https://pay.kiwify.com.br/GYd59p0",
      topics: [
        "Conteúdo técnico mensal",
        "Networking profissional",
        "Materiais exclusivos",
        "Discussões com especialistas",
      ],
    },
    {
      id: 3,
      title: "OTDR RAIZ",
      description:
        "Curso especializado em medição com OTDR. Aprenda a interpretar eventos, analisar atenuações, identificar falhas e gerar relatórios profissionais de certificação de redes.",
      image: "/fiber-optic-testing-otdr-equipment.jpg",
      duration: "8h",
      students: 480,
      modules: 8,
      purchaseLink: "https://docs.google.com/forms/d/1f4ZO6w2lZ-ZlMvWCQoNQ2ivxXX_qCFPUKy2aRMcAaeE/closedform?pli=1",
      topics: [
        "Operação completa de OTDR",
        "Análise de eventos e atenuações",
        "Identificação de falhas",
        "Relatórios de certificação",
      ],
    },
    {
      id: 4,
      title: "Fundamentos e Normas ABNT",
      description:
        "Aprenda os conceitos fundamentais de redes ópticas, normas de segurança NR-10 e NR-35, tipos de fibra e cabos, e toda a base teórica necessária para atuar com excelência.",
      image: "/fiber-optic-fusion-splicing-machine.jpg",
      duration: "6h",
      students: 420,
      modules: 8,
      purchaseLink: "#",
      topics: [
        "Conceitos de redes ópticas",
        "Normas de segurança NR-10 e NR-35",
        "Tipos de fibra e cabos",
        "Física da luz aplicada",
      ],
    },
    {
      id: 5,
      title: "Projetos FTTH",
      description:
        "Dimensionamento completo de redes FTTH, topologias PON, equipamentos ativos e passivos, e projeto executivo seguindo as melhores práticas do mercado.",
      image: "/ftth-fiber-to-the-home-network-diagram.jpg",
      duration: "9h",
      students: 390,
      modules: 11,
      purchaseLink: "#",
      topics: [
        "Dimensionamento de redes",
        "Topologias PON (GPON/XPON)",
        "Equipamentos ativos e passivos",
        "Projeto executivo completo",
      ],
    },
    {
      id: 6,
      title: "Manutenção e Troubleshooting",
      description:
        "Técnicas avançadas de diagnóstico de falhas, procedimentos de reparo, otimização de redes existentes e gestão de NOC para fibra óptica.",
      image: "/fiber-optic-maintenance-troubleshooting-repair.jpg",
      duration: "6h",
      students: 360,
      modules: 8,
      purchaseLink: "#",
      topics: ["Diagnóstico de falhas", "Procedimentos de reparo", "Otimização de redes", "Gestão de NOC"],
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-x-hidden">
      <NeonSnakes />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-4 py-2 rounded-full mb-8">
                <BookOpen size={16} className="text-[#00f2ff]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">6 Cursos Disponíveis</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Nossos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0099ff]">
                  Cursos
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                Treinamento completo em fibra óptica ministrado por{" "}
                <span className="font-bold text-[#00f2ff]">Giliade Paulino</span>, especialista com mais de 15 anos de
                experiência em projetos de telecomunicações
              </p>

              {/* Instructor Highlight */}
              <div className="inline-flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f2ff] to-[#0099ff] flex items-center justify-center text-2xl font-black">
                  GP
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg mb-1">Giliade Paulino</div>
                  <div className="text-sm text-gray-400 mb-2">Instrutor Especialista</div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#00f2ff] fill-[#00f2ff]" />
                    ))}
                    <span className="text-xs text-gray-400 ml-2">(500+ alunos)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0a1520] to-[#02040a]">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-[#00f2ff] text-[#02040a] px-3 py-1 rounded-full text-xs font-bold">
                      MÓDULO {course.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating & Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} className="text-[#00f2ff] fill-[#00f2ff]" />
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {course.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#00f2ff] transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{course.description}</p>

                    {/* Topics */}
                    <div className="space-y-2 mb-6">
                      {course.topics.slice(0, 3).map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                          <CheckCircle2 size={14} className="text-[#00f2ff] mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f2ff] to-[#0099ff] flex items-center justify-center text-sm font-black">
                        GP
                      </div>
                      <div>
                        <div className="text-sm font-bold">Giliade Paulino</div>
                        <div className="text-xs text-gray-500">Instrutor Especialista</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={course.purchaseLink}
                      target={course.purchaseLink !== "#" ? "_blank" : undefined}
                      rel={course.purchaseLink !== "#" ? "noopener noreferrer" : undefined}
                      className="block w-full py-3 bg-[#00f2ff] text-[#02040a] font-bold rounded-lg hover:bg-[#00d4e6] transition-all group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] text-center"
                    >
                      ADQUIRIR AGORA
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                Benefícios <span className="text-[#00f2ff]">Exclusivos</span>
              </h2>
              <p className="text-gray-400 text-lg">O que você recebe ao se matricular</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield size={40} />,
                  title: "Certificado Reconhecido",
                  desc: "Certificação com validade nacional ao concluir cada módulo",
                },
                {
                  icon: <Target size={40} />,
                  title: "Prática Intensiva",
                  desc: "Acesso a equipamentos profissionais durante todo o treinamento",
                },
                {
                  icon: <BookOpen size={40} />,
                  title: "Material Completo",
                  desc: "Apostilas digitais, vídeos e acesso vitalício ao conteúdo",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all"
                >
                  <div className="text-[#00f2ff] mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2 font-bold tracking-wider">© 2025 TELECOM NORMAS</p>
            <p className="text-xs">Conectando talentos e transformando carreiras no setor de telecomunicações</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
