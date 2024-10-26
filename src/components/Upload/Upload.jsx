import uploadIcon from '../../assets/icons/upload.svg';
import './Upload.scss'

export default function Upload() {
    return (
    <>
        <div className="header__upload-container">
            <img className="header__upload-icon" src={uploadIcon} alt="upload logo" />
            <button className="header__upload-button">UPLOAD</button>
        </div>        
    </>
    )
}