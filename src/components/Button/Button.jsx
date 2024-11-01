import uploadIcon from '../../assets/icons/upload.svg';
import addCommentsIcon from '../../assets/icons/add_comment.svg';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({functionality}) {
       
    let isUpload = false
    if(functionality == "upload") {
        isUpload=true
    } else {isUpload=false}


    return (
    <>
    <Link to={isUpload ? "/upload" : "/"}>
        <div className={(isUpload ? "header__upload-container" : "comments__add-container")}>
                <img className={isUpload ? "header__upload-icon" : "comments__add-icon"} src={isUpload ? uploadIcon : addCommentsIcon} alt={isUpload ? "upload icon" : "add comment icon"} />
                {isUpload ? "UPLOAD" : "COMMENTS"}
        </div>  
    </Link>
      
    </>
    )
}