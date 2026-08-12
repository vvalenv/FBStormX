import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { PrivacyPage } from "../layouts/privacy";

export function Privacy() {
    return (
        <div className="body_init">
            <>
                <NavBar />
                <PrivacyPage />
                <Footer />
            </>
        </div>
    )
}