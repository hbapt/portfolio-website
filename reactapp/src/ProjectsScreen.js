import 'animate.css';
import React, { useEffect, useState } from 'react';
import './Home.css';
import './index.css';

function Projects() {

    const [loading, setLoading] = useState(true);
    const [toggleEffect, setToggleEffect] = useState(true);
    const [seeMore, setSeeMore] = useState(false);

    const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        setLoading((loading) => !loading);
    };

    useEffect(() => {
        loadData();
        function handleKeyDown(e) {
            if (e.keyCode === 85) {
                window.location.replace(`/menu`);
            };
        }

        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    const handleClickSeeMore = () => {
        setSeeMore(!seeMore)
    }

    if (loading) {
        return (
            <div className='homepage crt'>
                <h3 className='loadingInterlude'>LOADING...</h3>
            </div>
        )
    } else {
        return (
            <div className={toggleEffect ? 'homepage crt' : 'homepage'}>
                <div className='submenu-about scroll'>
                    <h3 className='header-home'>**** PROJECTS ****</h3>
                    <div>
                        <div style={{ marginTop: '3rem', textTransform: 'uppercase' }}>
                            <span style={{ fontSize: '1.8rem', paddingBottom: '25px', fontWeight: 'bold' }}>TATTOO-MOI</span>
                            <br />
                            <p style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>
                                react native / redux / express.js / mongo db
                            </p>
                            <br />
                            Application mobile de recherche de tatoueurs & de gestion de rendez-vous directs entre clients et professionnels du tatouage.
                        </div>
                        <div className='see-more' onClick={() => handleClickSeeMore()}>
                            {seeMore ?
                                <div>
                                    <p>✦ EN VOIR MOINS ✦</p>
                                    <img src="./tattoomoi.gif" alt="" style={{ width: '100%', justifyContent: 'center' }} />
                                </div>
                                :
                                <p>✦ EN VOIR PLUS ✦</p>}
                        </div>
                    </div>

                    <p style={{ marginBottom: '-20px' }}>----</p>

                    <div>
                        <div style={{ marginTop: '3rem', textTransform: 'uppercase' }}>
                            <span style={{ fontSize: '1.8rem', paddingBottom: '25px', fontWeight: 'bold' }}>CE SITE. DU COUP.</span>
                            <br />
                            <p style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>
                                HTML / CSS / react / node.js / express.js
                            </p>
                            <br />
                            Inspire du 'Commodore 64', mon portfolio est base sur React et utilise node.js / express.js pour la gestion du formulaire de contact.
                        </div>
                        {/* <div className='see-more' onClick={() => handleClickSeeMore()}>
                            {seeMore ?
                                <div>
                                    <p className='animate__animated animate__flash'>✦ INCEPTIOOOON ✦</p>
                                    <img src="./portfolio.gif" alt="" style={{ width: '100%', justifyContent: 'center' }} />
                                </div>
                                :
                                <p>✦ EN VOIR PLUS ✦</p>}
                        </div> */}
                    </div>

                    <p style={{ marginBottom: '-20px' }}>----</p>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
                        {/* <p>Tapez 'MENU' pour revenir au menu</p> */}
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <button className='buttonEffect' onClick={() => setToggleEffect(!toggleEffect)}>{toggleEffect ? '* EFFECT OFF *' : '* EFFECT ON *'}</button>

                    <button className='buttonBackToMenu' onClick={() => window.location.replace(`/menu`)}>* BACK TO MENU *</button>
                </div>
            </div>
        )
    }
}

export default Projects;