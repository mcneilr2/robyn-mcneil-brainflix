import { Link } from "react-router-dom"
import logo from '../../assets/images/Brainflix-logo.svg'
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import Avatar from '../Avatar/Avatar'
import './Header.scss'

export default function Header() {
    return (
        <header className = "header">
        <Link to="/" className="header__link-logo">
            <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
            <div className = "header__horizontal-container--row-display">
                    <div className="header__horizontal-container">
                        <div className="header__search-container">
                            <img src={searchIcon} alt="search icon" />                                 
                            <input className="header__search-input" placeholder="Search"></input>
                        </div> 
                            <Avatar visibleOnMedia="small"/>
                    </div>
                    <Link to="/upload" className="header__link-upload">
                    <div className="header__upload-container">
                        <img className="header__upload-icon"
                        src={uploadIcon}
                        alt="upload icon">
                        </img>
                            <button className="header__upload-button">
                                UPLOAD
                            </button>
                    </div>
                    </Link>
                    <Avatar visibleOnMedia="large" />
                </div>
            </header>
    )
}