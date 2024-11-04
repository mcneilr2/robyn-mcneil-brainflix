import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/images/Brainflix-logo.svg'
import searchIcon from '../../assets/icons/search.svg';
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Header.scss'

export default function Header() {
    function onSubmitFunction(event){
        event.preventDefault()
        const navigate = useNavigate()
        navigate('/upload')
        console.log("test")
    }
    return (
        <header className = "header">
        <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
            <div className = "header__horizontal-container--large-display">
                    <div className="header__horizontal-container" on>
                        <div className="header__search-container">
                            <img src={searchIcon} alt="search icon" />                                 
                            <input className="header__search-input" placeholder="Search"></input>
                        </div> 
                            <Avatar visibleOnMedia="small"/>
                    </div>
                    <Button linkPath="/upload" section="header" text="UPLOAD" />
                    <Avatar visibleOnMedia="large" />
                </div>
            </header>
    )
}