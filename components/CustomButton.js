import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function CustomButton({ title, onPress, color, height, width }) {
  return (
  <TouchableOpacity 
    style={{ 
      backgroundColor: color,
      height: height,
      width: width,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
      }} 
    onPress={onPress}>
  <Text 
    style={{
      color: 'white',
      fontSize: 24,
    }}>
    {title}
  </Text>
</TouchableOpacity>);
}

export default CustomButton;