// src/App.jsx
// Punto de entrada principal que orquesta todos los componentes

import { useState, useEffect } from 'react';
import PageLoader        from './components/PageLoader';
import Navbar            from './components/layout/Navbar';
import Footer            from './components/layout/Footer';
import FloatingWhatsapp  from './components/FloatingWhatsapp';
import HeroSection       from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import CatalogHighlight  from './components/CatalogHighlight';
import LocationsSection  from './components/LocationsSection';
import ContactSection    from './components/ContactSection';
import ReviewsSection    from './components/ReviewsSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Inicializar AOS después de que el loader termina
  useEffect(() => {
    if (!loading) {
      // AOS está cargado via CDN en index.html
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 700,
          once: true,
          offset: 60,
          easing: 'ease-out-cubic',
        });
      }
    }
  }, [loading]);

  return (
    <>
      {/* Pantalla de carga animada */}
      {loading && <PageLoader onDone={() => setLoading(false)} />}

      {/* Contenido principal (renderiza tras el loader) */}
      {!loading && (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <ProductCategories />
            <CatalogHighlight />
            <LocationsSection />
            <ReviewsSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingWhatsapp />
        </div>
      )}
    </>
  );
}
