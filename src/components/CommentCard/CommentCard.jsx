import './CommentCard.scss'
import deleteIcon from '../../assets/icons/delete.svg'
import axios from 'axios'


export default function CommentCard({id, comment, name, date, videoUrl, setActiveVideo, activeVideo }) {
    let userAuthModifier = ""
    if(name=="Authenticated User"){
        userAuthModifier = "--visible"
    } else {}

    const deleteComment = async (event) => {
        try {
            event.preventDefault()
            const response = await axios.delete(videoUrl + activeVideo.id + "/comments/" + id)
            const response2 = await axios.get(videoUrl + activeVideo.id)
            setActiveVideo(response2.data)
        } catch(error) {
            console.error("Error posting comment data", error)
        }
    }



    return (
    <>
    <article className="video-comment__card">
        <div className="video-comment__image-container">
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
                alt="delete icon"
                /> 
            </div>
        </div>
    </article>
    </>
    )
}