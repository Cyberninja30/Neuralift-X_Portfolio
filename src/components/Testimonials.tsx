import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'General Sarah Connor',
      role: 'Defense Advanced Research Projects',
      content: 'Neuralift-X has redefined our strategic capabilities. Their sovereign intelligence grid is the backbone of our national defense modernization.',
      rating: 5,
    },
    {
      name: 'Dr. Miles Dyson',
      role: 'Director, Cyberdyne Energy',
      content: 'The quantum optimization algorithms provided by Neuralift-X have increased our grid efficiency by 400%. A true paradigm shift.',
      rating: 5,
    },
    {
      name: 'Elena Fisher',
      role: 'Minister of Innovation',
      content: 'Partnering with Neuralift-X was the decisive factor in our national digital transformation. They are building the future, today.',
      rating: 5,
    },
    {
      name: 'Marcus Wright',
      role: 'CEO, Skynet Logistics',
      content: 'The autonomous decision-making capabilities of their neural mesh have revolutionized our global supply chain operations.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1709159057219-80439fbeddce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjAxNzQ4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-950/90 to-indigo-950/95" />
      </div>

      {/* Animated quote marks floating */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Quote className="w-40 h-40 text-blue-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <Quote className="w-32 h-32 text-purple-400" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-blue-200/90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from educators and organizations using Neuralift-X.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="bg-blue-800/20 backdrop-blur-xl border-blue-700/50 p-8 hover:bg-blue-800/40 transition-all duration-300 relative overflow-hidden group h-full">
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1 }}
                />

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-10 h-10 text-blue-400 mb-4 relative z-10" />
                </motion.div>

                <p className="text-blue-100 mb-6 leading-relaxed relative z-10">{testimonial.content}</p>

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h4 className="text-white">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glowing corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
