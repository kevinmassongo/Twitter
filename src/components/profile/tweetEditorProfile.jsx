import Button from "../bouton"
import Paragraph from "../paragraph"
import ProfilPicture from "../profilPicture"

function TweetEditorProfile() {
    return (
        <>
            <div className="tweet-editor-profile-container">
                <div className="empty-container"></div>
                <div className="container">
                    <div>
                        <ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture>
                        <div className="box">
                            <Paragraph style="name">Bradley Ortiz</Paragraph>
                            <Paragraph>@bradley</Paragraph>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <Button style="buttons">Edit profile</Button>
                    </div>
                </div>
                <Paragraph style="biographie">Je suis un concepteur de sites web avec une expérience depuis plus d'une année, mon expertise est de créer et de concevoir des sites web, frontend et back-end</Paragraph>
            </div>
        </>
    )
}
export default TweetEditorProfile