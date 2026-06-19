import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { Main } from "../layouts/main_init";

export function Init() {
    const inicializarRastreo = () => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        const utmSource = params.get('utm_source');
        const hasFbclid = params.has('fbclid');
        
        let fuente = '';

        if (utmSource) fuente = utmSource;
        else if (hasFbclid) fuente = 'meta_organic';
        else if (document.referrer) {
            if (document.referrer.includes('instagram.com')) fuente = 'instagram_bio';
            if (document.referrer.includes('facebook.com')) fuente = 'facebook_organic';
        }

        // Si descubrimos que viene de una red social, lo guardamos bajo la clave 'origen_marketing'
        if (fuente) {
            localStorage.setItem('origen_marketing', fuente);
        }
    };
    inicializarRastreo();
    return (
        <div className="body_init">
            <>
                <NavBar />
                <Main />
                <Footer />
            </>
        </div>
    )
}