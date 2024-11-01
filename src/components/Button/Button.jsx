import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({functionality}) {
       
    let isUpload = false
    if(functionality == "upload") {
        isUpload=true
    } else {isUpload=false}


    return (
    <>
    <Link to={isUpload ? "/upload" : "/"} id={isUpload ? "header__upload-button" : "comments__button"}>
        <div className={(isUpload ? "header__upload-container" : "comments__add-container")}>
                <img className={isUpload ? "header__upload-icon" : "comments__add-icon"} src={isUpload ? uploadIcon : addCommentsIcon} alt={isUpload ? "upload icon" : "add comment icon"} />
                {isUpload ? "UPLOAD" : "COMMENTS"}
        </div>  
    </Link>
      
    </>
    )
}