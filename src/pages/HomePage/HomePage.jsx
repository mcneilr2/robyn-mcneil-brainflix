import { useState, useEffect } from 'react'
import axios from "axios"
import data from '../../data/video-details.json';
import './HomePage.scss'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import CommentsForm from '../../components/CommentsForm/CommentsForm'
import CommentsList from '../../components/CommentsList/CommentsList'
import NextVideosList from '../../components/NextVideosList/NextVideoList'


function HomePage() {
    const API_KEY = "01c51cce-0156-4b3b-a1da-88af4978af2c"
    const baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`
    
    const [videos, setVideos] = useState ([])
    const [defaultVideo, setDefaultVideo] = useState([])


    const getVideos = async () => {
        try {
            const response = await axios.get(baseUrl)
            setVideos(response.data)

        } catch(error) {
            console.error("Error fetching video data", error)
        }

        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY}`)
            setDefaultVideo(response.data)
        } catch(error) {
            console.error("Error fetching video data", error)
        }
    }

    useEffect(() => {
        getVideos();
    }, []);


    return (
    <>
        <VideoPlayer activeVideo = {defaultVideo}  />
        <section className = "main-content">
            <article className = "current-video__section">
                <VideoDetails activeVideo = {defaultVideo} />
                {/* <CommentsForm activeVideo={activeVideo} />
                <CommentsList activeVideo={activeVideo} /> */}
            </article>
            {/* <NextVideosList activeVideo={activeVideo} data={data} changeActiveVideo = {setActiveVideo} /> */}
        </section>
    </>
    )
}

export default HomePage
