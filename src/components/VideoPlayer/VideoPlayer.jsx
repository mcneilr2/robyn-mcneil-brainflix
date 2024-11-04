
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import './VideoPlayer.scss'


export default function VideoPlayer({activeVideo}) {

    return (
    <>
        <video className="video-player" controls poster={activeVideo.image}></video>
    </>
    )
}
