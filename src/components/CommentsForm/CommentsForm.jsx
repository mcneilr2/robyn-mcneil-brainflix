import './CommentsForm.scss'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'



export default function CommentsForm(props) {
    function submitHandler(submitData) {
        submitData.preventDefault()
    }
    return (
    <>
        <form className="comments-form" id="comment-submission__form">
            <div className="comments-form__img-section">
                <Avatar screenSize = "mobile" section = "comments"/>
            </div>
            <div className="comments-form__input-section">
                {/* <label className="comments-form__input-label">
                    NAME
                    <input className="comments-form__input" type="text"placeholder="Enter your name" />
                </label> */}
                <label className="comments-form__input-label">
                    JOIN THE CONVERSATION
                    <textarea className="comments-form__text-area" type="textarea" value="Add a new comment"></textarea>
                </label>
                <Button isUpload = "false" />
            </div>
        </form>
    </>
    )
}







