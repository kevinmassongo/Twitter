import { faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function CommentAndUncomment({post}) {

    const [reply, setReply] = useState(post.repliesCount),
        [isReply, setIsReply] = useState(false)

    const handleClick = () => {
        setReply(reply + (isReply ? -1 : 1))
        setIsReply(!isReply)
    }
    return (
        <>
            <div className="box-reply">
                <div className="reply">
                    <FontAwesomeIcon icon={faComment} style={{ color: isReply ? 'rgb(30,144,255)' : '', filter: isReply ? '' : 'drop-shadow(0 0 1px rgb(47,51,54))', fontSize: '25px' }} onClick={handleClick} onMouseOver={(e) => e.target.style.filter = 'rgb(30,144,255)'} onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(47,51,54))'} />
                </div>
                <span className="textIcon">{reply}</span>
            </div>
        </>
    )
}
export default CommentAndUncomment