export default function Card({nombre,img}) {
    const rutaImagen = new URL(`../../assets/services/${img}`, import.meta.url).href
    return (
        <div className="card-s">
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