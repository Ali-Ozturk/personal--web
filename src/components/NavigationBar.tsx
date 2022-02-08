import React, {useRef, useEffect} from "react";
import {Col, Nav, Row} from "react-bootstrap";
import AnimatedLogo from "./logo/logo";
import {RouteComponentProps} from "react-router-dom";
import {Link} from 'react-router-dom';
import gsap from 'gsap';

type PropsFromParent = RouteComponentProps & {}

const NavigationBar: React.FC<PropsFromParent> = (props) => {
    const {location} = props;
    const logoRef = useRef<HTMLInputElement | null>(null);
    const navRef = useRef<HTMLInputElement | null>(null);

    const timeline = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

    useEffect(() => {
        timeline
            .to(logoRef.current, {
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                opacity: 1,
                y: 0,
                duration: 2.2
            })
            .to(navRef.current, {
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                opacity: 1,
                y: 0
            }, "-=2")
    });

    return (
        <Row className={'fixed-top pt-5'}>
            <Col className={'mx-5'}>
                <div ref={logoRef} className={'animation-test'}>
                    <AnimatedLogo onClick={() => {
                        // TODO: Maybe implement a check. If onFrontpage => scrollTop || else => goto frontpage
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth' // TODO: (?) Use auto instead when smooth scrolling implemented
                        })
                    }}/>
                </div>
            </Col>

            <Col>

            </Col>

            <Col xs={7} className={'d-flex align-items-center justify-content-end'}>
                <Nav activeKey={location.pathname} className="text-uppercase mx-7 animation-test-nav fs-7" ref={navRef}>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey={'/'} to="/">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey={'/about'} to="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey={'/contact'} to="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>);
}

export default NavigationBar;
