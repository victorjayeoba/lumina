import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    quote: "This serum completely transformed my skin in just two weeks. The glow is incredible!",
    rating: 5,
    product: "Radiance Serum"
  },
  {
    id: 2,
    name: "Aisha Patel",
    image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    quote: "I've never felt more confident in my natural skin. These products are pure magic.",
    rating: 5,
    product: "Complete Routine"
  },
  {
    id: 3,
    name: "Emma Thompson",
    image: "https://images.pexels.com/photos/3763164/pexels-photo-3763164.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    quote: "The texture, the scent, the results - everything about this line is absolutely perfect.",
    rating: 5,
    product: "Hydra Complex"
  }
];

export const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-stone-50 to-purple-100" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e8b4b8%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            LOVED BY
            <span className="text-transparent bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text block">
              THOUSANDS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our community of radiant women who have discovered the power of natural beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-white/50 group-hover:border-rose-200/50">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-rose-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-rose-600 font-medium">
                        {testimonial.product}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-rose-400 text-rose-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Hover Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "30+", label: "Awards Won" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-['Orbitron'] text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};