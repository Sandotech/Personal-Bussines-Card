import React from 'react';
import './styles/Card.css';
import Santodev from './assets/santodev-photo.jpeg';
import GithubLogo from './assets/GitHub Icon.png';
import IntagramLogo from './assets/Instagram Icon.png';
import LinkedIn from './assets/Vector.png';
import Email from './assets/Icon.png';

const Card = () => {
    return (
        <div className="card">
            <section className='photo-container'>
                <img className='santodev-photo' src={Santodev} alt=""/>
            </section>
            <article className='info-container'>
                <h1>Santodev</h1>
                <span className='skill-text'>Frontend Developer</span>
                <div className='button-containers'>
                    <button className='profile-button email-button'><img src={Email} />Email</button>
                    <button className='profile-button linkedin-button'><img src={LinkedIn}/>LinkedIn</button>
                </div><p></p>
                <section>
                    <span className='tittle-container'>About</span>
                    <p className='parghraph-content'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <span className='tittle-container'>Interests</span>
                    <p className='parghraph-content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </section>
            </article>
            <footer>
                <img src={GithubLogo} alt=""/>
                <img src={IntagramLogo} alt=""/>
            </footer>
        </div>
    );
}

export default Card;