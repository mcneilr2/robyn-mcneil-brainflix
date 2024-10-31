import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'

import './VideoDetails.scss'


export default function VideoDetails({activeVideo}) {
    let numComments = 0
    try { 
        numComments = activeVideo.comments.length 
    } catch(error) {
        numComments = 0
    }

    return (
    <>
        <h1 className = "current-video__title">
        {activeVideo.title}
        </h1>
        <section className="current-video__details">
            <div className="current-video__name-date">
                <p className="current-video__channel">
                    {"By " + activeVideo.channel}
                </p>
                <p className="current-video__date">
                    {(new Date(activeVideo.timestamp)).toLocaleDateString("en-US")}
                </p>
            </div>
            <div className="current-video__interactions-section">
                <div className="current-video__views-container">
                    <img 
                    className="current-video__interactions-icon" 
                    src={viewsIcon} 
                    alt="views icon" 
                    />
                    <p className="current-video__views">
                        {activeVideo.views}
                    </p>
                </div>
                <div className="current-video__likes-container">
                    <img 
                    className="current-video__interactions-icon"
                    src={likesIcon} 
                    alt="likes icon" 
                    />
                    <p className="current-video__likes">
                        {activeVideo.likes}
                    </p>
                </div>
            </div>
        </section>
        <p className="current-video__description">
            {activeVideo.description}
        </p>
        <p className="current-video__comment-count">
            {numComments + " Comments"}
        </p>
    </>
    )
}