import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import { withRouter } from "react-router";
import ScrollIndicator from "../ScrollIndicator";

const NavbarWithRouterProps = withRouter(NavigationBar);

const MainLayout: React.FC = ({children}) => {

    return (
        <Container fluid className={'vh-100'}>
            <NavbarWithRouterProps/>
            {children}
            <Footer/>
        </Container>
    )
}

export default MainLayout;
