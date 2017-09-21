import React from 'react';
import PropTypes from 'prop-types';

function Icon(props){
  return(
    <div>
      <span>{props.text}</span>
      <i className={props.styles} aria-hidden="true"></i>
    </div>
  );
}

Icon.propTypes = {
  styles: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Icon;