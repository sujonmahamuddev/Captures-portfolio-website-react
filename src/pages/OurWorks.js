import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animation

import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';



const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">


      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
            <img src={athelete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the-race" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="good-times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;


export default OurWork;
