import React from 'react';

type PropsFromParent = JSX.IntrinsicElements["img"] & {
    thumbPicture: string;
    hoverPicture: string;
}

const PortfolioThumbnail: React.FC<PropsFromParent> = ({thumbPicture, hoverPicture, ...props}) => {
    return (
        <img src={thumbPicture} className={'portfolio-image ' + props.className}/>
    );
};

export default PortfolioThumbnail;
