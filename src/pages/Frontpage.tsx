import React, {useEffect, useRef} from "react";
import {Button} from "react-bootstrap";
import gsap from "gsap";
import ScrollIndicator from "../components/ScrollIndicator";

const Frontpage: React.FC = () => {
    const jumboRef = useRef<HTMLInputElement | null>(null);
    const timeline = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

    useEffect(() => {
        timeline
            .to(jumboRef.current, {
                opacity: 1,
                x: 0
            }, "+=1")
    });

    return <>
        <ScrollIndicator/>
        <div className={'d-flex align-items-center justify-content-center h-100'}>
            <div className={'w-75'}>
                <div className={'w-50 animation-test-jumbo'} ref={jumboRef}>
                    <footer className="blockquote-footer">Velkommen</footer>

                    <h3>Jeg er <span className={'primary-marker'}>Alihan Øztürk</span></h3>

                    <small className={'text-muted'}>Contrary to popular belief, Lorem Ipsum is not simply random
                        text.
                        It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia. </small>

                    <div className={'mt-5'}>
                        <Button onClick={() => alert('Test')}>DOWNLOAD CV</Button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Frontpage;
