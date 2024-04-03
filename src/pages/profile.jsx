import HeaderProfil from "../components/profile/headerProfil";
import TweetEditorProfile from "../components/profile/tweetEditorProfile";
import Sidebar from "../components/sidebar/sidebar";
import Tweets from "../components/timeline/tweets";
import Trends from "../components/trends/trends";

function Profile() {
  return (
    <>
      <main className='left-sidebar'>
        <Sidebar />
      </main>
      <main className="timeline-profile">
        <HeaderProfil />
        <TweetEditorProfile />
        <Tweets />
      </main>
      <main className="right-sidebar">
        <Trends />
      </main>

    </>
  )
}
export default Profile;