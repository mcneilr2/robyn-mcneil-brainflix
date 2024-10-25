import logo from '../../assets/images/Brainflix-logo.svg'
import './Logo.scss'


export default function Logo() {
    return (
        <>
            <img className="header__logo" src={logo} alt="brainflix logo" />
        </>
    )
}