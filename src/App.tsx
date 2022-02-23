import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import MainLayout from "./components/_layout/MainLayout";
import Frontpage from "./pages/Frontpage";
import Testpage from "./pages/Testpage";
import 'tippy.js/dist/tippy.css';
import KopraPage from "./pages/work/KOPRA/KOPRA";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path={'/kopra'} component={KopraPage}/>

                <MainLayout>
                    <Route exact path={'/'} component={Frontpage}/>
                </MainLayout>
            </Switch>
        </Router>
    );
}

export default App;
