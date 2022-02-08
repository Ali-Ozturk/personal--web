import React from 'react';
import svgBackground from "../assets/images/svg-background.svg"
import svgBackgroundOverlay from "../assets/images/svg-overlay.svg"
import styled from "styled-components";

/*
            <div className={'container d-flex justify-content-center vh-100 align-items-center'}>
                <AnimatedLogo/>
            </div>
 */
const Testpage = () => {
    return (
        <div className={'vh-100'}>
            <SVGBackground>
                <p>Test</p>
            </SVGBackground>
        </div>
    );
};

const SVGBackground = styled.div`
  background: url(${svgBackgroundOverlay}) no-repeat, url(${svgBackground}) no-repeat;
  background-repeat: no-repeat;
  background-position: center top 50%;
  background-size: 100%;
  height: 100%;
`

export default Testpage;
