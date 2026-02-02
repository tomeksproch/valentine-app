"use client";

import { motion } from "framer-motion";

interface Heart {
  id: number;
  left: string;
  duration: number;
  delay: number;
  size: number;
}

export default function FloatingHearts() {
  const hearts: Heart[] = [...Array(15)].map((_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    duration: 6 + (i % 4),
    delay: i * 0.7,
    size: 20 + (i % 20),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 1, 1, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          className="absolute text-rose-400/40"
          style={{ 
            left: heart.left, 
            fontSize: `${heart.size}px` 
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}