import './Search.scss'
import searchIcon from '../../assets/icons/search.svg';

export default function SearchBar() {
    return (
        <>
        <div className="header__search-container">
            <img src={searchIcon} alt="search icon" />           
            <input className="header__search-input" defaultValue="Search"></input>
        </div>        
        </>
    )
}