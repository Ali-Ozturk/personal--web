import React from "react";
import {Col, Row} from "react-bootstrap";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {

    return (
        <Row className={'fixed-bottom'}>
            <Col className={'m-5 footer-icons'}>
                <a target={'_blank'} href={'https://www.linkedin.com/in/alihanozturkdk/'} className={'m-1 h5'} rel="noreferrer"> <FaLinkedin/> </a>
                <a target={'_blank'} href={'https://github.com/Ali-Ozturk'} className={'m-1 h5'} rel="noreferrer"> <FaGithub/> </a>
                <a target={'_blank'} href={'https://www.instagram.com/aliyo/'} className={'m-1 h5'} rel="noreferrer"> <FaInstagram/> </a>
            </Col>
        </Row>);
}

export default Footer;
