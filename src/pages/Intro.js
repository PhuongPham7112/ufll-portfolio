import React from 'react';
import IntroCard from '../components/IntroCard';
import '../styles/Intro.css';

export default function Intro() {
    const members = [
        {
            "id": 1,
            "name": "Linh Phan",
            "bio": "Bachelor of Business Management (Business Information System major) at University of Queensland",
            "image": "images/linh.jpg"
        },
        {
            "id": 2,
            "name": "Tuan Anh Nguyen",
            "bio": "Business Adminnistration at Foreign Trade University.",
            "image": "images/tanh.jpg"
        }, 
        {
            "id": 3,
            "name": "Phuong Pham",
            "bio": "Bachelor of Science Computer Science Games major/Game Animation minor at University of Southern California.",
            "image": "images/phuong.jpg"
        }
    ]
    return(
        <div className="intro-container">
            <h2 className="title"> Meet the Team </h2>
            <section>
                {members.map((mem) => 
                    <IntroCard key={mem.id} name={mem.name} bio={mem.bio} image={mem.image}/>
                )}
            </section>
        </div>
    )
}