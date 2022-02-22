import React from 'react';
import styled from "styled-components";
import DeviceSVG from "../../../../assets/images/KOPRA/device-mockup-onepage.svg";

const KopraPageFour = () => {
    return (
        <section className={'one-page justify-content-center align-items-center d-flex'}>
            <Ellipse className={'justify-content-center d-flex'}>
                <Device src={DeviceSVG} alt={'Device Mockup'}/>
            </Ellipse>
        </section>
    );
};


const Device = styled.img`
  position: absolute;
  width: 120%;
  height: 100%;
  margin: auto;
`

const Ellipse = styled.div`
  position: relative;
  background-color: #C5DEF5;
  width: 45%;
  height: 90%;
  border-radius: 50%;
`

export default KopraPageFour;