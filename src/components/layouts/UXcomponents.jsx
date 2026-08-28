import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faWrench, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faClipboard } from '@fortawesome/free-regular-svg-icons';
import { useFollowURL } from "../../hooks/followURL";


/*ANIMACIONES*/
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

/*CARDS*/ 

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

/*Portada*/

export const FrontPage = ({title, subtitle, desc, subDesc, imgS}) => {
  return (
    <>
      <section className="front-page" id={imgS}>
        <ScrollAnimate animationClass="fade-right">
          <h1 className="title_main">{title}</h1>
          <p className="fp-subtitle">{subtitle}</p>
          <p className="fp-desc">{desc}</p>
          <p className="fp-subdesc">{subDesc}</p>
        </ScrollAnimate>
      </section>
    </>
  )
}

/*Componentes colapsados*/
export const Acordion = ({ title, content }) => {
  return (
    <details className="accordion">
      <summary className="accordion-summary">
        <span className='accordion-title'>{title}</span>
        <span><FontAwesomeIcon icon={faAngleUp} className='arrow' /></span>
      </summary>
      
      <div className="accordion-wrapper">
        <div className="accordion-content">
          <p className='accordion-p'>{content}</p>
        </div>
      </div>
    </details>
  );
};

/*aside*/ 

export const Aside = () => {
  return (
    <aside className="aside_aproach">
      <h3 className="aside-title">Our approach</h3>
      <div className="aside-div">
        <FontAwesomeIcon icon={faClipboard} className="aside-icon" />
        <div>
          <h4>We evaluate</h4>
          <p>We inspect and identify the true source of the problem.</p>
        </div>
      </div>
      <div className="aside-div">
         <FontAwesomeIcon icon={faThumbsUp} className="aside-icon" />
         <div>
          <h4>We recommend</h4>
          <p>We explain your options clearly and honestly.</p>
         </div>
      </div>
      <div className="aside-div">
        <FontAwesomeIcon icon={faWrench} className="aside-icon" />
        <div>
          <h4>We repair</h4>
          <p>We fix it right and often in a single visit.</p>
        </div>
      </div>
    </aside>
  )
}

/*button free consultation*/

export const BtnFreeConsultation = () => {
  const followURL = useFollowURL();
  return (
    <div className="container-btn-book">
      <h3 className="h3-btn-book">Book Your Free Consultation</h3>
      <p className="p-btn-book">We will evaluate the problem, explain your options, and provide a clear estimate.</p>
      <button className="btn_schedule btn_book" onClick={() => followURL('/')}>
        <a><FontAwesomeIcon icon={faAddressBook}/> Schedule Now</a>
      </button>
    </div>
  );
}

/*Google components*/

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.851199115654!2d-80.34039842560075!3d25.808482706672322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b963fcd0d1d3%3A0x4e44ddc097b5d9d7!2s3750%20NW%2087th%20Ave%20Ste%20700%2C%20Doral%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1786754245617!5m2!1ses-419!2sar" title='FB stormX' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}