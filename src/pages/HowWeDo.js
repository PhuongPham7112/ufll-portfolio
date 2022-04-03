import React from 'react';
import StepperCampaign from '../components/StepperCampaign';
import BasicTable from '../components/Table';
export default function HowWeDo() {
    return(
        <div className="wrapper">
            <h2 className="title">How We Do It</h2>
            <section className="section">
                <h3 className="sub-title">Do You Know That...</h3>
                <p className="p-line">Floral Essences are powerful adjunct traditional therapy to treat symptoms of stress, anxiety, and depression</p>
            </section>
            
            <section className="section">
                <h3 className="sub-title">Quality</h3>
                <p className="p-line"><span className='emphasis'>Therefore</span>, let us presents you more new scents which have been proved as good therapies for people who are confronting stress and anxieties:</p>
                <ol>
                    <li>Lavender</li>
                    <li>Rose</li>
                    <li>Eucalyptus + Peppermint</li>
                </ol>
            </section>
            <section className="section">
                <h3 className="sub-title">Packaging</h3>
                <p className="p-line">Unique product packaging for Gen Z market: Urban midnight texture and special unique design that can embrace youthful and positive vibes.</p>
                <p className="p-line">Available in various size:</p>
                <ol>
                    <li>Mini pack size (6ml)</li>
                    <li>Reusable travel size (70ml)</li>
                    <li>Small size (170ml)</li>
                    <li>Medium size (330ml)</li>
                    <li>Big size (480ml)</li>
                </ol>
            </section>
            <section className="section">
                <h3 className="sub-title">Our Campaign</h3>
                <StepperCampaign/>
            </section>
            
            <section className="section">
                <div style={{marginBottom: "20px"}}/>
                <h3 className="sub-title">Budget Planning:</h3>
                <BasicTable/>
            </section>
        </div>
    )
}