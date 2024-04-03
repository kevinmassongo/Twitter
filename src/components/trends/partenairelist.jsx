import Paragraph from "../paragraph";
import ProfilPicture from "../profilPicture";
const PartenaireList = () => {
    const FirstPartenaire = () => {
        return (
            <div className="partenaireStyle">
            <div>
                <ProfilPicture src="./src/icons/e.png"></ProfilPicture>
            </div>
            <div className="contentNoun">
                <div className="contentOne">
                    <Paragraph>The New York Times</Paragraph>
                    <Paragraph>@nytimes</Paragraph>
                </div>
                <div className="contentTwo">
                    <img src="./src/icons/Verified.png" alt="Verified" />
                </div>
            </div>
            <div>
                <h4>Follow</h4>
            </div>
        </div>
        )
    }
    const SecondPartenaire = () => {
        return (
            <div className="partenaireStyle">
            <div>
                <ProfilPicture src="./src/icons/cnn2.png"></ProfilPicture>
            </div>
            <div className="contentNoun">
                <div className="contentOne">
                    <Paragraph>CNN</Paragraph>
                    <Paragraph>@CNN</Paragraph>
                </div>
                <div className="contentTwo">
                    <img src="./src/icons/Verified.png" alt="Verified" />
                </div>
            </div>
            <div>
                <h4 className="h4">Follow</h4>
            </div>
        </div>
        )
    }

    const ThirdPartenaire = () => {
        return (
            <div className="partenaireStyle">
            <div>
                <ProfilPicture src="./src/icons/twitter2.png"></ProfilPicture>
            </div>
            <div className="contentNoun">
                <div className="contentOne">
                    <Paragraph>Twitter</Paragraph>
                    <Paragraph>@Twitter</Paragraph>
                </div>
                <div className="contentTwo">
                    <img src="./src/icons/Verified.png" alt="Verified" />
                </div>
            </div>
            <div>
                <h4 className="h4">Follow</h4>
            </div>
        </div>
        )
    }
    return (
        
        <>
            <FirstPartenaire></FirstPartenaire>
            <SecondPartenaire></SecondPartenaire>
            <ThirdPartenaire></ThirdPartenaire>
        </>
    )
}
export default PartenaireList;