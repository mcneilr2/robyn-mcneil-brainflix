import searchIcon from '../../assets/images/google_material_symbols/search_icon.svg'

export default function SearchBar() {
    return (
        <>
            <div className="header__search-wrapper">
                <input className="header__input" value="Search"></input>
                <img classname="header__search-icon" src={searchIcon} alt="search icon"></img>
            </div>        
        </>
    )
}