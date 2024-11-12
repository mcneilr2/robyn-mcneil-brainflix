import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import axios from "axios"
import './HomePage.scss'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import CommentsForm from '../../components/CommentsForm/CommentsForm'
import CommentsList from '../../components/CommentsList/CommentsList'
import NextVideosList from '../../components/NextVideosList/NextVideoList'


export default function HomePage() {
    const params = useParams();
    const selectedVideoId = params.videoId ? params.videoId : ""
    const baseUrlVideoDetails = `http://localhost:5050/videos/${selectedVideoId}`
    const baseUrl = `http://localhost:5050/videos/`
    
    const [activeVideo, setActiveVideo] = useState([])
   
    const getVideo = async () => {
        try {
            const firstVideoId = (await axios.get(baseUrl)).data[0].id
            const selectedVideoId = params.videoId ? params.videoId : firstVideoId
            const response = await axios.get(`http://localhost:5050/videos/${selectedVideoId}`)
            setActiveVideo(response.data)
        } catch(error) {
            console.error("Error fetching video data", error)
        }
    }

    useEffect(() => {
        getVideo();
    }, [selectedVideoId]);


    return (
    <>
        <VideoPlayer activeVideo = {activeVideo}  />
        <section className = "main-content">
            <article className = "current-video__section">
                <VideoDetails activeVideo={activeVideo} />
                <CommentsForm activeVideo={activeVideo} setActiveVideo={setActiveVideo} videoUrl={baseUrlVideoDetails}/>
                <CommentsList activeVideo={activeVideo} setActiveVideo={setActiveVideo} videoUrl={baseUrlVideoDetails}  />
            </article>
            <NextVideosList activeVideo={activeVideo} baseUrl={baseUrl}/>
        </section>
    </>
    )
}
