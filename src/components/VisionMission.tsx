import { Eye, Target, Globe } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';

export function VisionMission() {
  const cards = [
    {
      title: 'Vision',
      icon: Eye,
      content: 'To architect a sovereign technological future where our nation leads the global cognitive revolution.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mission',
      icon: Target,
      content: 'Deploying quantum-resilient neural infrastructure to solve critical challenges in defense, energy, and economy.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Values',
      icon: Globe,
      content: 'Audacity in innovation, integrity in execution, and unwavering commitment to national advancement.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="vision" className="relative py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            The Blueprint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Our strategic framework for engineering the singularity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <GlassCard key={index} className="p-8 hover:bg-white/5 transition-colors group">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} p-0.5 mb-6`}>
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {card.content}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
