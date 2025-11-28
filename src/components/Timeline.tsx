import { motion } from 'motion/react';

export function Timeline() {
  const milestones = [
    {
      year: '2023',
      title: 'Genesis',
      description: 'Conceptualization of the sovereign neural architecture. Core research team assembled from top national institutes.',
      side: 'left',
    },
    {
      year: '2024',
      title: 'The Awakening',
      description: 'First successful deployment of the quantum-resilient prototype. Secured strategic partnerships with defense and energy sectors.',
      side: 'right',
    },
    {
      year: '2025',
      title: 'National Grid',
      description: 'Scaling the cognitive infrastructure nationwide. Empowering local industries with autonomous decision-making capabilities.',
      side: 'left',
    },
    {
      year: '2026',
      title: 'Global Expansion',
      description: 'Exporting sovereign intelligence solutions to allied nations. Establishing Neuralift-X as a global deep tech superpower.',
      side: 'right',
    },
    {
      year: '2027',
      title: 'The Singularity',
      description: 'Achieving full cognitive autonomy. The dawn of a new era where human potential is limitless.',
      side: 'left',
    },
  ];

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1617755870291-1f0de453ad30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MDE4MzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-950/90 to-indigo-950/95" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-blue-200/90 max-w-2xl mx-auto">
            From a bold idea to a global platform - see how we've grown and evolved.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with glow */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 blur-md rounded-full" />
            </div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 sm:mb-16 flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <motion.div
                  className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-blue-800/20 backdrop-blur-xl border border-blue-700/50 rounded-lg p-6 hover:bg-blue-800/40 transition-all duration-300 relative overflow-hidden group">
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />

                    <motion.span
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full mb-3 shadow-lg relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50" />
                    </motion.span>
                    <h3 className="text-white mb-2">{milestone.title}</h3>
                    <p className="text-blue-200/80">{milestone.description}</p>
                  </div>
                </motion.div>

                {/* Center dot with pulse */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-4 border-blue-900 shadow-2xl relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-50" />
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
