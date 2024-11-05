import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import publishIcon from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({linkPath, section, text, comment, postFunction}) {
    let icon = ""
    if (text=="UPLOAD") {
        icon = uploadIcon
    } else if(text == "COMMENT"){
        icon = addCommentsIcon
    } else if(text == "PUBLISH"){
        icon = publishIcon
    } else { console.log("Error") }

    function buttonSubmitHandler(){
        if(text=="PUBLISH") {
            alert("Thank you for submitting content to BrainFlix!")
        } else if (text=="COMMENT") {
            postFunction(comment)
        }
    }
    return (
    <>
    <Link to={linkPath} onClick={buttonSubmitHandler} id = {section + "_" + text + "-button"}>
        <div className={section + "__" + text + "-container"}>
                <img className={section +  "__" + text + "-icon"} src={icon}/>
                <div className={section + "__" + text + "-text-container"}>
                  {text}
                </div>
        </div>  
    </Link>
      
    </>
    )


}