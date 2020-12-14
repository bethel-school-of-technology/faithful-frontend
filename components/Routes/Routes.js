import Header from '../Header/Header';
import Occupations from '../Occupations/Occupations';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react'
import '../Routes/Routes.css';


class Routes extends React.Component {
    
    render() {
        return (
        <Router>
            <div>
                <nav className="navbar">
                    <div>
                        <Link to='/'><a>Cash Flow Tracker</a></Link>
                    </div>
                    <div>
                        <Link to='/incomesources'><a>Income Sources</a></Link>
                    </div>
                </nav>
                <Route exact path='/' component={Header} />
                <Route path='/incomesources' component={Occupations} />
            </div>
        </Router>
        )
    }
}

export default Routes;