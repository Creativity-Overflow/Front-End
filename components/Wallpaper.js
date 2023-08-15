import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
body {
    background: #147896;
  }
  
  .button-block {
    width: 100;
    margin: 100px ;
  }
  
  .social {
    display: inline-block;
    margin: 60px;
    cursor: pointer;
  }
  .social a {
    display: block;
    background: rgb(33,189,91);
background: linear-gradient(90deg, rgba(33,189,91,1) 0%, rgba(151,48,181,1) 100%);
    padding: 20px;
    position: relative;
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
  .social a::before {
    dislpay: block;
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    left: -20px;
    top: 10px;
    background: rgba(0, 0, 0, 0.7);
    transform: rotate(0deg) skewY(-45deg);
  }
  .social a::after {
    dislpay: block;
    content: "";
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    transform: rotate(0deg) skewX(-45deg);
    background: rgba(0, 0, 0, 0.7);
    transform: rotate(45deg) scewY(-45deg);
  }
  .social a:hover {
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
    box-shadow: -50px 50px 30px rgba(0, 0, 0, 0.5);
  }


`;

const GooeyButton = () => {
    return (
        <StyledButton id="gooey-button">

            <div class="button-block">
                <div class="social"><a href="#"> All Arts </a></div>
                <div class="social"><a href="#"> digital     Arts </a></div>
                <div class="social"><a href="#"> Photography Art</a></div>
                <div class="social"><a href="#"> physical    Art</a></div>
            </div>
        </StyledButton>
    );
};

export default GooeyButton;