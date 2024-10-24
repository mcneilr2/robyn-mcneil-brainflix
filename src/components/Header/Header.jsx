import UploadBar from './Upload'
import Logo from './Logo'
import SearchBar from './Search'
import Avatar from './Avatar'


export default function Header() {
    return (
    <>
        <header className = "header">
            <Logo />
            <SearchBar />
            <Avatar />
            <Upload />
        </header>
    </>
    )
}