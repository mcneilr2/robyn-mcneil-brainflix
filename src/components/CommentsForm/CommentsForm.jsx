import './CommentsForm.scss'
import axios from "axios"
import Avatar from '../Avatar/Avatar'
import commentIcon from '../../assets/icons/add_comment.svg'

export default function CommentsForm({ activeVideo, setActiveVideo, videoUrl }) {
    videoUrl = videoUrl + activeVideo.id 
    let commentsUrl = videoUrl + "/comments"

    const postComment = async (comment) => {
        if(!comment){alert("Please enter a comment before submitting")}
        else{try {
            const response = await axios.post(commentsUrl,
                {
                    "name": "Authenticated User",
                    "comment": comment
                }
             )
             const response2 = await axios.get(videoUrl)
             setActiveVideo(response2.data)
        } catch(error) {}}
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        postComment(event.target.commentInput.value)
        document.getElementById("comment-submission__form").reset();
    }
    return (
    <>
        <form className="comments-form" id="comment-submission__form" onSubmit={handleSubmit}>
            <div className="comments-form__img-section">
                <Avatar visibleOnMedia="all"/>
            </div>
            <div className="comments-form__input-section">
                <label className="comments-form__input-label" htmlFor="commentInput">
                    JOIN THE CONVERSATION
                    <textarea className="comments-form__text-area" 
                        id="commentInput" 
                        placeholder = "Add a new comment" >
                    </textarea>
                </label>
                <div className="comments-form__button-container">
                    <img className="comments-form__button-icon"
                    src={commentIcon}
                    alt="comment icon">
                    </img>
                    <button className="comments-form__button" type="submit">
                        COMMENT
                    </button>
                </div>
            </div>
        </form>
    </>
    )
}







