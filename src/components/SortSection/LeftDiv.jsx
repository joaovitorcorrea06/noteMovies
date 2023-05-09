/* eslint-disable no-unused-vars */
import "./LeftDiv.css"

import React, { useState } from 'react';
import Modal from '../ModalSugestoes';
import FilmeSugestao from '../FilmeSugestao';

const LeftDiv = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const movies = [
    {
      poster: 'poster1.jpg',
      name: 'Filme 1',
      year: '2022',
      duration: '1h 30m',
      platforms: ['Netflix', 'Prime Video'],
    },
    {
      poster: 'poster2.jpg',
      name: 'Filme 2',
      year: '2021',
      duration: '2h 15m',
      platforms: ['Netflix', 'Disney+'],
    },
    {
      poster: 'poster3.jpg',
      name: 'Filme 3',
      year: '2023',
      duration: '1h 45m',
      platforms: ['Prime Video', 'HBO Max'],
    },
  ];
  

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 style={{color: '#fff'}}>Título do Modal</h2>
        <div className="movies-container">
          {movies.map((movie, index) => (
            <FilmeSugestao key={index} {...movie} />
          ))}
        </div>
      </Modal>

    <div className="left-div">
      <h1>
        <span>Note</span> Movies
      </h1>
      <h2>Assista mais, Escolha menos.</h2>
      <div>
        <button onClick={openModal}>Sugestão</button>
        <button id="option">+</button>
      </div>
    </div>
    </>
  )
}

export default LeftDiv
