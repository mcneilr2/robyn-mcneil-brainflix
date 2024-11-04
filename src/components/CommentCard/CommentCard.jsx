import './CommentCard.scss'
import { useTimeAgo } from 'react-time-ago'

export default function CommentCard({comment, name, date}) {
    
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
                <p className="video-comment__date">
                    {date}
                </p>
            </div>
            <p className="video-comment__text">
                    {comment}
            </p>
        </div>
    </article>
    </>
    )
}