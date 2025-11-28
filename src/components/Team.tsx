import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

import annkitImage from '../assets/Annkit-pfp.png';
import moinakImage from '../assets/Moinak-pfp.png';
import sohelImage from '../assets/Sohel-pfp.png';
import devaImage from '../assets/Deva-pfp.png';
import krishnaImage from '../assets/Krishna-pfp.png';

export function Team() {
  const teamMembers = [
    {
      name: 'Annkit Sarkar',
      role: 'CEO & Founder',
      image: annkitImage,
      bio: 'Visionary leader with 15+ years in EdTech and AI.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Moinak Niyogi',
      role: 'Co-Founder, CSO',
      image: moinakImage,
      bio: 'AI expert and tech innovator passionate about education.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Sohel Rizwan',
      role: 'Co-Founder, CTO',
      image: sohelImage,
      bio: 'Product strategist focused on user-centric design.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Devashis Chandra',
      role: 'Video Editor',
      image: devaImage,
      bio: 'Creative designer crafting delightful user experiences.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'RS Krishna',
      role: 'Full Stack Developer',
      image: krishnaImage,
      bio: 'Full stack wizard building scalable and robust web applications.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYwMjQ4ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-blue-900/95" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            Meet the Minds
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-blue-200/90 max-w-2xl mx-auto">
            Talented individuals working together to transform education through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="bg-blue-800/20 backdrop-blur-xl border-blue-700/50 overflow-hidden hover:bg-blue-800/40 transition-all duration-300 relative group">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="aspect-[3/4] overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 text-center relative z-10">
                  <h3 className="text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-blue-200/80 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Linkedin className="w-4 h-4 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-blue-500"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Twitter className="w-4 h-4 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-blue-500"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
