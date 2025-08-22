import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    id: 1,
    before: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    after: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    title: "Radiant Glow Transformation",
    description: "30 days with our Radiance Serum"
  },
  {
    id: 2,
    before: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    after: "https://images.pexels.com/photos/3785108/pexels-photo-3785108.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    title: "Texture & Clarity",
    description: "21 days with our Crystal Cleanser routine"
  },
  {
    id: 3,
    before: "https://images.pexels.com/photos/4620820/pexels-photo-4620820.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    after: "https://images.pexels.com/photos/4620822/pexels-photo-4620822.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    title: "Natural Hair Revival",
    description: "45 days with our hair care collection"
  }
];

export const Transformation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            TRANSFORMATION
            <span className="text-transparent bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text block">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Witness the power of natural beauty science through real results from our community
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32" />
            
            <div className="relative z-10">
              {transformations.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={index === currentSlide ? 'block' : 'hidden'}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Before/After Images */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-500 tracking-wide">BEFORE</p>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                            <img
                              src={item.before}
                              alt="Before transformation"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-rose-500 tracking-wide">AFTER</p>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative">
                            <img
                              src={item.after}
                              alt="After transformation"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 w-4 h-4 bg-rose-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-rose-400 rounded-full" />
                          <span className="text-gray-600">Visible results in first week</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-rose-400 rounded-full" />
                          <span className="text-gray-600">100% natural ingredients</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-rose-400 rounded-full" />
                          <span className="text-gray-600">Dermatologist recommended</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-gray-100 hover:bg-rose-100 transition-colors duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-rose-600" />
              </button>

              <div className="flex space-x-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-rose-500 w-8' : 'bg-gray-300 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-gray-100 hover:bg-rose-100 transition-colors duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-rose-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};