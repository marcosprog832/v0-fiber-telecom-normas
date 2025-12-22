"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState } from "react"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Manoel Ferreira",
      role: "Técnico de Fibra Óptica",
      company: "Telecom Solutions",
      image: "/images/manoel-ferreira.jpg",
      text: `
Meu nome é Manoel Ferreira e gostaria de compartilhar um pouco da minha trajetória, desde o dia 14 de maio de 2024, quando entrei aqui no grupo com a necessidade de aprofundar meus conhecimentos em OTDR.

Ao me deparar com a trilha de aprendizado, percebi que precisava ir muito além: buscar mais certificações, como Gestão, Comunicação Assertiva, Redes, Mikrotik, Excel, entre outras. A dificuldade já existia naquele momento, e a primeira pergunta que veio à minha mente foi: "Como vou conseguir fazer tudo isso trabalhando, com filhos, esposa e uma casa para cuidar e manter?"

O primeiro passo foi o mais difícil. Os primeiros dias foram cansativos e extremamente desafiadores. Confesso que muitas vezes deu vontade de parar. Mas, graças a Deus, mantive o foco. Comecei a conquistar os primeiros certificados e, a partir dali, algo mudou: me tornei viciado em estudar e evoluir todos os dias dentro da minha área de atuação.

Montei um PDI – Plano de Desenvolvimento Individual, definindo metas claras para 2025 e, graças a Deus, consegui alcançar todas elas:
- Consegui um novo emprego
- Diploma do curso Técnico em Telecomunicações
- Registro no CFT
- Curso OTDR Raiz
- Diversos certificados nas áreas de Telecomunicações, Mikrotik, Excel, Gestão, Redes, entre outros

Quero deixar aqui um reconhecimento especial ao @Giliade Paulino. Em meio a tantos "influencers" que só incentivam apostas e caminhos fáceis, ele é alguém que entrega conhecimento real, de forma gratuita, mostrando o caminho para crescer de verdade dentro das telecomunicações. Ele dedica tempo, energia e conhecimento para ajudar profissionais a se desenvolverem, e isso faz toda a diferença.

Sou muito grato por fazer parte dessa comunidade e por poder afirmar com convicção: só depende de nós.

E não parei por aqui! Já tenho meu PDI de 2026, com foco total em Redes e Gestão de Equipes.

Que minha história motive vocês a não desistirem. O processo é difícil, mas a recompensa vale cada esforço. 💪📚
      `,
      rating: 5,
    },
    {
      name: "William Prestes",
      role: "Técnico de Fibra Óptica",
      company: "NetFiber Brasil",
      image: "/images/william-prestes.jpg",
      text: `
Gostaria de expressar minha profunda gratidão por todo o conhecimento compartilhado através da sua trilha de cursos. A forma como você repassa o conteúdo torna o aprendizado de tecnologias complexas muito mais acessível e prático.

Graças à sua metodologia, consegui conquistar marcos importantes e consolidar conhecimentos fundamentais para a minha carreira, entre eles:
- Certificação Inatel
- Redes Epon e GPON
- Prática Técnica em Layer 2
- Curso OTDR Raiz

Estou a pouco tempo no grupo e sei que a jornada não para por aqui. Já tracei minha meta para 2026: concluir o restante dos cursos da trilha e conquistar o meu CFT, consolidando de vez minha atuação no setor.

Obrigado por ser esse mentor dedicado e por elevar o nível dos profissionais de telecomunicações no Brasil. Seguimos pra cima!
      `,
      rating: 5,
    },
    {
      name: "Roberto Almeida Costa",
      role: "Supervisor de Infraestrutura",
      company: "Connect Telecom",
      image: "/images/roberto-almeida.jpg",
      text: "Melhor investimento que fiz na minha carreira. Aprendi técnicas de fusão que aumentaram minha produtividade em 40%.",
      rating: 5,
    },
    {
      name: "Juliana Ferreira Lima",
      role: "Técnica de Campo",
      company: "FiberMax",
      image: "/images/juliana-ferreira.jpg",
      text: "Estava há anos querendo me especializar em fibra óptica. O curso me deu toda a base teórica e prática que precisava.",
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
          {testimonials.map((testimonial, idx) => {
            const [expanded, setExpanded] = useState(false)
            const preview = testimonial.text.slice(0, 250) // mostra só os primeiros 250 caracteres

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2ff]/30 transition-all"
              >
                {/* Imagem + Nome */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00f2ff]/40"
                  />
                  <div>
                    <h4 className="font-bold text-[#00f2ff]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-[#00f2ff]/60">{testimonial.company}</p>
                  </div>
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#00f2ff] fill-[#00f2ff]" />
                  ))}
                </div>

                {/* Texto com prévia */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {expanded ? testimonial.text : `${preview}...`}
                </p>

                {/* Botão Ler mais / Ler menos */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm font-bold text-[#00f2ff] hover:underline"
                >
                  {expanded ? "Ler menos" : "Ler mais"}
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}