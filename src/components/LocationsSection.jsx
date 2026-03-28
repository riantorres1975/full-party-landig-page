// src/components/LocationsSection.jsx
// Sección de sucursales con enlaces a Google Maps

import { locations } from '../data/locationData';

export default function LocationsSection() {
  return (
    <section id="sucursales" className="py-20 bg-white relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute -bottom-10 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-70" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-orange-100 text-brand-orange font-body font-bold text-sm px-4 py-1 rounded-full mb-4">
            📍 Encuéntranos
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-gray-800 mb-4">
            Nuestras{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ea580c, #facc15)' }}>
              Sucursales
            </span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-md mx-auto">
            Visítanos en cualquiera de nuestras tiendas en Uruapan, Michoacán.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <div
              key={loc.id}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={idx * 100}
              className="group rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${loc.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{loc.emoji}</div>
                <h3 className="font-display text-2xl">{loc.name}</h3>
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-3 text-gray-600">
                  <i className="fa-solid fa-location-dot text-brand-magenta mt-0.5 w-4 flex-shrink-0" />
                  <span className="font-body text-sm">{loc.address}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <i className="fa-solid fa-clock text-brand-cyan mt-0.5 w-4 flex-shrink-0" />
                  <span className="font-body text-sm">{loc.schedule}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <i className="fa-solid fa-phone text-brand-lime mt-0.5 w-4 flex-shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, '')}`}
                    className="font-body text-sm hover:text-brand-purple transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                {/* Botón Google Maps */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 bg-brand-magenta hover:bg-pink-600 text-white font-display text-sm px-5 py-3 rounded-full shadow hover:shadow-pink-300 transition-all duration-300 hover:scale-105"
                >
                  <i className="fa-brands fa-google text-white" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
