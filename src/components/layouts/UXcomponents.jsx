import { useState, useEffect, useRef } from 'react';

export const ScrollAnimate = ({ children, className = '', animationClass = 'fade-up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const elementoActual = elementoRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Usamos la variable local aquí también por seguridad
        if (elementoActual) observer.unobserve(elementoActual);
      }
    },
    { threshold: 0.15 }
  );

  // Usamos la variable local para empezar a observar
  if (elementoActual) {
    observer.observe(elementoActual);
  }

  // 2. La función de limpieza ahora usa la variable local fija
        return () => {
            if (elementoActual) {
                observer.unobserve(elementoActual);
            }
        };
    }, []);

  return (
    <div
      ref={elementoRef}
      className={`animar-base ${animationClass} ${isVisible ? 'mostrar' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default function Card({nombre,img,ir}) {
    const rutaImagen = new URL(`../../assets/services/${img}`, import.meta.url).href
    return (
        <div className="card-s" onClick={ir}>
            <img src={rutaImagen} alt={nombre} className="card-img"/>
            <p className="card-p">{nombre}</p>
        </div>
    );
}

export function CardService({nombre,img,desc}) {
    const rutaImagen = new URL(`../../assets/services/${img}`, import.meta.url).href
    return (
        <div className="div-service">
            <img src={rutaImagen} alt={nombre} className="service-img"/>
            <div>
                <p className="service-name">{nombre}</p>
                <p className="service-desc">{desc}</p>
            </div>
        </div>
    );
}