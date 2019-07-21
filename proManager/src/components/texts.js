import React from 'react';
import {
 View, StyleSheet, Text, Platform 
} from 'react-native';
import colors from '../common/colors';

const welcomeMessage = Platform.select({
  ios: 'Welcome to Manager App',
  android: 'Welcome to Manager Ap'
});

const subTitle = Platform.select({
  ios: 'The best Application for discover talents',
  android: 'The best Application for discover talents'
});
function Texts({ isHome }) {
  return (
    <View style={styles.wrapperTexts}>
      <Text style={styles.welcome}>{welcomeMessage}</Text>
      {isHome && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapperTexts: {},
  welcome: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    fontSize: 30,
    color: colors.titlesColor,
    width: 250,
    paddingBottom: 10
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'Rubik-Light',
    fontSize: 20,
    color: colors.gray1,
    width: 250,
    paddingBottom: 30
  }
});
export default Texts;
