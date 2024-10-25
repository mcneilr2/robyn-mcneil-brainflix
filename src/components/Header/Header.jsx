import Upload from '../Upload/Upload'
import Logo from '../Logo/Logo'
import SearchBar from '../Search/Search'
import Avatar from '../Avatar/Avatar'
import './Header.scss'


export default function Header() {
    return (
    <>
        <header className = "header">
            <Logo />
            <div className="header__horizontal-container">
                <SearchBar />
                <Avatar />
            </div>
            <Upload />
        </header>
    </>
    )
}