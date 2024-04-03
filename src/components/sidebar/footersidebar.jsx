import { Link } from "react-router-dom"
import Paragraph from "../paragraph"
import ProfilPicture from "../profilPicture"

const FooterSidebar = () => {
    const Noun = () => {
        return (
            <div className="contentNoun">
                <div className="contentOne">
                    <Paragraph>Bradley Ortiz</Paragraph>
                    <Paragraph>@bradley</Paragraph>
                </div>
                <div className="contentTwo">
                    <img src="src/icons/Private.png" alt="Private" />
                </div>
            </div>
        )
    }
    const IconMore = () => {
        return (
            <div>
                <img src="src/icons/More2.png" alt="More-2" />
            </div>
        )
    }
    return (
        <div className="contentFooter">
            <Link to="/profil"><ProfilPicture style="avatar2" src="./src/images/profile-photo.png"/></Link>
            <Noun/>
            <IconMore/>
        </div>
    )
}

export default FooterSidebar;