'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import ReactPlayer only when needed
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => <div className="aspect-video bg-gray-800 animate-pulse" />
})

interface VideoCardProps {
  videoId: string // YouTube ID or full Vimeo URL
  title: string
  category?: string
  thumbnail?: string // Optional custom thumbnail
  platform?: 'youtube' | 'vimeo' // Platform type
}

export default function VideoCard({ videoId, title, category, thumbnail, platform = 'youtube' }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Determine video URL and thumbnail based on platform
  const getVideoUrl = () => {
    if (platform === 'vimeo') {
      return videoId.startsWith('http') ? videoId : `https://vimeo.com/${videoId}`
    }
    return `https://www.youtube.com/watch?v=${videoId}`
  }

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail
    
    if (platform === 'vimeo') {
      // Vimeo thumbnail needs to be custom or fetched via API
      // For now, use a placeholder - you'll add custom thumbnails
      return thumbnail || '/images/video-placeholder.jpg'
    }
    
    // YouTube thumbnail (high quality)
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  const thumbnailUrl = getThumbnailUrl()
  const videoUrl = getVideoUrl()

  return (
    <>
      {/* Video Card */}
      <motion.div
        className="group relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </motion.div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            {category && (
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-2 font-garet">
                {category}
              </span>
            )}
            <h3 className="text-white font-bold text-lg font-garet line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Player */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                playing
                controls
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                      modestbranding: 1,
                      rel: 0,
                    }
                  },
                  vimeo: {
                    playerOptions: {
                      autoplay: true,
                      controls: true,
                    }
                  }
                }}
              />
            </motion.div>

            {/* Video Title */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-white text-2xl font-bold font-cubao">
                {title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
