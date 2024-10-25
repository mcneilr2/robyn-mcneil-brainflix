import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function Avatar() {
    return (
        <>
        <div className="header__avatar-container">
            <img className="header__avatar" src={avatar} alt="Mohan Muruge side profile">
            </img>      
        </div>
        </>
    )
}