import React from 'react';
import styled from "styled-components";

type PropsFromParent = {
    inverse?: boolean;
}

const KopraSlidingGradient: React.FC<PropsFromParent> = ({children, inverse = false}) => {
    return (
        <SliderContainer className={'d-flex justify-content-center align-items-center'} inverse={inverse}>
            {children}
        </SliderContainer>
    );
};

const SliderContainer = styled.section<{ inverse: boolean }>`
  height: 33vh;
  width: 100vw;

  background: ${props => props.inverse ?
          '#394856'
          :
          'linear-gradient(90deg, #F1F8FF 0%, #EFFBFF 72.4%, rgba(197, 222, 245, 0.8) 100%)'};
}


`

export default KopraSlidingGradient;