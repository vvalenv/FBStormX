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
                <h2 className="service-name">{nombre}</h2>
                <p className="service-desc">{desc}</p>
            </div>
        </div>
    );
}

export const FrontPage = ({title, subtitle, desc, subDesc, imgS}) => {
  return (
    <section className="front-page" id={imgS}>
      <div>
        <h1 className="title_main secondary-t">{title}</h1>
        <p className="fp-subtitle">{subtitle}</p>
        <p className="fp-desc">{desc}</p>
        <p className="fp-subdesc">{subDesc}</p>
      </div>
    </section>
  )
}

export const GoogleReviews = () => {
  useEffect(() => {
    // Si la plataforma de Elfsight ya cargó en el documento, fuerza la inicialización del widget
    if (window.ElfsightPlatform) {
      window.ElfsightPlatform.init();
    }
  }, []);

  return (
    <section className="reviews-section">
      <div 
        className="elfsight-app-a6aa61e1-6d26-4190-b0f9-9a46bdfde6bc" 
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export const GoogleMap = () => {
  return (
     <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652376.6677522609!2d-81.59060012870827!3d25.407957536423687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b99f890ae98f%3A0x5bd85f8ddafd854d!2sFB%20stormX!5e0!3m2!1ses-419!2sar!4v1786636465780!5m2!1ses-419!2sar" title='FB stormX' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}