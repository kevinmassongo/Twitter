import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LikeAndDislike({post}) {

    const [like, setLike] = useState(post.favoriteCount),
        [isLiked, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLiked ? -1 : 1))
        setIsLike(!isLiked)
    }

    return (
        <>
            <div className="box-like">
                <div className="like">
                    <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? 'red' : 'black', filter: isLiked ? '' : 'drop-shadow(0 0 1px rgb(47,51,54))', fontSize: '25px' }} onClick={handleClick} onMouseOver={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(255,0,0))'} onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(47,51,54))'} />
                </div>
                <span className="textIcon">{like}</span>
            </div>
        </>
    )
}
export default LikeAndDislike