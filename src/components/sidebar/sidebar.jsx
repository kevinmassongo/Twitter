import BodySidebar from "./bodysidebar";
import FooterSidebar from "./footersidebar";
import HeaderSidebar from "./headersidebar";

const Sidebar = () => {    
    return (
            <>
            <div className="contentSidebar">
                <HeaderSidebar/>
                <BodySidebar/>
            </div>
                <FooterSidebar/>
            </>
        )
}

export default Sidebar;