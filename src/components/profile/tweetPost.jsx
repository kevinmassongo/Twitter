import { Link } from "react-router-dom";
import CommentAndUncomment from "../timeline/LikeAndDislike/comment&uncomment";
import PostAndDeposter from "../timeline/LikeAndDislike/post&deposter";
import LikeAndDislike from "../timeline/LikeAndDislike/like&dislike";

function TweetPost({post}) {

    return (
        <>
            <div className="tweet-avatar">
                <Link to={post.linkAvatar}><img src={post.imageAvatar}/></Link>
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    {post.TweetTitle} <img src={post.TweetLogo} alt="" />
                    <div className="tweet-title-details">
                        <span>{post.TweetTitleText}</span>
                    </div>
                </div>
                <div className="tweet-text">
                    {post.TweetText}
                </div>
                <div className="tweet-image">
                    <img src={post.image} />
                </div>
                <div className="tweet-content">
                    <div className="tweet-actions-post">
                        <div className="container firstContainer">
                            <CommentAndUncomment post={post}/>
                        </div>
                        <div className="container secondContainer">
                            <PostAndDeposter post={post}/>
                        </div>
                        <div className="container thirdContainer">
                            <LikeAndDislike post={post}/>
                        </div>
                        <div className="container fourthContainer">
                            <img src={post.FourthTweetIcon} alt="" className="icon" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }

export default TweetPost;