import './CommentsForm.scss'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { useState } from 'react'


export default function CommentsForm() {
    
    const [comment, setComment] = useState("")
    
    return (
    <>
        <form className="comments-form" id="comment-submission__form">
            <div className="comments-form__img-section">
                <Avatar visibleOnMedia="all"/>
            </div>
            <div className="comments-form__input-section">
                <label className="comments-form__input-label">
                    JOIN THE CONVERSATION
                    <textarea className="comments-form__text-area" id="comments-form__text-area" placeholder = "Add a new comment" onChange={(inputField) => setComment(inputField.target.value)}></textarea>
                </label>
                <Button linkPath="/" section="comment-form" text="COMMENT" type="submit" formData = {comment}/>
                </div>
        </form>
    </>
    )
}







