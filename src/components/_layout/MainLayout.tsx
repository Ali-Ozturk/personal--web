import React, {useEffect, useRef} from "react";
import {Container} from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import {withRouter} from "react-router";
import styled from "styled-components";
import svgBackgroundOverlay from "../../assets/images/svg-overlay.svg";
import svgBackground from "../../assets/images/svg-background.svg";
import gsap from "gsap";

const NavbarWithRouterProps = withRouter(NavigationBar);

const MainLayout: React.FC = ({children}) => {
    const timeline = gsap.timeline({defaults: {ease: "power2", duration: 1.5}})
    const refSVGBackground = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        timeline
            .to(refSVGBackground.current, {
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                onComplete: () => {
                    gsap.set(refSVGBackground.current, {'clip-path': 'none'})
                }
            })
    })

    return (
        <>
            <SVGBackground className={'vh-100'} ref={refSVGBackground}>
                <Container fluid>
                    <NavbarWithRouterProps/>
                    {children}
                    <Footer/>
                </Container>
            </SVGBackground>
        </>
    )
}

const SVGBackground = styled.div`
  background: url(${svgBackgroundOverlay}) no-repeat, url(${svgBackground}) no-repeat;
  background-repeat: no-repeat;
  background-position: center top 50%;
  background-size: 100%;
  height: 100%;
  margin: 0;

  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  // clip-path: polygon(0 0, 12% 0, 12% 100%, 0 100%);
`

export default MainLayout;
