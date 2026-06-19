import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { Contact } from "../layouts/main_contact";

export function ContactM(source) {
    return (
        <div className="body_init">
            <>
                <NavBar />
                <Contact utmSource={source}/>
                <Footer />
            </>
        </div>
    )
}