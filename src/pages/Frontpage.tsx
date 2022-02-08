import React, {useEffect, useRef} from "react";
import {Button} from "react-bootstrap";
import gsap from "gsap";
import ScrollIndicator from "../components/ScrollIndicator";
import Portfolio from "./Portfolio";
import {ScrollTrigger} from "gsap/ScrollTrigger";

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
                                end: "bottom 80px",
                                scrub: true,
                            },
                        })
                }
            }, "+=1.5");


    });

    return <>
        <ScrollIndicator/>

        <div className={'d-flex align-items-center justify-content-center vh-100'}>
            <div className={'w-75'}>
                <div className={'w-50 animation-test-jumbo'} ref={heroRef}>
                    <footer className="blockquote-footer">Welcome,</footer>

                    <h3>Jeg er <span className={'primary-marker'}>Alihan Øztürk</span></h3>

                    <small className={'text-muted'}>Contrary to popular belief, Lorem Ipsum is not simply random
                        text.
                        It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia. </small>

                    <div className={'mt-5 testtttt'}>
                        <Button onClick={() => alert('Test')}>DOWNLOAD CV</Button>
                    </div>
                </div>
            </div>
        </div>

        <div ref={portfolioRef}>
            <Portfolio/>
        </div>

        <div className={'pb-7'}>

        </div>


    </>;
}

export default Frontpage;
