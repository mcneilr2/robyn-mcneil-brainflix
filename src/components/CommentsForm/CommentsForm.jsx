import './CommentsForm.scss'
import axios from "axios"
import Avatar from '../Avatar/Avatar'
import commentIcon from '../../assets/icons/add_comment.svg'

export default function CommentsForm({ activeVideo, setActiveVideo, videoUrl }) {
    const API_KEY = "01c51cce-0156-4b3b-a1da-88af4978af2c"
    const baseUrlPost = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${activeVideo.id}/comments?api_key=${API_KEY}`
    
    const postComment = async (comment) => {
        try {
            const response = await axios.post(baseUrlPost,
                {
                    "name": "Authenticated User",
                    "comment": comment
                }
             )
             const response2 = await axios.get(videoUrl)
             setActiveVideo(response2.data)
        } catch(error) {
            console.error("Error posting comment data", error)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        postComment(event.target.commentInput.value)
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







