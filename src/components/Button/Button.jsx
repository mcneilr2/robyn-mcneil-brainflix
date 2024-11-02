import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import publishIcon from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({linkPath, section, text}) {
    let icon = uploadIcon
    switch (text) {
        case "UPLOAD":
            icon = uploadIcon;
        case "COMMENT":
            icon = addCommentsIcon;
        case "PUBLISH":
            icon = publishIcon;
        default:
            icon = uploadIcon;
    }

    function buttonSubmitHandler(){
        if(text=="PUBLISH") {
            alert("Thank you for submitting content to BrainFlix!")
        } else {}
    }
    return (
    <>
    <Link to={linkPath} onClick={buttonSubmitHandler} id = {section + "_" + text + "-button"}>
        <div className={section + "__" + text + "-container"}>
                <img className={section +  "__" + text + "-icon"} src={icon}/>
                {text}
        </div>  
    </Link>
      
    </>
    )


}