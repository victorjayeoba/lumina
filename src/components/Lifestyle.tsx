import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Lifestyle: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* First Story Block */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              THE SCIENCE OF
              <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text block">
                NATURAL BEAUTY
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our revolutionary approach combines ancient wisdom with cutting-edge biotechnology. 
              Each formula is meticulously crafted in our state-of-the-art laboratories, where 
              nature's most powerful ingredients are enhanced through scientific innovation.
            </p>
            <motion.div
              whileHover={{ x: 10 }}
              className="inline-flex items-center text-rose-400 font-semibold tracking-wide cursor-pointer"
            >
              DISCOVER OUR PROCESS
              <div className="ml-2 w-8 h-0.5 bg-rose-400" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Woman applying skincare"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>

        {/* Second Story Block */}
        <div ref={ref2} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                  alt="Natural stones"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.pexels.com/photos/4465819/pexels-photo-4465819.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Skincare texture"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/6621336/pexels-photo-6621336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Spa scene"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img
                  src="https://images.pexels.com/photos/4465822/pexels-photo-4465822.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                  alt="Natural ingredients"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              EMBRACE YOUR
              <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text block">
                NATURAL RADIANCE
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Beauty is not about perfection—it's about celebrating your unique essence. 
              Our holistic approach nurtures not just your skin, but your confidence, 
              helping you embrace the radiant goddess within.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-300">Clinically proven results in 7 days</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-300">100% natural and sustainably sourced</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full" />
                <span className="text-gray-300">Cruelty-free and vegan formulations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};