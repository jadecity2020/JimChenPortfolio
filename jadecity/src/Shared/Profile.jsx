import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <>
        <div class='profile'>
            <img class= "pic"src='https://res.cloudinary.com/jadecity2020/image/upload/v1591647345/WechatIMG1_hdeid5.jpg' alt='Profile'/>   
        </div>
        <div class='about-me' id="about-me-id">
            <h1 class= 'about-meh'  id="about-me-scroll">Hi! My name is Jim Chen</h1>
            <p class= 'about-mep'>I am a software engineer graduated from  General Assembly's SEIR program! I have listed a few projects that I worked on below</p>
            <p class= 'about-mep'> Check them out!</p>
        </div>
        </>
        )
}

export default Profile