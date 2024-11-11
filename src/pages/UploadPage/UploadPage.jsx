import uploadImage from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'


function UploadPage() {

  return (
    <>    
    <section className = "upload-video">
    <h1 className = "upload-video__title">Upload Video</h1>
      <form className = "upload-video__form">
        <label className="upload-video__label" id="upload-video__thumbnail-image">
          VIDEO THUMBNAIL
          <img 
          className="upload-video__thumbnail" 
          src={uploadImage} 
          alt="views icon" 
          />
        </label>
        <div className = "upload-video__inputs-section">
          <label className="upload-video__label" htmlFor="videoTitle">
            TITLE YOUR VIDEO 
            <input className="upload-video__title-input" placeholder="Add a title to your video" id="videoTitle" />
          </label>
          <label className="upload-video__label--border-bottom" htmlFor="videoDesc">
            ADD A VIDEO DESCRIPTION
            <textarea className="upload-video__description-input" placeholder = "Add a description to your video" id="videoDesc" rows={5}></textarea>        
          </label>
        </div>
      </form>
          <div className="upload-video__button-section">
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
