import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const instagramImages = [
  "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  "https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  "https://images.pexels.com/photos/6621336/pexels-photo-6621336.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Orbitron'] text-2xl font-bold mb-6 tracking-wide">
              <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text">
                LUMINA
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Revolutionizing natural beauty with cutting-edge science and pure botanical ingredients.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-['Orbitron'] text-lg font-semibold mb-6 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Ingredients', 'Sustainability', 'Reviews', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-['Orbitron'] text-lg font-semibold mb-6 tracking-wide">
              CONTACT
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Beauty Boulevard<br />
                  Los Angeles, CA 90210
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (555) GLOW-NOW</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">hello@lumina.beauty</p>
              </div>
            </div>
          </motion.div>

          {/* Instagram Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-['Orbitron'] text-lg font-semibold mb-6 tracking-wide">
              @LUMINABEAUTY
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Lumina Beauty. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};