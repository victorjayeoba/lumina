import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tips = [
  {
    id: 1,
    title: "HYDRATE NATURALLY",
    subtitle: "Start from within",
    image: "https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tip: "Drink plenty of water and use our Hydra Complex for optimal skin moisture"
  },
  {
    id: 2,
    title: "EMBRACE YOUR CURLS",
    subtitle: "Natural texture is beautiful",
    image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tip: "Use our natural oils to enhance your hair's natural pattern and shine"
  },
  {
    id: 3,
    title: "GLOW FROM WITHIN",
    subtitle: "Inner radiance shows",
    image: "https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tip: "Combine our Radiance Serum with a healthy lifestyle for maximum glow"
  },
  {
    id: 4,
    title: "PROTECT & NOURISH",
    subtitle: "Prevention is key",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tip: "Daily protection with natural ingredients maintains youthful skin"
  }
];

export const Tips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            BEAUTY
            <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text block">
              INSPIRATION
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expert tips and inspiration to help you embrace your natural radiance
          </p>
        </motion.div>

        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={tips[currentTip].image}
                  alt={tips[currentTip].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-2xl px-8 md:px-16">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-rose-400 text-sm font-semibold tracking-widest mb-4"
                  >
                    {tips[currentTip].subtitle.toUpperCase()}
                  </motion.p>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-['Orbitron'] text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide leading-tight"
                  >
                    {tips[currentTip].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl text-gray-200 leading-relaxed mb-8"
                  >
                    {tips[currentTip].tip}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300"
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {tips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTip(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTip 
                    ? 'bg-rose-400 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};