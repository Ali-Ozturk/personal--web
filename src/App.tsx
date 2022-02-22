import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import MainLayout from "./components/_layout/MainLayout";
import Frontpage from "./pages/Frontpage";
import Testpage from "./pages/Testpage";
import 'tippy.js/dist/tippy.css';
import KopraPage from "./pages/work/KOPRA/KOPRA";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Frontpage}/>
                <Route exact path={'/test'} component={Testpage}/>
                <Route exact path={'/kopra'} component={KopraPage}/>

                <MainLayout>
                    <Route exact path={'/'} component={Frontpage}/>
                </MainLayout>
            </Switch>
        </Router>
    );
}

export default App;
