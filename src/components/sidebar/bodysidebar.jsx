import { NavLink } from "react-router-dom";
import Button from "../bouton";

const BodySidebar = () => {
    return (
        <div className="sidebar">
            <div className="home-fill">
                <img src="src/icons/Home-Fill.png" alt="Home-Fill" />
                <li>
                    <NavLink to="/home" className="navlink">Home</NavLink>
                </li>
            </div>
            <div className="explore">
                <img src="src/icons/Explore.png" alt="Explore" />
                <li>
                    <NavLink to="/explore" className="navlink">Explore</NavLink>
                </li>
            </div>
            <div className="notifications">
                <div className="img">
                    <img src="src/images/Group.png" alt="Notification"  className="groups"/>
                    <img src="src/images/Notifications.png" alt="Notification" className="notification"/>
                </div>
                <li>
                    <NavLink to="/notifications" className="navlink">Notifications</NavLink>
                </li>
            </div>
            <div className="message">
                <img src="src/icons/Messages.png" alt="Message" />
                <li>
                    <NavLink to="/messages" className="navlink">Messages</NavLink>
                </li>
            </div>
            <div className="bookmarks">
                <img src="src/icons/Bookmarks.png" alt="Bookmarks" />
                <li>
                    <NavLink to="/bookmarks" className="navlink">Bookmarks</NavLink>
                </li>
            </div>
            <div className="lists">
                <img src="src/icons/Lists.png" alt="lists" />
                <li>
                    <NavLink to="/lists" className="navlink">Lists</NavLink>
                </li>
            </div>
            <div className="profil">
                <img src="src/icons/Profile.png" alt="profil" />
                <li>
                    <NavLink to="/profile" className="navlink">Profile</NavLink>
                </li>
            </div>
            <div className="more">
                <img src="src/icons/More.png" alt="more" />
                <li>
                    <NavLink to="/more" className="navlink">More</NavLink>
                </li>
            </div>
            <div className="buttonMore">
                <Button style="buttons">Tweet</Button>
            </div>
        </div>
    )
}

export default BodySidebar;