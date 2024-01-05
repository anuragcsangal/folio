"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  console.log(position)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

  return (
    <motion.div
      className={`invisible -z-1 md:visible h-[300px] w-[300px] absolute bg-white top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black rounded-full mix-blend-lighten filter blur-2xl opacity-70`} style={{
        left: position.x - 20,
        top: position.y - 20
      }} />
  )
}

export default FollowCursor
