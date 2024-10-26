import data from '../../assets/data/video-details.json'
import './VideoPlayer.scss'


export default function VideoPlayer() {
    return (
        <>
            <video className="video-player" controls poster={data[0].image} src={data[0].video}></video>
        </>
    )
}