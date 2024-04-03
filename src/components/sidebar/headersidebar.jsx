import { Link } from "react-router-dom";

const HeaderSidebar = () => {
    return (
        <>
            <div className="headsidebar">
                <Link to="/"><img src="./src/icons/Twitter.png" alt="" className="headersidebar"/></Link>
            </div>
        </>
    )    
}

export default HeaderSidebar;