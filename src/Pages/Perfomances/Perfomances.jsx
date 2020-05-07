import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Perfomances extends PureComponent {
    render() {
        return (
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7za5-8z6d7M"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        );
    }
}

Perfomances.propTypes = {

};

export default Perfomances;