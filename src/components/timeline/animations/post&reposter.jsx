import { faRetweet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import UserContext from "../../context/UserContext";

function PostAndDeposter({post}) {
    const [repost, setRepost] = useState(post.retweetCount),
        [isRepost, setIsRepost] = useState(false)

    const handleClick = () => {
        setRepost(repost + (isRepost ? -1 : 1))
        setIsRepost(!isRepost)
    }
    return (
        <>
            <div className="box-repost">
                <div className="repost">
                    <FontAwesomeIcon icon={faRetweet} style={{ color: isRepost ? 'rgb(60,179,113)' : '', filter: isRepost ? '' : 'drop-shadow(0 0 1px rgb(47,51,54))', fontSize: '25px' }} onClick={handleClick} onMouseOver={(e) => e.target.style.filter = 'rgb(60,179,113)'} onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(47,51,54))'} />
                </div>
                <span className="textIcon">{repost}</span>
            </div>
        </>
    )
}
export default PostAndDeposter