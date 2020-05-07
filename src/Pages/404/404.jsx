import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PageNotFound extends PureComponent {
    render() {
        return (
            <div>
                <p>
                Uh oh! It looks like the page you are look for cannot be found!
                </p>
                <p>Click here to return to the home page</p>
            </div>
        );
    }
}

PageNotFound.propTypes = {

};

export default PageNotFound;