import React, {useEffect, useRef} from "react";
import {Button} from "react-bootstrap";
import gsap from "gsap";
import ScrollIndicator from "../components/ScrollIndicator";
import Portfolio from "./Portfolio";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Tippy from "@tippyjs/react";
import {followCursor} from 'tippy.js';
import styled from "styled-components";

const Frontpage: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    const heroRef = useRef<HTMLDivElement | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    const timeline = gsap.timeline({
        defaults: {
            ease: "power4.inOut", duration: 2,
        }
    })

    useEffect(() => {
        timeline
            .to(heroRef.current, {
                opacity: 1,
                x: 0,
                onComplete: () => {
                    gsap.fromTo(
                        heroRef.current,
                        {},
                        {
                            opacity: 0,
                            y: -100,
                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: "top top",
                                endTrigger: '.vh-100',
                                end: "bottom",
                                scrub: true,
                            },
                        })
                }
            }, "+=1.5");


    });

    return <>
        <ScrollIndicator/>

        <div className={'d-flex align-items-center justify-content-center vh-100'}>
            <div className={'animation-test-jumbo'} ref={heroRef} style={{width: '22vw', marginRight: '10vh'}}>

                    <HeroParagraphOne>Welcome,</HeroParagraphOne>
                    <h1 className={'text-center fw-bold'}>My name's Ali.</h1>
                    <h5 className={'text-end'}>I make software.</h5>

            </div>
        </div>

        <div ref={portfolioRef}>
            <Portfolio/>
        </div>

        <div className={'pb-7'}>

        </div>
    </>;
}

const HeroParagraphOne = styled.h3`

`

export default Frontpage;
