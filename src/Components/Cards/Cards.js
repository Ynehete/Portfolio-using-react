import React from 'react';
import './Cards.css';
import weather from './weather app.jpg';
import online from './onlineshopping.webp';
function Cards() {
    return (
        <>
        <div>
            <h5 className='project' id='cards'>Projects</h5>
        <div className="cards-container">
      <div className="card">
        <img src={online} alt="Project One" />
        <div className="card-content">
          <h3 className="card-title">Online Shopping web App</h3>
          <p className="card-description">This is a description of Project One. It is a very interesting project.</p>
          <a href="https://github.com/yourusername/project-one" className="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>

      <div className="card">
        <img src={weather} alt="Project Two" />
        <div className="card-content">
          <h3 className="card-title">Weather App</h3>
          <p className="card-description">This is a description of Project Two. It is an even more interesting project.</p>
          <a href="https://github.com/yourusername/project-two" className="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>

      
    </div>
    </div>
        </>
    );
}
export default Cards;