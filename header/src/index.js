import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo-wrapper">
                <img className="header_logo" src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" />
            </div>

            <div className="header_search-wrapper">
                <input className="header_search-input" type="text" />
            </div>

            <div className="header_user-wrapper">
                <button className="header_login-btn">Đăng nhập</button>
            </div>
        </header>
    );
};

export default Header;
