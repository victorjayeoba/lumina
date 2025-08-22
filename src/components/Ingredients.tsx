import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ingredients = [
  {
    id: 1,
    name: "Rose Quartz Extract",
    image: "https://images.pexels.com/photos/6620743/pexels-photo-6620743.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    benefit: "Promotes cellular renewal and radiant glow"
  },
  {
    id: 2,
    name: "Himalayan Pink Salt",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    benefit: "Detoxifies and purifies skin naturally"
  },
  {
    id: 3,
    name: "Argan Oil",
    image: "https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    benefit: "Deep moisturization and anti-aging properties"
  },
  {
    id: 4,
    name: "Sea Buckthorn",
    image: "https://images.pexels.com/photos/6620744/pexels-photo-6620744.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    benefit: "Rich in vitamins C and E for skin protection"
  },
  {
    id: 5,
    name: "Jade Stone Essence",
    image: "https://images.pexels.com/photos/6620741/pexels-photo-6620741.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    benefit: "Cooling and soothing for sensitive skin"
  }
];

export const Ingredients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            NATURE'S FINEST
            <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text block">
              INGREDIENTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Each ingredient is carefully selected and scientifically proven to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 h-full shadow-2xl hover:shadow-rose-500/10 transition-all duration-500">
                {/* Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 w-3 h-3 bg-rose-400 rounded-full group-hover:animate-pulse" />
                </div>

                {/* Content */}
                <h3 className="font-['Orbitron'] text-xl font-bold text-white mb-3 tracking-wide">
                  {ingredient.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {ingredient.benefit}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-rose-400/0 group-hover:border-rose-400/30 rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="font-['Orbitron'] text-2xl font-bold text-white mb-4 tracking-wide">
              SOURCED SUSTAINABLY, CRAFTED SCIENTIFICALLY
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Every ingredient in our formulations is ethically sourced from its native environment, 
              ensuring maximum potency while supporting local communities and preserving biodiversity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};