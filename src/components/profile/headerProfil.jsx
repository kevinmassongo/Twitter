import { Link } from "react-router-dom";
import Paragraph from "../paragraph";

function HeaderProfil() {
    return (
        <>
            <div className="header-profile">
                <div className="arrow-left">
                    <Link to="/home"><span>&#8592;</span></Link>
                </div>
                <div className="container">
                    <Paragraph style="name-profile">Bradley Ortiz</Paragraph>
                    <Paragraph>3 Posts</Paragraph>
                </div>
            </div>
        </>
    )
}

export default HeaderProfil;