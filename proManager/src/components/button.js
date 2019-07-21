import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
// import LinearGradient from "react-native-linear-gradient";
import colors from '../common/colors';
import mesures from '../common/mesures';

function getStartedButton({ onPress, title, loading }) {
  return (
    <Button
      loading={loading}
      onPress={onPress}
      buttonStyle={styles.signUpButton}
      title={title}
    />
  );
}
const styles = StyleSheet.create({
  signUpButton: {
    borderRadius: 5,
    backgroundColor: colors.violetLight,
    height: mesures.buttonHeights,
    marginTop: 20
  }
});
export default getStartedButton;
