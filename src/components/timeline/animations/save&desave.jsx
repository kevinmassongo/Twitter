import { faSave, faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SaveAndDesave() {
    return (
        <>
            <div className="box-save">
                <div className="save">
                    <FontAwesomeIcon icon={faSave} style={{ color: 'rgb(47,51,54)', fontSize: '25px' }} onMouseOver={(e) => e.target.style.color = 'rgb(30, 143, 255)'} onMouseOut={(e) => e.target.style.color = 'rgb(47,51,54)'} />
                </div>
            </div>
        </>
    )
}

export default SaveAndDesave