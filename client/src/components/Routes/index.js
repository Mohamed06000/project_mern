import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Home from "../../pages/Home";
import Navbar from "../Navbar";
import LeftNav from "../LeftNav";

const Index = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/profil"} exact component={Profil} />
                <Route path={"/trending"} exact component={Trending} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default Index;