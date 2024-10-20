import React from 'react'
import NoAvatar from "../../assets/image/noavatar.png"

export default function Avatar({src,username,height,width}){
    return (
        <div className='d-flex-row'>
            <img src={src? src:NoAvatar} alt="" style={{
            height:height + 'px',
            width: width +'px',
            objectFit:'cover',
            borderRadius:'0.5rem',}}/>
        </div>
    )
}