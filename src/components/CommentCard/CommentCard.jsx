import './CommentCard.scss'


export default function CommentCard(props) {
    return (
    <>
    <article className="comment__card">
        <div className="comment__image-container">
            {/* <img className="comment_name" src={} alt="" /> */}
        </div>
        <div className="comment__text-container">
            <div className="comment__header-container">
                <h2 className="comment__name">
                    {props.name}
                </h2>
                <p className="comment__date">
                    {props.date}
                </p>
            </div>
            <p className="comment__text">
                    {props.comment}
            </p>
        </div>
    </article>
    
    </>
    )
}