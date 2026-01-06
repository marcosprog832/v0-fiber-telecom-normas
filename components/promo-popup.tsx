"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Configurado para 3 segundos (3000ms)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Fundo Escuro (clique fora para fechar) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* O Card do Pop-up */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            // ATUALIZAÇÃO: Aumentei para max-w-5xl e adicionei altura mínima de 500px
            className="relative bg-[#0a0a0a] border-2 border-[#00f2ff] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,242,255,0.2)] flex flex-col md:flex-row md:min-h-[500px]"
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-white hover:text-[#00f2ff] bg-black/60 hover:bg-black rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Lado Esquerdo: Imagem */}
            <div className="relative w-full h-64 md:h-auto md:w-1/2 bg-black border-b md:border-b-0 md:border-r border-slate-800">
              <Image
                src="/images/otdr_raiz2.jpeg" 
                alt="Curso OTDR Raiz"
                fill
                // ATUALIZAÇÃO: object-contain garante que a imagem não seja cortada
                className="object-contain bg-black"
              />
              {/* Sombra interna leve */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Lado Direito: Conteúdo */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative bg-[#0a0a0a]">
              
              <div className="inline-block px-4 py-1 bg-[#ff0000]/20 border border-[#ff0000] rounded-full text-[#ff0000] text-xs font-black w-fit mb-5 animate-pulse">
                🔴 ÚLTIMAS VAGAS
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase leading-none">
                Domine o <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0066ff]">
                  OTDR RAIZ
                </span>
              </h2>

              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Descubra os segredos da certificação de fibra óptica que os manuais não contam. Torne-se um especialista disputado.
              </p>

              {/* O BOTÃO CHAMATIVO AQUI */}
              <a
                href="https://forms.gle/sdbTtGM7gYBKCvMf9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full bg-gradient-to-r from-[#00f2ff] to-[#0066ff] text-black font-black text-center py-5 rounded-xl text-lg uppercase tracking-wider overflow-hidden hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(0,242,255,0.4)]"
              >
                {/* Efeito de brilho passando no botão */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quero Minha Vaga
                  <ArrowRight className="w-6 h-6 animate-bounce-x" />
                </span>
              </a>
              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}