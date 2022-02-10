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
    technologies: string[];
    partners?: string[];
}

const PortfolioThumbnail: React.FC<PropsFromParent> = ({
                                                           partners,
                                                           technologies,
                                                           url,
                                                           description,
                                                           thumbPicture,
                                                           hoverPicture,
                                                           ...props
                                                       }) => {

    return (
        <>
            <Tippy content={description} followCursor={true} plugins={[followCursor]}>
                <PortfolioContainer className={'d-flex justify-content-center'}>
                    <Link to={url ?? '#'}>
                        <img src={thumbPicture} className={'portfolio-image primary-image'}/>
                        {hoverPicture &&
                        <img src={hoverPicture} className={'portfolio-image hover-image'}/>
                        }
                    </Link>

                    <ul className="sci flex-wrap justify-content-center">
                        {partners?.map((partner, key) => {
                            return (
                                <li key={key}>
                                    <span className="badge bg-primary custom-badge-color">{partner}</span>
                                </li>
                            )
                        })}
                        {technologies.map((badge, key) => {
                            return (
                                <li key={key}>
                                    <span className="badge bg-light text-dark rounded-pill">{badge}</span>
                                </li>
                            )
                        })}
                    </ul>
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

  .sci {
    position: absolute;
    bottom: 0.6vw;
    display: flex;
    pointer-events: none; // TODO: Is this relevant?
  }

  .sci li {
    list-style: none;
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    transform: translateY(40px);
    transition: 0.5s;
    opacity: 0;
  }

  &:hover .sci li {
    transform: translateY(0px);
    opacity: 1;
  }
`

export default PortfolioThumbnail;
