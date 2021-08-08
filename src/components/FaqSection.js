import React from 'react'
import styled from 'styled-components'
import {About} from '../styles';
const FaqSection = () => {
  return (
    <Faq>

      <h2>Any questions <span>Faq</span></h2>
      <div className="question">
        <h4>How do i start ?</h4>

        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do i start ?</h4>

        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do i start ?</h4>

        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span{
    display:block;
  }
  h2{
    padding: 10px;
  }
  h4{
    font-size: 22px
  }
  .question{
    padding: 15px 0;
    cursor: pointer;
  }
  p{
    padding:10px 0;
  }
  .answer{
    padding: 10px 0;
  }
  .faq-line{
    border-bottom: 1px solid #fff;
  }
`;

export default FaqSection
