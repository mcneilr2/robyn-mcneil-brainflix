import CommentCard from '../CommentCard/CommentCard'

export default function CommentsList(props) {
    const currentComments = props.data.find(checkCurrentVideo).comments;
    function checkCurrentVideo(video) {
        return video.id == props.activeVideoId
    }
    return (
        <section className="card-list">
            {currentComments.map((comment) => (
            <CommentCard
            key = {comment.id}
            content = {comment.comment}
            name = {comment.name}
            date = {new Date(comment.timestamp).toLocaleDateString("en-US")}
            />
            ))}
        </section>
    )
}