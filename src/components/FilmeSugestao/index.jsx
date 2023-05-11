/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css'

const FilmeSugestao = ({ poster, name, year, duration, platforms }) => {
  return (
    <div className="movie">
      <img src={poster} alt={name} className="poster" />
      <div className="movieData">

        <h3 style={{color: '#fff'}}>{name}</h3>
        <p style={{color: '#fff'}}>{year}</p>
        <p style={{color: '#fff'}}>{duration}</p>
        <div className="platforms">
          {platforms.map((platform, index) => (
            <img key={index} src={platform}/>
            ))}
        </div>
      
      </div>
    </div>
  );
};

export default FilmeSugestao;
