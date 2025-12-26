"use client"

import { motion } from "framer-motion"
import { Cog } from "lucide-react"

export function ConsultoriaHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#02040a]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Texto principal */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0099ff] leading-tight"
        >
          Aguarde, estamos construindo o melhor da consultoria em telecomunicações
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-gray-400 px-2 sm:px-0"
        >
          Em breve você terá acesso a conteúdos exclusivos sobre redes de fibra óptica, infraestrutura e treinamentos corporativos.
        </motion.p>

        {/* Engrenagens animadas */}
        <div className="mt-12 flex justify-center items-center gap-6 sm:gap-8">
          {/* Engrenagem maior */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#00f2ff]"
          >
            <Cog size={64} className="text-[#00f2ff]" />
          </motion.div>

          {/* Engrenagem menor encaixada */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-12 h-12 sm:w-16 sm:h-16 text-[#0099ff] -ml-4 sm:-ml-6"
          >
            <Cog size={48} className="text-[#0099ff]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}