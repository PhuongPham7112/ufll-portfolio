import React from 'react';
export default function IntroCard({name, bio, image}) {
    return(
        <div className="intro-member">
            <img className="intro-member-img" alt="" src={image}/>
            <div className="intro-member-info">
                <h3> {name} </h3><br/>
                <p> {bio} </p>
            </div>
        </div>
    )
}