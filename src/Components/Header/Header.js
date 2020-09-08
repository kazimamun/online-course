import React from 'react';

const Header = () => {
    const headerStyle = {
        fontFamily: 'Stylish, sans-serif',
        margin: '20px 120px',
        padding:'40px 0px',
        backgroundColor: 'steelblue',
        
    }
    return (
        <div style={headerStyle}>
            <h3>Welcome to Our Online Class Room</h3>
        </div>
    );
};

export default Header;