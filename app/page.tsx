"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const FloatingHearts = dynamic(() => import("./components/floating-hearts"), { 
  ssr: false 
});

const NO_PHRASES: readonly string[] = [
  "Nie",
  "Na pewno?",
  "Pomyśl jeszcze raz...",
  "Anusiu, proszę!",
  "Będę smutny :(",
  "Serio?",
  "Daj spokój...",
  "Złamiesz mi serce",
  "Ostatnia szansa!",
  "No weź...",
];

export default function ValentinePage() {
  const [noClicks, setNoClicks] = useState<number>(0);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const yesButtonSize = noClicks * 20 + 16;

  const handleNoClick = (): void => {
    setNoClicks((prev) => prev + 1);
  };

  const handleYesClick = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", { method: "POST" });
      if (response.ok) {
        setIsAccepted(true);
      }
    } catch (error) {
      console.error("Failed to send validation email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden bg-pink-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-200 via-rose-50 to-pink-300 opacity-60" />
      
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-md w-full text-center space-y-10 z-10"
          >
            <h1 className="text-4xl md:text-6xl font-black text-rose-600 drop-shadow-md px-2">
              Anusiu, czy zostaniesz moją <span className="text-pink-500 underline decoration-wavy">walentynką?</span>
            </h1>

            <div className="relative h-56 w-56 md:h-72 md:w-72 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image 
                src="/ask-gif.gif" 
                alt="Proszę o odpowiedź" 
                fill 
                className="object-cover"
                priority 
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 min-h-[220px]">
              <motion.button
                layout
                onClick={handleYesClick}
                disabled={isLoading}
                style={{ fontSize: yesButtonSize }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-500 hover:bg-green-600 text-white font-black py-4 px-8 rounded-2xl shadow-[0_10px_0_0_rgba(21,128,61,1)] active:shadow-none active:translate-y-1 transition-all z-20 min-w-[140px] disabled:opacity-70"
              >
                {isLoading ? "Wysyłanie..." : "TAK! ❤️"}
              </motion.button>

              {noClicks < NO_PHRASES.length && (
                <button
                  onClick={handleNoClick}
                  className="bg-white/90 text-rose-500 font-bold py-2 px-6 rounded-xl text-sm shadow-md border border-rose-100 z-10 active:scale-90 transition-transform hover:bg-white"
                >
                  {NO_PHRASES[noClicks]}
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 text-center space-y-6 bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50"
          >
            <h1 className="text-4xl md:text-6xl font-black text-rose-600">Jupi! ❤️</h1>
            <p className="text-xl text-rose-500 font-semibold px-4">Do zobaczenia 14 lutego! 🌹</p>
            <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-2xl shadow-inner bg-white">
               <Image src="/success-gif.gif" alt="Sukces!" fill className="object-cover" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}