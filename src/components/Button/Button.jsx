import publishIcon from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({linkPath, section, text }) {

    function buttonSubmitHandler(){
        if(text=="PUBLISH") {
            alert("Thank you for submitting content to BrainFlix!")
        }
    }
    return (
    <>
    <Link to={linkPath} onClick={buttonSubmitHandler} id = {section + "_" + text + "-button"}>
        <div className={section + "__" + text + "-container"}>
                <img className={section +  "__" + text + "-icon"} src={icon} alt = "Need to put this in"/>
                <div className={section + "__" + text + "-text-container"}>
                  {text}
                </div>
        </div>  
    </Link>
      
    </>
    )


}