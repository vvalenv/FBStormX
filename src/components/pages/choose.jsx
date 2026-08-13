import { NavBar } from "../layouts/header";
import { ChooseUs } from "../layouts/main-w";
import { Footer } from "../layouts/footer";

export function WhyChooseUs() {
    return(
        <div className="body_init">
            <>
                <NavBar />
                <ChooseUs />
                <Footer />
            </>
        </div>
    )
}