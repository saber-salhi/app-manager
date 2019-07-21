import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../common/colors";
function Boolets({ bg, arr, index }) {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: -20,
      marginBottom: 10
    }
  });
  const imagesArr = arr.map((item, idx) => {
    return (
      <View
        key={idx}
        style={{
          width: idx === index ? 10 : 6,
          height: idx === index ? 10 : 6,
          backgroundColor: idx === index ? colors.violetMedium : colors.gray,
          marginLeft: idx === 0 ? 0 : 10,
          borderRadius: 5
        }}
      />
    );
  });
  return (
    <View style={{ height: 10 }}>
      <View style={styles.wrapper}>{imagesArr}</View>
    </View>
  );
}

export default Boolets;
