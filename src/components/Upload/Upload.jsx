import uploadIcon from '../../assets/images/google_material_symbols/upload_icon.svg'
import './Upload.scss'
export default function UploadBar() {
    return (
        <>
            <div className="header__container">
                <img className="header__icon" src={uploadIcon} alt="upload icon"></img>
                <input className="header__upload" defaultValue="UPLOAD"></input>
            </div>        
        </>
    )
}