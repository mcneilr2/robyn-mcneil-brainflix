import uploadImage from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'


function UploadPage() {
  
  let navigate = useNavigate();


  return (
    <>    
    <section className = "upload-video">
      <form className = "upload-video__form">
        <h1 className = "upload-video__title">Upload Video</h1>
        <label className="upload-video__label">
          VIDEO THUMBNAIL
          <img 
          className="upload-video__thumbnail" 
          src={uploadImage} 
          alt="views icon" 
          />
        </label>
        <label className="upload-video__label">
          TITLE YOUR VIDEO 
          <input className="upload-video__title-input" placeholder="Add a title to your video" />
        </label>
        <label className="upload-video__label--border-bottom">
          ADD A VIDEO DESCRIPTION
          <textarea className="upload-video__description-input" type="textarea" placeholder = "Add a description to your video"></textarea>        
        </label>
          </form>
          <div className="upload-video__button-section">
            <Button linkPath="/" section="upload" text="PUBLISH" />
            <div className="upload-video__cancel-container">
              <Link className="upload-video__cancel-link" to={`/`}>
                CANCEL
              </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default UploadPage
