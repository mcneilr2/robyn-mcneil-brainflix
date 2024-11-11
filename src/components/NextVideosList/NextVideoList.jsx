import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './NextVideoList.scss'

export default function NextVideosList({ activeVideo, baseUrl }) {

    const [videosListFiltered, setVideosListFiltered] = useState([])

    const getVideos = async () => {
        try {
            const response = await axios.get(baseUrl)
            let filteredList = response.data.filter((video) => {
                return (video.id != activeVideo.id)
            })
            setVideosListFiltered(filteredList)
        } catch(error) {
            console.error("Error fetching video data", error)
        }
    }

    useEffect(() => {
        getVideos();
    }, [activeVideo]);


    return (
        <aside className="next-videos">
            <h3 className ="next-videos__title">
                NEXT VIDEOS
            </h3>
            {videosListFiltered?.map((video) => (
            <Link to={`/videos/${video.id}`} onClick={ window.scrollTo(0,0) } key={video.id}>
                <article className="video__card">
                    <div className="video__image-container">
                        <img 
                        className="video__image" 
                        src={video.image} 
                        alt="next video" 
                        />
                    </div>
                    <div className="video__details">
                        <p className="video__title">
                            {video.title}
                        </p>
                        <p className="video__channel">
                            {video.channel}
                        </p>
                    </div>
                </article>
            </Link>
            ))
            }
        </aside>
    )
}