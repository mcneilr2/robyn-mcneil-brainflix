import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import './Button.scss'

export default function Button(props) {
    let isUpload = true
    if(props.isUpload == "false") {isUpload=false} else {isUpload=true}
    return (
    <>
        <div className={isUpload ? "header__upload-container" : "comments__add-container"}>
            <img className={isUpload ? "header__upload-icon" : "comments__add-icon"} src={isUpload ? uploadIcon : addCommentsIcon} alt={isUpload ? "upload icon" : "add comment icon"} />
            <button className={isUpload ? "header__upload-button" : "comments__add-button"}>COMMENT</button>
        </div>        
    </>
    )
}