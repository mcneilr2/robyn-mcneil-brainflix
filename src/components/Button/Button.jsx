import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import './Button.scss'

export default function Button({functionality}) {
    let isUpload = false
    if(functionality == "upload") {
        isUpload=true
    } else {isUpload=false}
    return (
    <>
        <div className={isUpload ? "header__upload-container" : "comments__add-container"}>
            <img className={isUpload ? "header__upload-icon" : "comments__add-icon"} src={isUpload ? uploadIcon : addCommentsIcon} alt={isUpload ? "upload icon" : "add comment icon"} />
            <button className={isUpload ? "header__upload-button" : "comments__add-button"}>{isUpload ? "UPLOAD" : "COMMENT"}</button>
        </div>        
    </>
    )
}