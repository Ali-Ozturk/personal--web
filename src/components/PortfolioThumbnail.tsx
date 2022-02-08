import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import Tippy from '@tippyjs/react';
import {followCursor} from "tippy.js";

type PropsFromParent = JSX.IntrinsicElements["img"] & {
    thumbPicture: string;
    hoverPicture?: string;
    description: string;
    url?: string;
}

const PortfolioThumbnail: React.FC<PropsFromParent> = ({url, description, thumbPicture, hoverPicture, ...props}) => {

    return (
        <>
            <Tippy content={description} followCursor={true} plugins={[followCursor]}>
                <PortfolioContainer>
                    <Link to={url ?? '#'}>
                        <img src={thumbPicture} className={'rounded portfolio-image primary-image'}/>
                        {hoverPicture &&
                        <img src={hoverPicture} className={'rounded portfolio-image hover-image'}/>
                        }
                    </Link>
                </PortfolioContainer>
            </Tippy>
        </>
    );
};

const PortfolioContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    transition: transform .5s, opacity .5s ease;
  }

  .hover-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .primary-image {
    display: block;
  }

  &:hover .primary-image {
    transform: scale(1.1);
  }

  &:hover .hover-image {
    opacity: 1;
  }

`

export default PortfolioThumbnail;
