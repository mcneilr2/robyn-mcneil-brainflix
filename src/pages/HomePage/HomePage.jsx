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
    const selectedVideoId = params.videoId ? params.videoId : "84e96018-4022-434e-80bf-000ce4cd12b8"
    const baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideoId}?api_key=${API_KEY}`
    
    const [activeVideo, setActiveVideo] = useState([])

    const getVideo = async () => {
        try {
            const response = await axios.get(baseUrl)
            setActiveVideo(response.data)

        } catch(error) {
            console.error("Error fetching video data", error)
        }
    }

    useEffect(() => {
        getVideo();
    }, [activeVideo]);


    return (
    <>
        <VideoPlayer activeVideo = {activeVideo}  />
        <section className = "main-content">
            <article className = "current-video__section">
                <VideoDetails activeVideo = {activeVideo} />
                <CommentsForm activeVideo={activeVideo} />
                <CommentsList activeVideo={activeVideo} />
            </article>
            <NextVideosList activeVideo={activeVideo} API_KEY={API_KEY} />
        </section>
    </>
    )
}
