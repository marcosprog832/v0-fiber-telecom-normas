"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Globe } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(94) 98814-9435",
    href: "tel:+5594988149435",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "telecomnormasabnt@gmail.com",
    href: "mailto:telecomnormasabnt@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "telecomnormas.com.br",
    href: "https://telecomnormas.com.br",
  },
]

export const PartnershipsContact = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-[#00f2ff]/10 via-transparent to-transparent border border-[#00f2ff]/20 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[#00f2ff]/5 blur-3xl" />

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Entre em Contato</h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Interessado em fazer parceria e alcançar milhares de profissionais qualificados do setor de
              telecomunicações?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 group-hover:bg-[#00f2ff]/20 transition-all duration-300">
                    <contact.icon className="w-6 h-6 text-[#00f2ff]" />
                  </div>

                  <div className="text-center space-y-1">
                    <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">{contact.label}</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#00f2ff] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="https://wa.me/5594988149435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00f2ff] text-black font-black uppercase text-sm tracking-wider hover:bg-[#00d4e6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
