// src/components/ui/Card.jsx
// Tarjeta genérica reutilizable

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
