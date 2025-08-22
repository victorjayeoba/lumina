import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEmail('');
    setIsSubmitting(false);
    alert('Thank you for joining the Glow Club!');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6621336/pexels-photo-6621336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="Newsletter background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-['Orbitron'] text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            JOIN THE
            <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text block">
              GLOW CLUB
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Be the first to discover new products, exclusive tips, and special member-only offers
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            animate={isSubmitting ? {} : { scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg tracking-wide transition-all duration-300 shadow-2xl hover:shadow-rose-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                JOINING...
              </div>
            ) : (
              'JOIN THE GLOW CLUB'
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: "✨", text: "Exclusive early access to new products" },
            { icon: "💎", text: "Member-only beauty tips & tutorials" },
            { icon: "🎁", text: "Special discounts & birthday surprises" }
          ].map((benefit, index) => (
            <div key={index} className="text-gray-200">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <p className="text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};