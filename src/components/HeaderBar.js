import React, {useState} from 'react';
import '../styles/HeaderBar.css';
// import component 👇
import Drawer from 'react-modern-drawer';
//import styles 👇
import '../styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function HeaderBar() {
    const [open, setOpen] = useState(false);
    const openDrawer = () => {
        setOpen(!open);
    }
    return(
        <>
            <div className="header-container">
                <a href="/"><h1 style={{cursor: "pointer"}} className="animated-font"> VUA Team </h1></a>
                <div onClick={openDrawer} className="animated-bar-icon">
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </div>
            </div>
            <Drawer
                open={open}
                onClose={openDrawer}
                direction='right'
                className='head-drawer'
                enableOverlay={true}
            >
                <h4> Where do you want to go? </h4>
                <div className="drawer-links">
                    <a className="drawer-link-nav" href="/"> Intro </a>
                    <a className="drawer-link-nav" href="/target-customer"> Target Customer: Gen Z </a>
                    <a className="drawer-link-nav" href="/our-idea"> Our Idea </a>
                    <a className="drawer-link-nav" href="/how-we-do-it"> How We Do It </a>
                </div>
            </Drawer>
        </>
    )
}