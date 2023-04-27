import React from 'react';
import Santodev from '../assets/santodev-photo.jpeg';
import LinkedIn from '../assets/Vector.png';
import Email from '../assets/Icon.png';

const Info = () => {
    return (
        <>
        <section className='photo-container'>
            <img className='santodev-photo' src={Santodev} alt=""/>
        </section>
        <article className='info-container'>
            <h1>Santodev</h1>
            <span className='skill-text'>Frontend Developer</span>
            <div className='button-containers'>
                <button className='profile-button email-button'><img src={Email} />Email</button>
                <button className='profile-button linkedin-button'><img src={LinkedIn}/>LinkedIn</button>
            </div>
        </article>
        </>
    );
}

export default Info;