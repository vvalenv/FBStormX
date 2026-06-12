import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export function Boton({iconPhone,title}) {
    return (
        <button className="btn_schedule">
            {iconPhone && <FontAwesomeIcon icon={faPhone} style={{color: "#011337",}} /> }
            {title}
        </button>
    );
}