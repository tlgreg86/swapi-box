import React, { Component } from 'react';
import './Scroll.css';

const Scroll = ({ scroll }) => {
  return (
    <div className='scroll'>
      <div className='scroll-container'>
        <p className='intro-line'>A long time ago in a galaxy far, far away....</p>
        <p className='episode-number text'>Episode {scroll.episode_id}</p>
        <p className='episode-title text'>{scroll.title}</p>
        <p className='scroll-date text'>{scroll.release_date}</p>
        <p className='opening-scroll text'>{scroll.opening_crawl}</p>
      </div>
    </div>
  );
}

export default Scroll;
