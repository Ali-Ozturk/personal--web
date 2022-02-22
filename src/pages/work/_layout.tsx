import React from 'react';
import {withRouter} from "react-router";
import NavigationBar from "../../components/NavigationBar";

const NavbarWithRouterProps = withRouter(NavigationBar);

// TODO: Fix issues regarding the navbar hides upon load

const WorkPageLayout: React.FC = ( { children }) => {
    return (
        <div>
            <NavbarWithRouterProps/>
            {children}
        </div>
    );
};

export default WorkPageLayout;