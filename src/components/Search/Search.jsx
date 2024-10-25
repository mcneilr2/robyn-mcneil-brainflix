import searchIcon from '../../assets/images/google_material_symbols/search_icon.svg';
import './Search.scss'

export default function SearchBar() {
    return (
        <>
            <div className="header__container">
                <img className="header__icon" src={searchIcon} alt="search icon"></img>
                <input className="header__search" defaultValue="Search"></input>
            </div>        
        </>
    )
}