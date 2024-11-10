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
    const API_KEY = "01c51cce-0156-4b3b-a1da-88af4978af2c"
    const params = useParams();
    const selectedVideoId = params.videoId ? params.videoId : ""
    const baseUrlVideoDetails = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideoId}?api_key=${API_KEY}`
    const baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`
    
    const [activeVideo, setActiveVideo] = useState([])
   
    const getVideo = async () => {
        try {
            const firstVideoId = (await axios.get(baseUrl)).data[0].id
            const selectedVideoId = params.videoId ? params.videoId : firstVideoId
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideoId}?api_key=${API_KEY}`)
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
            <NextVideosList activeVideo={activeVideo} API_KEY={API_KEY} />
        </section>
    </>
    )
}
