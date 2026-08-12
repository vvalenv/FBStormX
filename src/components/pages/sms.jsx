import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { SmsTerms } from "../layouts/sms-terms";

export function Sms() {
    return (
        <div className="body_init">
            <>
                <NavBar />
                <SmsTerms />
                <Footer />
            </>
        </div>
    )
}