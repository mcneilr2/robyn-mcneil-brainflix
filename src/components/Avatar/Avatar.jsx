import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function Avatar(props) {
    let modifier = ""
    if(props.section == "comments") {
        modifier="comments"
    } else {
        modifier=props.screenSize
    }   
    return (
        <>
        <div className={'header__avatar-container--' + modifier}>
            <img className={'header__avatar--' + modifier} src={avatar} alt="Mohan Muruge side profile">
            </img>      
        </div>
        </>
    )
}