import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Boton({contact,iconPhone,title}) {
    return (
        <button className="btn_schedule" onClick={contact}>
            {iconPhone && <FontAwesomeIcon icon={faPhone} className='icon-phone'/> }
            {title}
        </button>
    );
}