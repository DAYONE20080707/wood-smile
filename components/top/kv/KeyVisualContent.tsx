// components/ui/frame/KeyVisualContent.tsx
"use client"

import classNames from "classnames"
import Image from "next/image"
import { useState, useEffect } from "react"

interface KeyVisualContentProps {
  className?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [{ src: "/top/kv/kv.mp4", alt: "KV" }]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className={classNames("relative w-full", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.src.endsWith(".mp4") ? (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              priority={index === 0}
              fill
              className="object-cover"
            />
          )}
          {/* 黒20%のグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
        </div>
      ))}
    </div>
  )
}

export default KeyVisualContent
