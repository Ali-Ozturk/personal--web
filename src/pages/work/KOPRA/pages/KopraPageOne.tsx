import React from 'react';
import styled from "styled-components";
import svgBackground1 from "../../../../assets/images/KOPRA/svg-background-1.svg";
import svgBackground2 from "../../../../assets/images/KOPRA/svg-background-2.svg";
import svgBackground3 from "../../../../assets/images/KOPRA/svg-background-3.svg";
import deviceMockup from "../../../../assets/images/KOPRA/device-mockup-hero.svg";

const KopraPageOne = () => {
    return (
        <SVGBackground className={'one-page'}>
            <DeviceMockup className={'d-flex justify-content-center align-it'}>
                <HeroHeader>
                    <HeroHeaderText className={'text-center'}>KOPRA - Kontorelevernes praktiksystem</HeroHeaderText>

                    <HeroHeaderContent className={'text-center'}>Et simulerings værktøj skræddersyet til jeres behov og
                        som kan løfte din praktikplads til det moderne regime</HeroHeaderContent>
                </HeroHeader>
            </DeviceMockup>
        </SVGBackground>
    );
};

const HeroHeaderText = styled.p`
  letter-spacing: .1em;
  font-weight: bold;  
  margin: auto;
`

const HeroHeaderContent = styled.p`
  width: 45%;
  font-weight: lighter;
  margin: auto;
  padding-top: 1rem;
  font-size: 1.8rem;
  line-height: 1.2;
`

const HeroHeader = styled.div`
  padding-top: 9rem;
`

const DeviceMockup = styled.section`
  background: url(${deviceMockup}) no-repeat;
  background-position: center bottom;
  background-size: 45%;
  margin: 0;
  height: 100%;
`

const SVGBackground = styled.section`
  background: url(${svgBackground3}) no-repeat, url(${svgBackground2}) no-repeat, url(${svgBackground1}) no-repeat;
  background-repeat: no-repeat;
  background-position: center bottom 12vh;
  background-size: 100%;
  margin: 0;
`

export default KopraPageOne;