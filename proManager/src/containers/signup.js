import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import colors from "../common/colors";
const alreadyHaveAcount = Platform.select({
  ios: "Already have account ?",
  android: "Already have account ?"
});
const singIn = Platform.select({
  ios: " Sign in",
  android: " Sign in"
});
function signInText({ onPress }) {
  return (
    <View style={styles.wrapperTexts}>
      <Text style={styles.already}>
        {alreadyHaveAcount}
        <Text onPress={onPress} style={styles.signInStyles}>
          {singIn}
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapperTexts: {},
  already: {
    textAlign: "center",
    fontFamily: "Rubik-Light",
    fontSize: 16,
    color: colors.gray1,
    width: 250,
    paddingBottom: 15,
    marginTop: 20
  },
  signInStyles: {
    textAlign: "center",
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    color: colors.violet,
    width: 250
  }
});
export default signInText;
