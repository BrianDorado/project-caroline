import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import './Perfomances.scss'

class Performances extends PureComponent {
    render() {
        return (
          <div className='performances-video-container' >
            <iframe
              title='Brooke Larson'
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

// Performances.propTypes = {

// };

export default Performances;