import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import './Navbar.scss'
import { performancesRoute, homeRoute } from '../../Config/Navigation/routes';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className = 'navbar'>
                <h1>Brooke Larson</h1>
            <ul>
                <li> <Link to ={homeRoute}>Home</Link> </li>
                <li> <Link>About</Link> </li>
                <li> <Link>Publications</Link> </li>
                <li> <Link to={performancesRoute}>Perfomance</Link> </li>
                <li> <Link>Contact</Link> </li>

            </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
// here is a comment about proptypes
};

export default Navbar;