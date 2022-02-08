import React, {MouseEventHandler} from 'react';

type PropsFromParent = {
    size?: number
    onClick?: MouseEventHandler;
}

// <image href={logo} className={'logo-dimensions'}/>

const AnimatedLogo: React.FC<PropsFromParent> = ({size, onClick: clickFunc}) => {
    return (
        <svg viewBox="0 0 100 100" id='logo-svg-container' className={'w-rem-' + (size ?? 5)} onClick={clickFunc}>
            <rect className="logo-border-animated"/>
            <text y='55%' x='52%' className={'logo-font-specs'}>A.</text>
        </svg>
    );
};

export default AnimatedLogo;
