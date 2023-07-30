import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Header from './components/Header'; 
import AboutMe from './components/AboutMe'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Resume from './components/Resume'; 

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </Router>
    ); 
}; 

export default App; 