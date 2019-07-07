import React from 'react';
import {Button} from '../styled'

const Buttons = ({ children, color, onHandle }) => {
  return <Button type='button' color={color} onClick={onHandle}>{children}</Button>
};

export default Buttons