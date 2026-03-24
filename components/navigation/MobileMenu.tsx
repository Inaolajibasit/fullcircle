'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface MobileMenuProps {
  links: Array<{ name: string; href: string }>
  onClose: () => void
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 h-full w-3/4 bg-black border-l border-red-600/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 space-y-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={`text-3xl font-bold transition-colors ${
                  pathname === link.href ? 'text-red-600' : 'text-white hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
