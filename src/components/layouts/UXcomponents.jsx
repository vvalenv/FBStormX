export default function Card({nombre,img}) {
    const rutaImagen = new URL(`../../assets/services/${img}`, import.meta.url).href
    return (
        <div className="card-s">
            <img src={rutaImagen} alt={nombre} className="card-img"/>
            <p className="card-p">{nombre}</p>
        </div>
    );
}