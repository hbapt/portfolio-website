import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Link, Redirect, Router } from 'react-router-dom';
import './Home.css';
import './index.css';

function Home() {

    const [loading, setLoading] = useState(true)

    const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        setLoading((loading) => !loading);
    };

    useEffect(() => {
        loadData();
        function handleKeyDown(e) {
            if (e.keyCode == 89) {
                const { href } = window.location;
                window.location.href = `${href}menu`;

            } else if (e.keyCode == 78) {
                const { href } = window.location;
                window.location.href = `${href}no`;
            };
        }

        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    if (loading) {
        return (
            <div className='homepage crt'>
                <h3 className='loadingInterlude'>LOADING...</h3>
            </div>
        )
    } else {
        return (
            <div className='homepage crt'>
                <div className='submenu'>
                    <h3 className='header-home'>**** BAPTISTE HAUVILLE ****</h3>
                    <div>
                        <h3 className='ready'>READY.</h3>
                        <h3 className='presentation typing'>TO WORK AS A FULLSTACK JS DEVELOPER.</h3>
                        {/* <div className='loading animate__animated animate__fadeIn animate__delay-5s'>
                    </div> */}
                    </div>
                    <p className='run animate__animated animate__fadeIn animate__delay-5s'>RUN?(y/n)</p>

                </div>
            </div>
        )
    }
}

export default Home;