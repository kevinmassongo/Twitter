import Paragraph from "../paragraph";

const Squid = () => {
    return (
            <>
                <div className="quidContent">
                    <div className="quidContentOnePart">
                        <Paragraph style="squid">Trending in Turkey</Paragraph>
                        <h4>#SQUID</h4>
                        <Paragraph style="squid">2,066 Tweets</Paragraph>
                    </div>
                    <div className="quidContentOnePart">
                        <img src="./src/icons/More-2.png" alt="More" />
                    </div>
                </div>
            </>
        )
}

export default Squid;