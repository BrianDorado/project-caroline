import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Navbar.scss'

class Navbar extends PureComponent {
    render() {
        return (
            <nav className = 'navbar'>
                <h1>Brooke Larson</h1>
            <ul>
                <li>Link1</li>
                <li>Link2</li>
            </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar;