"use client"

import { User, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

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
        <Link href="/" className="flex items-center group cursor-pointer select-none">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/images/telecom-normas-3d-removebg-preview.png"
              alt="TELECOM NORMAS"
              width={240}
              height={80}
              className="h-16 w-auto transition-all duration-300"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(68%) sepia(73%) saturate(3000%) hue-rotate(160deg) brightness(103%) contrast(101%) drop-shadow(0 0 12px rgba(0,242,255,0.6))",
              }}
            />
          </motion.div>
        </Link>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
          {[
            { label: "Início", href: "/" },
            { label: "Consultoria Empresarial", href: "/consultoria" },
            { label: "Cursos", href: "/cursos" },
            { label: "O Instrutor", href: "/instrutor" },
            { label: "Parcerias", href: "/parcerias" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="relative transition-colors hover:text-[#00f2ff]">
              {item.label}
            </Link>
          ))}

          {/* CTA Área do Aluno */}
          <a
  href="https://dashboard.kiwify.com/login?lang=pt"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-white border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:text-black"
>
  <div className="absolute inset-0 bg-[#00f2ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
  <span className="relative z-10 flex items-center gap-2">
    <User size={14} />
    ÁREA DO ALUNO
  </span>
</a>
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
              {[
                { label: "Início", href: "/" },
                { label: "Consultoria Empresarial", href: "/consultoria" },
                { label: "Cursos", href: "/cursos" },
                { label: "O Instrutor", href: "/instrutor" },
                { label: "Parcerias", href: "/parcerias" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-[#00f2ff] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
             <a
  href="https://dashboard.kiwify.com/login?lang=pt"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-black text-sm uppercase bg-[#00f2ff] text-black"
>
  <User size={16} />
  ÁREA DO ALUNO
</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
