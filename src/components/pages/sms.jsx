import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { SmsTerms } from "../layouts/sms-terms";

export function Sms() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>SMS Terms | FBStormX</title>
                    <meta name="description" content="Learn about our SMS terms and conditions for using our text messaging services." />
                    <link rel="canonical" href="https://fbstormx.com/sms-terms" />
                </Helmet>
                <NavBar />
                <SmsTerms />
                <Footer />
            </>
        </div>
    )
}