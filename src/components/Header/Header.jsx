import Logo from '../Logo/Logo'
import SearchBar from '../Search/Search'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Header.scss'


export default function Header() {
    return (
    <>
        <header className = "header">
            <Logo />
            <div className = "header__horizontal-container--large-display">
                <div className="header__horizontal-container">
                    <SearchBar />
                    <Avatar screenSize="mobile"/>
                </div>
                <Button isUpload = "true" />
                <Avatar screenSize="desktop" />
            </div>
        </header>
    </>
    )
}