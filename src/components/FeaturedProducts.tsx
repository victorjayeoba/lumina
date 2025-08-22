import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    id: 1,
    name: "Radiance Serum",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "Illuminates & rejuvenates for natural glow"
  },
  {
    id: 2,
    name: "Crystal Cleanser",
    image: "https://images.pexels.com/photos/7755661/pexels-photo-7755661.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "Deep purifying with natural minerals"
  },
  {
    id: 3,
    name: "Youth Elixir",
    image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "Anti-aging power of pure botanicals"
  },
  {
    id: 4,
    name: "Hydra Complex",
    image: "https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "24-hour moisture lock technology"
  },
  {
    id: 5,
    name: "Luminous Mask",
    image: "https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "Instant radiance boost in 15 minutes"
  },
  {
    id: 6,
    name: "Renewal Cream",
    image: "https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    benefit: "Overnight skin transformation"
  }
];

export const FeaturedProducts: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            FEATURED COLLECTION
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved formulations, crafted with cutting-edge science and pure natural ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-['Orbitron'] text-xl font-bold mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {product.benefit}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};