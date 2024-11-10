import CommentCard from '../CommentCard/CommentCard'
import './CommentsList.scss'

export default function CommentsList({ activeVideo, setActiveVideo, videoUrl }) {
    
    try{
        let comments = activeVideo.comments
        
    return (

        <section className="comments-list">
            {comments.map((comment) => (
            <CommentCard
            key = {comment.id}
            id = {comment.id}
            comment = {comment.comment}
            name = {comment.name}
            date = {new Date(comment.timestamp).toLocaleDateString("en-US")}
            videoUrl = {videoUrl}
            setActiveVideo = {setActiveVideo}
            />
            ))}
        </section>
    )} catch(error) {}
}