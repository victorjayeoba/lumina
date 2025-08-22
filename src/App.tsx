import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Lifestyle } from './components/Lifestyle';
import { Transformation } from './components/Transformation';
import { Ingredients } from './components/Ingredients';
import { Testimonials } from './components/Testimonials';
import { Tips } from './components/Tips';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update page title
    document.title = 'Lumina Beauty - Glow Naturally. Shine Beautifully.';
  }, []);

  return (
    <div className="App">
      <Hero />
      <FeaturedProducts />
      <Lifestyle />
      <Transformation />
      <Ingredients />
      <Testimonials />
      <Tips />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;