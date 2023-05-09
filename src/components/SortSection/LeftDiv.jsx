/* eslint-disable no-unused-vars */
import "./LeftDiv.css"

import React, { useState } from 'react';
import Modal from '../ModalSugestoes';
import FilmeSugestao from '../FilmeSugestao';

import netflix from '../../icons/netflix.png'
import disneyplus from '../../icons/disneyplus.png'
import hbomax from '../../icons/hbomax.png'
import apple from '../../icons/apple.png'
import paramountplus from '../../icons/paramountplus.png'
import primevideo from '../../icons/primevideo.png'
import starplus from '../../icons/starplus.png'

const LeftDiv = () => {

  const [isModalSugestaoOpen, setIsModalSugestaoOpen] = useState(false);
  const [isModalFiltroOpen, setIsModalFiltroOpen] = useState(false);

  const openModalSugestao = () => {
    setIsModalSugestaoOpen(true);
  };

  const closeModalSugestao = () => {
    setIsModalSugestaoOpen(false);
  };

  const openModalFiltro = () => {
    setIsModalFiltroOpen(true);
  };

  const closeModalFiltro = () => {
    setIsModalFiltroOpen(false);
  };

  const movies = [
    {
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfbE7-xbu-9K3mg2GcvQV3iG1fHYKtZgW2A&usqp=CAU',
      name: 'Filme 1',
      year: '2022',
      duration: '1h 30m',
      platforms: [netflix, disneyplus],
    },
    {
      poster: 'https://img.elo7.com.br/product/original/268B9A7/big-poster-filme-panico-4-2011-lo02-tamanho-90x60-cm-panico-4.jpg',
      name: 'Filme 2',
      year: '2021',
      duration: '2h 15m',
      platforms: [netflix, disneyplus],
    },
    {
      poster: 'https://t.ctcdn.com.br/jmmxr_st8Jg0vbhlUezF8fd_Chs=/1024x0/smart/filters:format(webp)/i663288.jpeg',
      name: 'Filme 3',
      year: '2023',
      duration: '1h 45m',
      platforms: [primevideo, hbomax],
    },
  ];

  const platformOptions = [hbomax, primevideo, netflix, starplus, disneyplus, paramountplus, apple ];
  const genreOptions = ['Ação', 'Aventura', 'Drama', 'Comédia', 'Ficção', 'Terror', 'Fantasia', 'Documentário','Musical'];
  

  return (
    <>
      <Modal isOpen={isModalSugestaoOpen} onClose={closeModalSugestao}>
        <h2 style={{color: '#fff'}}>Sugestões</h2>
        <div className="movies-container">
          {movies.map((movie, index) => (
            <FilmeSugestao key={index} {...movie} />
          ))}
        </div>
      </Modal>

      <Modal isOpen={isModalFiltroOpen} onClose={closeModalFiltro}>
        <h2 style={{color: '#fff'}}>Filtro</h2>
        <div className='filtroDiv' style={{marginTop: '5%'}}>
          <div>
          <h4 style={{color: '#fff'}}>Plataformas</h4>
            <div className='plataformSide' style={{display: 'flex', flexWrap: 'wrap'}}>
              {platformOptions.map((platform) => (
                <div key={platform} style={{display: 'flex', alignItems: 'center'}}>
                  <input
                    className='checkboxFilter'
                    type="checkbox"
                    value={platform}
                    />
                    <img src={platform} style={{ marginLeft: 10}}/>
                </div>
              ))}
            </div>
            </div>

          <div>
          <h4 style={{color: '#fff'}}>Generos</h4>
            <div className='genreSide' style={{display: 'flex', flexWrap: 'wrap'}}>
            {genreOptions.map(genero => (
               <div key={genero} style={{display: 'flex', alignItems: 'center'}}>
               <input
                 className='checkboxFilter'
                 type="checkbox"
                 value={genero}
                 />
                 <h5 style={{color: '#fff', marginLeft: 10}}>{genero}</h5>
             </div>
            ))}
            </div>
            </div>
        
        </div>
      </Modal>

    <div className="left-div">
      <h1>
        <span>Note</span> Movies
      </h1>
      <h2>Assista mais, Escolha menos.</h2>
      <div>
        <button onClick={openModalSugestao}>Sugestão</button>
        <button id="option" onClick={openModalFiltro}>+</button>
      </div>
    </div>
    </>
  )
}

export default LeftDiv
