"use client"

import { Share2, User, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#02040a]/50 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(0,242,255,0.25)",
                "0 0 30px rgba(0,242,255,0.45)",
                "0 0 15px rgba(0,242,255,0.25)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-10 h-10 bg-[#00f2ff] rounded-xl flex items-center justify-center"
          >
            <Share2 className="text-black" size={20} />
          </motion.div>

          <div className="flex flex-col text-left">
            <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">
              TELECOM <span className="text-[#00f2ff]">NORMAS</span>
            </span>
            <span className="text-[8px] text-gray-500 font-bold tracking-[0.3em] uppercase">
              Infraestrutura & Fibra
            </span>
          </div>
        </div>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
          {["Início", "Cursos", "O Instrutor"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative transition-colors hover:text-[#00f2ff]"
            >
              {item}
            </a>
          ))}

          {/* CTA Área do Aluno */}
          <button className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-white border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:text-black">
            <div className="absolute inset-0 bg-[#00f2ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <User size={14} />
              ÁREA DO ALUNO
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#02040a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {["Início", "Cursos", "O Instrutor"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-[#00f2ff] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-black text-sm uppercase bg-[#00f2ff] text-black">
                <User size={16} />
                ÁREA DO ALUNO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
