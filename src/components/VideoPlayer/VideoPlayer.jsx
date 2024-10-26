import './VideoPlayer.scss'

export default function VideoPlayer(props) {
    function checkCurrentVideo(video) {
        return video.id == props.activeVideoId
    }
    const activeVideoImageUrl = props.data.find(checkCurrentVideo).image;
    return (
        <>
            <video className="video-player" controls poster={activeVideoImageUrl}></video>
        </>
    )
}