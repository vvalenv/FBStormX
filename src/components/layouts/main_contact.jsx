import { useState } from 'react';
export function Contact(utmSource) {
    
    const [origen] = useState(() => {
        // 1. Validamos si estamos en el navegador (para evitar errores en Vercel)
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return 'Directo / Desconocido';
        }
        if (utmSource) {
            console.log("utmSource")
            return utmSource;
        }   
        if (document.referrer) {
            if (document.referrer.includes('instagram.com')) return 'instagram_bio';
            if (document.referrer.includes('facebook.com')) return 'facebook_organic';
        }

        return 'Directo / Desconocido';
    });

    return (
    <div className="main-contact">
        <h1 className="title_main secondary-t">Schedule your free evaluation</h1>
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D3h00000679PE" method="POST" className="form-contact">
            <input type="hidden" name="oid" value="00D3h00000679PE" />
            <input type="hidden" name="retURL" value="https://fb-storm-x.vercel.app/" />
            <input type="hidden" id="lead_source" name="lead_source" value="Digital Marketing" />
            <input type="hidden" id="00N3h00000G85zg" name="00N3h00000G85zg" value={origen} />

            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input  id="first_name" maxlength="40" name="first_name" size="20" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input  id="last_name" maxlength="80" name="last_name" size="20" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input  id="phone" maxlength="40" name="phone" size="20" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input  id="email" maxlength="80" name="email" size="20" type="text" required />
            </div>
            <div className="form-group">
                <label for="zip">Zip</label>
                <input  id="zip" maxlength="20" name="zip" size="20" type="text" />
            </div>
            <div className="form-group d-textarea">
                 <label htmlFor="description">Service needed</label>
                 <textarea id="description" name="description"></textarea>
            </div>
            <input type="submit" name="submit" className="submit-contact"/>
        </form>
    </div>   
    )
}
//}