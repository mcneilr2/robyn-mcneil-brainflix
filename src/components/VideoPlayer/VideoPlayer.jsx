import './VideoPlayer.scss'

export default function VideoPlayer({activeVideo}) {
    return (
        <>
            <video className="video-player" controls poster={activeVideo.image}></video>
        </>
    )
}