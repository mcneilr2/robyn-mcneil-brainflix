import VideoCard from '../VideoCard/VideoCard'

export default function NextVideosList(props) {
    let videosList = props.data.filter(removeCurrentVideo)
    function removeCurrentVideo(video) {
        if (video.id == props.activeVideoId)
            {
                return false
            }
        else {return true}
    }
    console.log(videosList)

    return (
        <section className="next-videos">
            <h3 className ="next-videos__title">
                NEXT VIDEOS
            </h3>
            {videosList.map((video) => (
            <VideoCard
            key = {video.id}
            id = {video.id}
            title = {video.title}
            name = {video.channel}
            image = {video.image}
            />
            ))
            }
        </section>
    )
}