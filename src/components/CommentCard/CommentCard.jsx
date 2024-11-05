import './CommentCard.scss'
import TimeAgo from 'react-timeago'
import deleteIcon from '../../assets/icons/delete.svg'

export default function CommentCard({id, comment, name, date}) {
    let userAuthModifier = ""
    if(name=="Authenticated User"){
        userAuthModifier = "--visible"
    } else {}

    return (
    <>
    <article className="video-comment__card">
        <div className="video-comment__image-container">
            <img className="video-comment__image" />
        </div>
        <div className="video-comment__text-container">
            <div className="video-comment__header-container">
                <p className="video-comment__name">
                    {name}
                </p>
                <TimeAgo className="video-comment__date" date={date}/>
            </div>
            <div className="video-comment__details-section">
                <p className="video-comment__text">
                        {comment}
                </p>
                <img className={"video-comment__delete" + userAuthModifier}
                src={deleteIcon} /> 
            </div>
        </div>
    </article>
    </>
    )
}