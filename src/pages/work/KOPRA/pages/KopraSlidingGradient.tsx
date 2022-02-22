import React from 'react';
import styled from "styled-components";

const KopraSlidingGradient = () => {
    return (
        <SliderContainer>
            <p>Test</p>
        </SliderContainer>
    );
};

const SliderContainer = styled.section`
  height: 33vh;
  width: 100vw;
  
  background: linear-gradient(90deg, #F1F8FF 0%, #EFFBFF 72.4%, rgba(197, 222, 245, 0.8) 100%);
`

export default KopraSlidingGradient;