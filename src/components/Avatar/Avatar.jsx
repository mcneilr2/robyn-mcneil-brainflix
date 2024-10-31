import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function Avatar({ visibleOnMedia }) {
    return (
        <>
        <div className={'header__avatar-container--'+ visibleOnMedia}>
            <img className={'header__avatar--' + visibleOnMedia} src={avatar} alt="Mohan Muruge side profile">
            </img>      
        </div>
        </>
    )
}