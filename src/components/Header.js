import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ handlerAuth }) {
    return (
        <header>
            <button onClick={handlerAuth} className='btn-auth'>Авторизоваться в VK</button>
        </header>
    );
}

Header.propTypes = {
    handlerAuth: PropTypes.func.isRequired
};

export default Header;