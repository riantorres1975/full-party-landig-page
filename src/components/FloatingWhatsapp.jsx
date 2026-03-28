// src/components/FloatingWhatsapp.jsx
// Botón flotante de WhatsApp con efecto pulso

const WA_URL = 'https://wa.me/524521040377?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos%20%F0%9F%8E%89';

export default function FloatingWhatsapp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-400 transition-transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-white text-3xl" />
    </a>
  );
}
