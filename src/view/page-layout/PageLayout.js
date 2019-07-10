import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Home } from "./home/Home";
import { Profile } from "./profile/Profile";
import { Settings } from "./settings/Settings";

export default class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="container fluid">
                    <div>
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/home'} className="nav-link"> Home </Link></li>
                                <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
                                <li><Link to={'/settings'} className="nav-link">Settings</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-9">
                            <Switch>
                                <Route exact path='/home' component={Home} />
                                <Route path='/profile' component={Profile} />
                                <Route path='/settings' component={Settings} />
                            </Switch>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}