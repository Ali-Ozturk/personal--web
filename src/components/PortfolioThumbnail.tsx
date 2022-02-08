import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import styled from "styled-components";

type PropsFromParent = JSX.IntrinsicElements["img"] & {
    thumbPicture: string;
    hoverPicture: string;
    description: string;
    url?: string;
}

const PortfolioThumbnail: React.FC<PropsFromParent> = ({url, description, thumbPicture, hoverPicture, ...props}) => {

    return (
        <>
            <ReactTooltip delayShow={0}/>
            <PortfolioContainer>
                <Link to={url ?? '#'}>
                    <img src={thumbPicture} className={'rounded portfolio-image'} data-tip={description}/>
                    <img src={hoverPicture} className={'rounded portfolio-image'} data-tip={description}/>
                </Link>
            </PortfolioContainer>
        </>
    );
};

const PortfolioContainer = styled.div`
  height: 100%;
  
  img:last-child {
    display: none;
  }

  &:hover img:last-child {
    display: block;
  }

  &:hover img:first-child {
    display: none;
  }
`

export default PortfolioThumbnail;
