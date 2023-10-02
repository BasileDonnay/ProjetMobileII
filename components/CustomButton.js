// CustomButton.js

import React from 'react';
import { Button } from 'react-native';

function CustomButton({ title, onPress }) {
  return <Button title={title} onPress={onPress} />;
}

export default CustomButton;