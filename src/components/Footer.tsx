import React, {useEffect, useRef} from "react";
import {Col, Row} from "react-bootstrap";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import gsap from "gsap";

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLInputElement | null>(null);
    const timeline = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

    useEffect(() => {
        timeline
            .to(footerRef.current, {
                opacity: 1,
                x: 0
            }, "+=3")
    });

    return (
        <Row className={'fixed-bottom'}>
            <Col className={'m-5 footer-icons animation-test-footer'} ref={footerRef}>
                <a target={'_blank'} href={'https://www.linkedin.com/in/alihanozturkdk/'} className={'m-1 h6'}
                   rel="noreferrer"> <FaLinkedin/> </a>
                <a target={'_blank'} href={'https://github.com/Ali-Ozturk'} className={'m-1 h6'} rel="noreferrer">
                    <FaGithub/> </a>
                <a target={'_blank'} href={'https://www.instagram.com/aliyo/'} className={'m-1 h6'} rel="noreferrer">
                    <FaInstagram/> </a>
            </Col>
        </Row>);
}

export default Footer;
