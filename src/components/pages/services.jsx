import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainS } from "../layouts/main-service";

export function Services() {
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainS />
                <Footer />
            </>
        </div>
    )
}