// src/components/CatalogHighlight.jsx
// Sección "Cómo funciona" con 3 tarjetas y capturas del catálogo

/*
  ─────────────────────────────────────────────────────────────────
  IMÁGENES: Coloca los archivos en src/assets/ con estos nombres:
    - src/assets/catalog-products.png   (reemplaza image_3.png)
    - src/assets/catalog-confirm.png    (reemplaza image_6.png)
    - src/assets/catalog-tracking.png   (reemplaza image_5.png)

  Luego importa así (ya preparado abajo, descomenta cuando tengas los archivos):
  import imgProducts from '../assets/catalog-products.png';
  import imgConfirm  from '../assets/catalog-confirm.png';
  import imgTracking from '../assets/catalog-tracking.png';
  ─────────────────────────────────────────────────────────────────
*/

const STORE_URL = 'https://full-party-store.vercel.app/';

// Configura aquí las rutas de tus imágenes reales:
// const imgProducts = '/src/assets/catalog-products.png';
// const imgConfirm  = '/src/assets/catalog-confirm.png';
// const imgTracking = '/src/assets/catalog-tracking.png';

const STEPS = [
  {
    step: '1',
    title: 'Elige',
    desc: 'Navega nuestro catálogo digital y selecciona los productos que quieras para tu fiesta.',
    // img: imgProducts,   // 👈 Descomentar cuando tengas la imagen
    fallbackEmoji: '🛍️',
    accent: 'from-brand-purple to-violet-600',
    badge: 'bg-purple-100 text-brand-purple',
    aos: 'fade-right',
  },
  {
    step: '2',
    title: 'Confirma',
    desc: 'Revisa tu pedido, confirma los detalles y realiza tu pago de forma segura.',
    // img: imgConfirm,    // 👈 Descomentar cuando tengas la imagen
    fallbackEmoji: '✅',
    accent: 'from-brand-magenta to-pink-600',
    badge: 'bg-pink-100 text-brand-magenta',
    aos: 'fade-up',
    delay: 100,
  },
  {
    step: '3',
    title: 'Recibe',
    desc: 'Rastrea tu pedido en tiempo real y recíbelo listo para tu celebración.',
    // img: imgTracking,   // 👈 Descomentar cuando tengas la imagen
    fallbackEmoji: '📦',
    accent: 'from-brand-cyan to-sky-600',
    badge: 'bg-cyan-100 text-brand-cyan',
    aos: 'fade-left',
    delay: 200,
  },
];

export default function CatalogHighlight() {
  return (
    <section
      id="catalogo"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #fdf2f8 100%)' }}
    >
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-cyan" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-pink-100 text-brand-magenta font-body font-bold text-sm px-4 py-1 rounded-full mb-4">
            📱 Pedidos online
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-gray-800 mb-4">
            ¿Cómo{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #db2777, #ea580c)' }}>
              funciona?
            </span>
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto text-lg">
            Hacer tu pedido es súper fácil. ¡Solo 3 pasos y listo!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div
              key={s.step}
              data-aos={s.aos}
              data-aos-delay={s.delay ?? 0}
              className="card-glow bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              {/* Imagen del catálogo */}
              <div className="catalog-img-wrap relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3] flex items-center justify-center">
                {s.img ? (
                  <img
                    src={s.img}
                    alt={`Paso ${s.step}: ${s.title}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* ── Placeholder hasta que agregues las imágenes ── */
                  <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${s.accent} opacity-90`}>
                    <span className="text-6xl mb-3">{s.fallbackEmoji}</span>
                    <p className="font-body text-white/80 text-sm px-4 text-center">
                      Coloca aquí la captura del catálogo
                    </p>
                    <code className="text-white/60 text-xs mt-1">
                      {s.step === '1' ? 'catalog-products.png' : s.step === '2' ? 'catalog-confirm.png' : 'catalog-tracking.png'}
                    </code>
                  </div>
                )}

                {/* Badge de paso */}
                <div className={`absolute top-3 left-3 ${s.badge} font-display text-lg w-10 h-10 rounded-full flex items-center justify-center shadow`}>
                  {s.step}
                </div>
              </div>

              {/* Texto */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-gray-800 mb-2">
                  Paso {s.step}: {s.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 text-white font-display text-xl px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <i className="fa-solid fa-rocket" />
            ¡Ir al Catálogo Ahora!
          </a>
        </div>
      </div>
    </section>
  );
}
