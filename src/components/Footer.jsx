import React from 'react';
import GithubLogo from '../assets/GitHub Icon.png';
import IntagramLogo from '../assets/Instagram Icon.png';

const Footer = () => {
    return (
        <footer>
            <img src={GithubLogo} alt=""/>
            <img src={IntagramLogo} alt=""/>
        </footer>
    );
}

export default Footer;