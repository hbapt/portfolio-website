import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import './Home.css';
import './index.css';

function Contact() {

    const [loading, setLoading] = useState(true);
    const [toggleEffect, setToggleEffect] = useState(true);

    const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        setLoading((loading) => !loading);
    };

    useEffect(() => {
        loadData();
    }, [])

    if (loading) {
        return (
            <div className='homepage crt'>
                <h3 className='loadingInterlude'>LOADING...</h3>
            </div>
        )
    } else {
        return (
            <div className={toggleEffect ? 'homepage crt' : 'homepage'}>
                <div className='submenu-about'>
                    <h3 className='header-home'>**** CONTACT ****</h3>

                    <div style={{ margin: '40px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Link to='#' onClick={(e) => { window.location = 'mailto:hauvillebaptiste@gmail.com'; e.preventDefault() }}><button className='button-contact'>EMAIL</button></Link>
                        <Link to='#' onClick={(e) => { window.open('https://www.linkedin.com/in/baptiste-hauville/', '_blank'); e.preventDefault() }}><button className='button-contact'>LINKEDIN</button></Link>
                        <Link to='#' onClick={(e) => { window.open('https://github.com/hbapt', '_blank'); e.preventDefault() }}><button className='button-contact'>GITHUB</button></Link>
                    </div>

                    <ContactForm />

                </div>
                <div style={{ display: 'flex' }}>
                    <button className='buttonEffect' onClick={() => setToggleEffect(!toggleEffect)}>{toggleEffect ? '* EFFECT OFF *' : '* EFFECT ON *'}</button>

                    <button className='buttonBackToMenu' onClick={() => window.location.replace(`/menu`)}>* BACK TO MENU *</button>
                </div>
            </div>
        )
    }
}

export default Contact;