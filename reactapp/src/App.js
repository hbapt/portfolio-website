import React from 'react';
import Home from './Home';
import MenuScreen from './MenuScreen';
import NoScreen from './NoScreen';
import AboutScreen from './AboutScreen';
import ProjectsScreen from './ProjectsScreen';
import ContactScreen from './ContactScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/menu" component={MenuScreen} />
                <Route path="/no" component={NoScreen} />
                <Route path="/about" component={AboutScreen} />
                <Route path="/projects" component={ProjectsScreen} />
                <Route path="/contact" component={ContactScreen} />
            </Switch>
        </Router>
    );
}

export default App;
