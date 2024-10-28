import './CommentCard.scss'


export default function CommentCard(props) {
    
    return (
    <>
    <article className="video-comment__card">
        <div className="video-comment__image-container">
            <img className="video-comment__image" src="" alt="" />
        </div>
        <div className="video-comment__text-container">
            <div className="video-comment__header-container">
                <p className="video-comment__name">
                    {props.name}
                </p>
                <p className="video-comment__date">
                    {props.date}
                </p>
            </div>
            <p className="video-comment__text">
                    {props.comment}
            </p>
        </div>
    </article>
    
    </>
    )
}