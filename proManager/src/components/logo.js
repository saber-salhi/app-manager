import { View, Image } from 'react-native';
import React from 'react';
import srcImage from '../../assets/images/logo.png';

function Logo({ width, height, styles }) {
  return (
    <View style={styles}>
      <Image style={{ width, height }} source={srcImage} />
    </View>
  );
}

export default Logo;
