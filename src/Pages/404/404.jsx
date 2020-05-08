import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { homeRoute } from '../../Config/Navigation/routes';

class PageNotFound extends PureComponent {
    render() {
        return (
            <div>
                <p>
                Uh oh! It looks like the page you are look for cannot be found!
                </p>
                <p><Link to={homeRoute} >Click Here</Link> to return to the home page</p>
            </div>
        );
    }
}

PageNotFound.propTypes = {

};

export default PageNotFound;