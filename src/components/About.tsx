import { GraduationCap, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Quantum Supremacy',
      description: 'Harnessing quantum-entangled algorithms to solve national-scale challenges in milliseconds.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Sovereign Infrastructure',
      description: 'Building self-reliant, secure AI ecosystems that protect national data and empower local innovation.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'Neural Architectures',
      description: 'Developing next-gen cognitive models that drive industrial automation and economic revolution.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="technology" className="py-20 relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MDIxMzkxOHww&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-950/90 to-purple-950/95" />
      </div>

      {/* Animated shapes */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Technologies
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-blue-200/90 max-w-3xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Neuralift-X is pioneering the deep tech frontier. We are building the foundational technologies
            that will secure our nation's future and position us as a global leader in the age of artificial superintelligence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="h-full"
            >
              <Card className="bg-blue-800/20 backdrop-blur-xl border-blue-700/50 p-8 hover:bg-blue-800/40 transition-all duration-300 relative overflow-hidden group h-full">
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg relative`}>
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-full blur-md opacity-50`} />
                  </div>
                </motion.div>
                <h3 className="text-white text-center mb-3">{feature.title}</h3>
                <p className="text-blue-200/80 text-center">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
