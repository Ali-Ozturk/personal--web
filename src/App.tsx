import React from 'react';
import './styles/App.scss';
import {Route, BrowserRouter as Router, Switch,} from "react-router-dom";
import MainLayout from "./components/_layout/MainLayout";
import Frontpage from "./pages/Frontpage";
import Testpage from "./pages/Testpage";



function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Frontpage}/>
                <Route exact path={'/test'} component={Testpage}/>

                <Route>
                    <MainLayout>
                        <Switch>
                            <Route exact path={'/'} component={Frontpage}/>
                        </Switch>
                    </MainLayout>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
