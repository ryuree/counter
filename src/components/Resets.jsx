import React from 'react';
import {Reset} from '../styled'

const Resets = ({ child, onHandling }) => {
  return <Reset type='button' onClick={onHandling}>{child}</Reset>
};

export default Resets