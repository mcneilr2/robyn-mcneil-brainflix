import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import deleteIcon from '../../assets/icons/delete.svg'
import axios from "axios"
import './NextVideoList.scss'

export default function NextVideosList({ activeVideo, setActiveVideo, baseUrl }) {

    const [videosListFiltered, setVideosListFiltered] = useState([])

  
    const deleteVideo = async (event, id) => {
        event.preventDefault();
        console.log(id)

    }
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

    function authenticateUser(channel) {
        if(channel == "Authenticated User"){
            return "--visible"
        } else {return ""}
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
                    <img className={"video__delete" + authenticateUser(video.channel)}
                    src={deleteIcon}
                    onClick = {(event) => deleteVideo(event, video.id)}
                    alt="delete icon"
                    /> 
                </article>
            </Link>
            ))
            }
        </aside>
    )
}