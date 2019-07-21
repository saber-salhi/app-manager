import React from 'react';
import { StyleSheet, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Tile } from 'react-native-elements';

function renderItems({ item }) {
  return (
    <Tile
      containerStyle={styles.slide}
      featured
      imageSrc={item.url}
      overlayContainerStyle={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
      title={item.desc}
    />
  );
}
export default function Slider({ onSnapToItem, entries }) {
  return (
    <View style={{ height: 250, width: '100%' }}>
      <Carousel
        autoplay
        autoplayDelay={2000}
        autoplayInterval={4000}
        data={entries}
        enableSnap
        itemWidth={380}
        loop
        onSnapToItem={onSnapToItem}
        renderItem={renderItems}
        sliderHeight={300}
        sliderWidth={380}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row'
  }
});
