import './CommentCard.scss'
import deleteIcon from '../../assets/icons/delete.svg'
import axios from 'axios'


export default function CommentCard({id, comment, name, date, videoUrl}) {
    let userAuthModifier = ""
    if(name=="Authenticated User"){
        userAuthModifier = "--visible"
    } else {}

    const urlSliceIndex = videoUrl.indexOf("api_key")-1
    const urlBeginning = videoUrl.slice(0, urlSliceIndex)
    const keyString = videoUrl.slice(urlSliceIndex)

    const deleteComment = async () => {
        try {
            const response = await axios.delete
            (urlBeginning + '/comments/' + id + keyString)
        } catch(error) {
            console.error("Error posting comment data", error)
        }
    }
    return (
    <>
    <article className="video-comment__card">
        <div className="video-comment__image-container">
            <img className="video-comment__image"  />
        </div>
        <div className="video-comment__text-container">
            <div className="video-comment__header-container">
                <p className="video-comment__name">
                    {name}
                </p>
                <p className="video-comment__date">
                    {date}
                </p>
            </div>
            <div className="video-comment__details-section">
                <p className="video-comment__text">
                        {comment}
                </p>
                <img className={"video-comment__delete" + userAuthModifier}
                src={deleteIcon}
                onClick = {deleteComment}
                /> 
            </div>
        </div>
    </article>
    </>
    )
}