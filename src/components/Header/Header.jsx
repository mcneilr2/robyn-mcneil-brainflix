import logo from '../../assets/images/BrainFlix-logo.svg'
import searchIcon from '../../assets/images/google_material_symbols/search_icon.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/images/google_material_symbols/upload_icon.svg'

export default function Header() {
    return (
    <>
        <header className = "header">
            <img classname="header__logo" src={logo} alt="brainflix logo" />
            <div className="header__search-wrapper">
                <input className="header__input" value="Search"></input>
                <img classname="header__search-icon" src={searchIcon} alt="search icon"></img>
            </div>
            <img classname="header__avatar" src={avatar} alt="Mohan Muruge side profile"></img>
            <div className="header__upload-wrapper">
                <input className="header__upload" value="Upload"></input>
                <img classname="header__upload-icon" src={uploadIcon} alt="upload icon"></img>
            </div>
        </header>
    </>
    )
}