import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './NextVideoList.scss'

export default function NextVideosList({ activeVideo, setActiveVideo, API_KEY }) {
    const baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`

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
            <Link to={`/videos/${video.id}`} key={video.id}>
                <article className="video__card">
                    <div className="video__image-container">
                        <img className="video__image" src={video.image} alt="next video" />
                    </div>
                    <div className="video__details">
                        <p className="video__title">
                            {video.title}
                        </p>
                        <p className="video__name">
                            {video.name}
                        </p>
                    </div>
                </article>
            </Link>

            ))
            }
        </aside>
    )
}