import React from 'react';
import './Header.css'

const Header = ({searchName}) => {
    return (
        <div className='header'>
            <input type="text" onChange={(e)=> searchName(e.target.value)} placeholder='Search Player Name' />
        </div>
    );
};

export default Header;