import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <div className='list-navigation'>
                <Link to='/home'>Home</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/post'>Post</Link>
             </div>
             <div className='common'>This common text</div>
        </div>
    );
};

export default Navigation;