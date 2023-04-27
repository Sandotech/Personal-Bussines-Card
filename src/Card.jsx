import React from 'react';
import './styles/Card.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

const Card = () => {
    return (
        <div className="card">
            <Info/>
                <p></p>
            <div className='aboutMe-content'>
                <section>
                    <About/>
                    <Interests/>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default Card;