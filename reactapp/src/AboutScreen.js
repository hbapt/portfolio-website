import 'animate.css';
import React, { useEffect, useState } from 'react';
import './Home.css';
import './index.css';

function About() {

    const [loading, setLoading] = useState(true);
    const [toggleEffect, setToggleEffect] = useState(true);
    const [imageVisibility, setImageVisibility] = useState(true);

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

    if (loading) {
        return (
            <div className='homepage crt'>
                <h3 className='loadingInterlude'>LOADING...</h3>
            </div>
        )
    } else if (imageVisibility) {
        return (
            <div className={toggleEffect ? 'homepage crt' : 'homepage'}>
                <div className='submenu'>
                    <h3 className='header-catch-me'>**** CATCH ME IF YOU CAN ****</h3>
                    {/* <p style={{ marginTop: '35px', marginBottom: '-55px' }}>Catch me if you can !</p> */}
                    <div className={imageVisibility ? 'y' : 'image-hide'}>
                        <img onClick={() => setImageVisibility(!imageVisibility)} className={imageVisibility ? 'image-self x' : 'image-hide'} src="./baptiste_hauville-pixel3.png" alt="Baptiste Hauville" />
                    </div>
                </div>
                <button className='buttonEffect' onClick={() => setToggleEffect(!toggleEffect)}>{toggleEffect ? '* EFFECT OFF *' : '* EFFECT ON *'}</button>
            </div>
        )
    } else if (!imageVisibility) {
        return (
            <div className={toggleEffect ? 'homepage crt' : 'homepage'}>
                <div className='submenu-about'>
                    <h3 className='header-home'>**** QUI SUIS-JE ? ****</h3>
                    <div className='scroll'>
                        <p className='intro'>
                            Bonjour,
                            <br />
                            <br />
                            Je m'appelle Baptiste Hauville et je suis <span className='dev-about'>developpeur fullStack web et mobile</span> base dans la region bordelaise. Creatif et passionne, je suis a la recherche d'une premiere experience professionnelle.
                            <br />
                            <br />
                            Ne avant Internet et en plein age d'or du 'Commodore 64' dont ce site est largement inspire, et apres presque 10 ans a mon compte en tant que photographe (et notamment une pandemie mondiale mettant toute activite a l'arret) j'ai decide d'optimiser mon temps a l'apprentissage plus pousse du code.
                            <br />
                            <br />
                            Apres plusieurs mois de travail en autonomie, j'ai integre 'La Capsule' a Paris dans le but de me former de maniere efficace et ciblee a JavaScript et plus particulierement a React / React Native.
                            <br />
                            <br />
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>Tapez 'MENU' pour revenir au menu</p>
                    </div>
                </div>
                <button className='buttonEffect' onClick={() => setToggleEffect(!toggleEffect)}>{toggleEffect ? '* EFFECT OFF *' : '* EFFECT ON *'}</button>
            </div>
        )
    }
}

export default About;