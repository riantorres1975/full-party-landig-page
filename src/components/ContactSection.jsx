// src/components/ContactSection.jsx
// Sección de contacto y redes sociales

const CONTACTS = [
  {
    label: 'WhatsApp',
    value: '+52 452 104 0377',
    href: 'https://wa.me/524521040377?text=Hola!%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%8E%89',
    icon: 'fa-brands fa-whatsapp',
    color: 'bg-green-500 hover:bg-green-400',
    text: '¡Escríbenos ahora!',
  },
  {
    label: 'Facebook',
    value: 'Full Party Uruapan',
    href: 'https://www.facebook.com/profile.php?id=100068298698109',
    icon: 'fa-brands fa-facebook-f',
    color: 'bg-blue-600 hover:bg-blue-500',
    text: 'Síguenos en Facebook',
  },
  {
    label: 'Tienda Online',
    value: 'full-party-store.vercel.app',
    href: 'https://full-party-store.vercel.app/',
    icon: 'fa-solid fa-store',
    color: 'bg-brand-purple hover:bg-violet-600',
    text: 'Ver catálogo',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fdf2f8 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-purple-100 text-brand-purple font-body font-bold text-sm px-4 py-1 rounded-full mb-4">
            💬 Estamos aquí para ti
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #7e22ce, #db2777)' }}>
              ¡Contáctanos!
            </span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-md mx-auto">
            Estamos listos para ayudarte a planear la fiesta perfecta. 🎉
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {CONTACTS.map((c, idx) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`group ${c.color} text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <i className={`${c.icon} text-4xl mb-3 block group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-lg mb-1">{c.label}</h3>
              <p className="font-body text-sm text-white/80 mb-2">{c.value}</p>
              <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full">
                {c.text} →
              </span>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          data-aos="zoom-in"
          className="rounded-3xl p-8 text-center text-white shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #7e22ce, #db2777, #ea580c)' }}
        >
          <div className="text-5xl mb-4">🎊</div>
          <h3 className="font-display text-3xl mb-3">
            ¿Listo para la fiesta?
          </h3>
          <p className="font-body text-white/80 mb-6 max-w-sm mx-auto">
            Visita nuestro catálogo digital y sorprende a todos con la mejor decoración.
          </p>
          <a
            href="https://full-party-store.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-purple font-display text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <i className="fa-solid fa-rocket" />
            ¡Ir al Catálogo!
          </a>
        </div>
      </div>
    </section>
  );
}
