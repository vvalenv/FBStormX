import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { Main } from "../layouts/main_init";

export function Init() {
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