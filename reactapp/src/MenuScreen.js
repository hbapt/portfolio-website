import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';
import './index.css';
import List from './List';

function Menu() {

    const [loading, setLoading] = useState(true);
    const [toggleEffect, setToggleEffect] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 500));
            setLoading((loading) => !loading);
        };
        loadData();
    }, [])

    if (loading) {
        return (
            <div className='homepage crt'>
                {/* <div className='fullPageColors'>
                        <div className='color1'></div>
                        <div className='color2'></div>
                        <div className='color3'></div>
                        <div className='color4'></div>
                        <div className='color5'></div>
                        <div className='color6'></div>
                        <div className='color7'></div>
                        <div className='color8'></div>
                        <div className='color9'></div>
                        <div className='color10'></div>
                        <div className='color11'></div>
                        <div className='color12'></div>
                        <div className='color13'></div>
                        <div className='color14'></div>
                        <div className='color15'></div>
                        <div className='color16'></div>
                    </div> */}
                    {/* <img src="c64-loading.gif" alt="c64 loading screen" className='c64-loading' /> */}
                <h3 className='loadingInterlude'>LOADING...</h3>
            </div>
        )
    } else {
        return (
            <div className={toggleEffect ? 'homepage crt' : 'homepage'}>
                <List />
                <button className='buttonEffect' onClick={() => setToggleEffect(!toggleEffect)}>{toggleEffect ? '* EFFECT OFF *' : '* EFFECT ON *'}</button>
            </div>
        )
    }
}

export default Menu;