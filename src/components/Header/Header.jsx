import logo from '../../assets/images/Brainflix-logo.svg'
import searchIcon from '../../assets/icons/search.svg';
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Header.scss'


export default function Header() {
    return (
    <>
        <header className = "header">
        <img className="header__logo" src={logo} alt="brainflix logo" />
        <div className = "header__horizontal-container--large-display">
                <div className="header__horizontal-container">
                    <div className="header__search-container">
                        <img src={searchIcon} alt="search icon" />           
                        <input className="header__search-input" defaultValue="Search"></input>
                    </div> 
                        <Avatar screenSize="mobile"/>
                    </div>
                <Button isUpload = "true" />
                <Avatar screenSize="desktop" />
            </div>
        </header>
    </>
    )
}