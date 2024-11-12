import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./UploadPage.scss";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function UploadPage() {
  const baseUrl = `http://localhost:5050/videos`
  const navigate = useNavigate();

  const postVideo = async (videoTitle, videoDesc) => {
      try {
          console.log(videoTitle, videoDesc, baseUrl)
          const response = await axios.post(baseUrl,
              {
                  "title": videoTitle,
                  "description": videoDesc
              }
           ); 
      } catch(error) {console.log(error)}
  }
  const handleSubmit = async (event) => {
      event.preventDefault();
      postVideo(event.target.videoTitle.value, event.target.videoDesc.value);
      alert("Thank you for posting " + event.target.videoTitle.value + " to Brainflix!");
      navigate('/');
  }
  
  return (
    <>
      <section className="upload-video">
        <h1 className="upload-video__title">Upload Video</h1>
        <form className="upload-video__form" onSubmit={handleSubmit}>
          <div className="upload-video__upload-section">
            <label
              className="upload-video__label"
              id="upload-video__thumbnail-image"
            >
              VIDEO THUMBNAIL
              <img
                className="upload-video__thumbnail"
                src={uploadImage}
                alt="views icon"
              />
            </label>
            <div className="upload-video__inputs-section">
              <label className="upload-video__label" htmlFor="videoTitle">
                TITLE YOUR VIDEO
                <input
                  className="upload-video__title-input"
                  placeholder="Add a title to your video"
                  id="videoTitle"
                />
              </label>
              <label
                className="upload-video__label--border-bottom"
                htmlFor="videoDesc"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="upload-video__description-input"
                  placeholder="Add a description to your video"
                  id="videoDesc"
                  rows={5}
                ></textarea>
              </label>
            </div>
          </div>
          <div className="user-interactions__container">
            <div className="publish__button-container">
              <img
                className="publish__button-icon"
                src={publishIcon}
                alt="publish icon"
              ></img>
              <button className="publish__button" type="submit">
                PUBLISH
              </button>
            </div>
            <div className="upload-video__cancel-container">
              <Link className="upload-video__cancel-link" to={`/`}>
                CANCEL
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadPage;
