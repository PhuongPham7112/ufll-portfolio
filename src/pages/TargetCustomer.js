import React from 'react';

export default function TargetCustomer() {
    return(
        <div className="wrapper">
            <h2 className="title">Target Customer: Gen Z</h2>
            <section className="section">
                <h3 className="sub-title"> Demographic: </h3>
                <ol>
                    <li>Age: Students & First Jobber, aged 18-25</li>
                    <li>Gender: Male & Female</li>
                    <li>Study & work in major cities</li>
                </ol>
            </section>
            <section className="section">
                <h3 className="sub-title"> Pain Points: </h3>
                <ol>
                    <li>Busy lifestyle, facing a lot of anxiety, peer pressure</li>
                    <li>Use helmet a lot when traveling on motorbike: Suffer from dandruff</li>
                    <li>Easily influenced by social media content</li>
                    <li>Low prices and sale products</li>
                </ol>
                <p className="p-line"> Purchase product from general store & supermarket.
                    Prefer products that are effective, has a rational price
                </p>
            </section>
            <section className="section">
                <h3 className="sub-title">They Can Be:</h3>
                <p className="p-line">A Student: 18-22, facing a variety of choices: clubs, competitions, internships,... to improve themselves</p>
                <p className="p-line">A first jobber: 22-25, has entered the labor force but still feels pressured about promotion, opportunities, and abilities</p>
            </section>
            <section className="section">
                <h3 className="sub-title">What's Happening?</h3>
                <p className="p-line" style={{textDecoration: "underline"}}>General:</p>
                <p className="p-line">About <span className='emphasis'>3 million</span> young Vietnamese are affected by mental and psychological problems but only 20 percent of them receive medical treatment</p>
                <p className="p-line">According to studies, out of every 10 people, <span className='emphasis'>6 to 7</span> of them suffer from peer pressure, especially individuals in academic or corporate environments</p>
                <p className="p-line">More than <span className='emphasis'>80 percent</span> of people with a history of recreational drug use in Vietnam claim to have been influenced by peer pressure</p>
                <div style={{marginBottom: "5px"}}></div>
                <p className="p-line" style={{textDecoration: "underline"}}>Covid 19:</p>
                <p className="p-line">In the Covid pandemic, the malady of youth that is “Peer Pressure” has been exacerbated by the omnipresence of social media, where success stories become more viral than ever before. Feeling stagnated by the prolonged days of sitting in front of the screen for remote jobs or online study and the lack of face-to-face communication with peers, we’re easily trapped inside our own negative, anxiety-driven narratives. 
                Even though Covid cases have dwindled, the impact it has left behind still puts a lot of stress on many of us when transitioning back to normal life</p>
            </section>
            <section className="section">
                <h3 className="sub-title"> AND...</h3>
                <h3 className="sub-title"> Do You Know That</h3>
                <p className="p-line">Peer pressure and Anxieties in general not only cause stress and mental illness, but also cause severe dandruff issues</p>
            </section>
            <section className="section">
                <h3 className="sub-title"> Insights </h3>
                <p className="p-line">I know that everyone has their own journey, abilities, and strengths and yet when I see my friends’ milestones and what they’ve accomplished, I can’t help but feel the pressure and insecurities bubbling up while thinking that I’m scrutinized under the spotlight, judged by everyone else. I want a breakthrough for myself as well, but the invisible self-doubting voice and thought inside my head keeps holding me back, inhibiting me from growing and proving myself</p>
            </section>
        </div>
    )
}