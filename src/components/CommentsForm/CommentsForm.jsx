import './CommentsForm.scss'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'



export default function CommentsForm() {
    function submitHandler(submitData) {
        submitData.preventDefault()
    }
    return (
    <>
        <form className="comments-form" id="comment-submission__form">
            <div className="comments-form__img-section">
                <Avatar visibleOnMedia="all"/>
            </div>
            <div className="comments-form__input-section">
                <label className="comments-form__input-label">
                    JOIN THE CONVERSATION
                    <textarea className="comments-form__text-area" type="textarea" placeholder = "Add a new comment"></textarea>
                </label>
                <Button isUpload = "false" />
            </div>
        </form>
    </>
    )
}







