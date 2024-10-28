import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'


import './VideoDetails.scss'


export default function VideoDetails(props) {
    const activeVideoTitle = props.data.find(checkCurrentVideo).title;
    const activeVideoChannel = props.data.find(checkCurrentVideo).channel;
    const activeVideoViews = props.data.find(checkCurrentVideo).views;
    const activeVideoTimestamp = props.data.find(checkCurrentVideo).timestamp;
    const activeVideoDate = new Date(activeVideoTimestamp)
    const activeVideoDateString = activeVideoDate.toLocaleDateString("en-US")
    const activeVideoLikes = props.data.find(checkCurrentVideo).likes;
    const activeVideoDecription = props.data.find(checkCurrentVideo).description;
    const activeVideoLikeCount = props.data.find(checkCurrentVideo).comments.length;
    function checkCurrentVideo(video) {
        return video.id == props.activeVideoId
    }
    return (
    <>
        <h1 className = "current-video__title">
        {activeVideoTitle}
        </h1>
        <section className="current-video__details">
            <div className="current-video__name-date">
                <p className="current-video__channel">
                    {"By " + activeVideoChannel}
                </p>
                <p className="current-video__date">
                    {activeVideoDateString}
                </p>
            </div>
            <div className="current-video__interactions-section">
                <div className="current-video__views-container">
                    <img 
                    className="current-video__interactions-icon" 
                    src={viewsIcon} 
                    alt="views icon" 
                    />
                    <p className="current-video__views">
                        {activeVideoViews}
                    </p>
                </div>
                <div className="current-video__likes-container">
                    <img 
                    className="current-video__interactions-icon"
                    src={likesIcon} 
                    alt="likes icon" 
                    />
                    <p className="current-video__likes">
                        {activeVideoLikes}
                    </p>
                </div>
            </div>
        </section>
        <p className="current-video__description">
            {activeVideoDecription}
        </p>
        <p className="current-video__like-count">
            {activeVideoLikeCount + " Comments"}
        </p>
    </>
    )
}