import { CardService } from "./UXcomponents";

export function MainS() {
    return (
        <main className="main-s">
            <h2 className="title_main secondary-t">Affordable solutions <span>for your home</span></h2>
            <p className="subtitle_service">One call. Our trusted team. We handle the small tasks that make a big difference.</p>
            <div className="div-services">
                <CardService nombre="Roof services" img="roof.png" desc="Fix leaks,
                    replace damaged shingles and keep your roof in top shape." /> 
                <CardService nombre="Door services" img="door2.jpg" desc="Doors that stick,
                 don't close, or need adjustments." />
                <CardService nombre="Window services" img="window.png" desc="Repairs and adjustments
                 to keep your windows working properly." />
                <CardService nombre="Caulking services" img="caulking.png" desc="Seal gaps and cracks
                 to prevent leaks and water damage." />
                <CardService nombre="Junk removal" img="junk.png" desc="We remove unwanted items
                 and clutter to free up your space." /> 
            </div>
        </main>
    )
}