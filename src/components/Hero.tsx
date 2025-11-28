
import { motion } from 'motion/react';


export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">System Online v2.0</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
            FORGING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
              SINGULARITY
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Igniting a technological renaissance. We are the architects of a new era, driving transformative change to revolutionize our nation and empower the world through sovereign intelligence.
          </p>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      </motion.div>
    </section>
  );
}
