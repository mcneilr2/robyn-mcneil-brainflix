import CommentCard from '../CommentCard/CommentCard'
import './CommentsList.scss'
export default function CommentsList({ activeVideo }) {
    const currentComments = activeVideo.comments
    return (
        <section className="comments-list">
            {currentComments.map((comment) => (
            <CommentCard
            key = {comment.id}
            comment = {comment.comment}
            name = {comment.name}
            date = {new Date(comment.timestamp).toLocaleDateString("en-US")}
            />
            ))}
        </section>
    )
}