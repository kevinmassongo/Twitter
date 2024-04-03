import Paragraph from "../paragraph"
import PartenaireList from "./partenairelist"
import Setting from "../setting"
import ShowMore from "../showmore"
import Squid from "./squid"


const Trends = () => {
    const HeaderTrends = () => {
        return (
            <>
                <div className="contentheadertrends">
                    <img src="./src/icons/search.png" alt="" />
                    <Paragraph style="search">Search Twitter</Paragraph>
                </div>
            </>
        )
        
    }
    const BodyTrends = () => {
        return (
            <> 
                <div className="trendinglists">
                    <div className="firstContent">
                        <h1>Trends for you</h1>
                        <Setting />
                    </div>
                    <div className="secondContent">
                        <Squid />
                        <Squid />
                        <Squid />
                        <Squid />
                        <ShowMore />
                    </div>     
                </div>
                <div className="follow-List">
                    <div className="firstContent">
                        <h1>Who to follow</h1>
                    </div>
                    <div className="secondContent">
                        <PartenaireList></PartenaireList>                    
                    </div>
                    <ShowMore />
                </div>
            </>
        )
        
    }
    const FooterTrends = () => {
        return (
                <div className="twitter-footer">
                    Terms of Service Privacy Police Cookie Policy Imprint Ads Info More... @2021 Twitter, Inc.
                </div>  
        )
    }
    return (
        <>
            <div className="trendsDesign">
                <HeaderTrends />
                <BodyTrends />
                <FooterTrends />
            </div>
        </>
        )
}

export default Trends;