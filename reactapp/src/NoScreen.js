import 'animate.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './index.css';

function NoScreen() {

    return (
        <div className='homepage crt'>
            <Link className='link' to={'./menu'}><h3 className='loadingInterlude'>!! 404 ERROR !!</h3></Link>
        </div >
    )
}

export default NoScreen;