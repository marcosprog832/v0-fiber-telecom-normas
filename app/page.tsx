"use client"

import { Navbar } from "@/components/navbar"
import { NeonSnakes } from "@/components/neon-snakes"
import { motion } from "framer-motion"
import {
  Shield,
  Award,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Zap,
  BookOpen,
  Globe,
  Calendar,
  TrendingUp,
} from "lucide-react"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-x-hidden">
      <NeonSnakes />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section - Professional Layout */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-4 py-2 rounded-full mb-8">
                  <Zap size={16} className="text-[#00f2ff]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">
                    Inscrições Abertas 2025
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                  DOMINE AS NORMAS DA
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0099ff]">
                    FIBRA ÓPTICA
                  </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
                  O treinamento definitivo para técnicos que buscam a excelência em projetos de comunicações e
                  infraestrutura de rede.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="group px-8 py-4 bg-[#00f2ff] text-[#02040a] font-bold rounded-lg hover:bg-[#00d4e6] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                    COMEÇAR AGORA
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:border-[#00f2ff] hover:bg-[#00f2ff]/10 transition-all flex items-center justify-center gap-3">
                    <Play size={18} />
                    VER CRONOGRAMA
                  </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "+500", label: "Alunos" },
                    { value: "35h", label: "de Conteúdo" },
                    { value: "100%", label: "Prático" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="text-3xl font-black text-[#00f2ff] mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[3/4] max-w-md mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/20 via-transparent to-transparent rounded-3xl blur-3xl"></div>

                  {/* Image Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a1520] to-[#02040a]">
                    <img
                      src="/images/whatsapp-image-2025-12-18-at-21.png"
                      alt="Instrutor Profissional"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain object-bottom"
                    />
                    {/* Natural Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#00f2ff]/20 rounded-full"></div>
                  <div className="absolute top-10 -left-4 w-4 h-4 bg-[#00f2ff] rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Users size={32} />, value: "+500", label: "Profissionais Certificados" },
                { icon: <Award size={32} />, value: "98%", label: "Taxa de Aprovação" },
                { icon: <BookOpen size={32} />, value: "6", label: "Módulos Completos" },
                { icon: <Globe size={32} />, value: "15+", label: "Estados Atendidos" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[#00f2ff] mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-black mb-1">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
              {[
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
              ].map((item, idx) => (
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

        {/* Curriculum Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#00f2ff]/10 border border-[#00f2ff]/20 rounded-full mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">
                  Conteúdo Programático
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                O que você vai <span className="text-[#00f2ff]">aprender</span>
              </h2>
              <p className="text-gray-400 text-lg">6 módulos completos do básico ao avançado</p>
            </motion.div>

            <div className="space-y-4">
              {[
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
              ].map((module, idx) => (
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

        {/* Testimonials Section */}
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
              {[
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
              ].map((testimonial, idx) => (
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

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#00f2ff]/10 to-[#0099ff]/10 border border-[#00f2ff]/20 text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Pronto para transformar sua <span className="text-[#00f2ff]">carreira</span>?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Junte-se a centenas de profissionais que já dominam as normas da fibra óptica
                </p>
                <button className="group px-10 py-5 bg-[#00f2ff] text-[#02040a] font-bold text-lg rounded-lg hover:bg-[#00d4e6] transition-all inline-flex items-center gap-3 shadow-[0_0_40px_rgba(0,242,255,0.4)]">
                  GARANTIR MINHA VAGA
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
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
