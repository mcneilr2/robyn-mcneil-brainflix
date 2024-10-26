import avatar from '../../assets/images/Mohan-muruge.jpg'
import './Avatar.scss'

export default function Avatar(props) {
    console.log(props)
    return (
        <>
        <div className={'header__avatar-container--' + props.screenSize}>
            <img className={'header__avatar--' + props.screenSize} src={avatar} alt="Mohan Muruge side profile">
            </img>      
        </div>
        </>
    )
}