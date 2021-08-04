import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Upper() {
  return (
    <View style={styles.upperView}>
      <View style={styles.UpperLeft}>
        <Text style={{ fontWeight: "bold", color: "#FF8252", fontSize: 50 }}>
          i
        </Text>
      </View>
      <View style={styles.UpperRight}>
        <Text style={{ fontSize: 40, color: "#fff", fontWeight: "bold" }}>
          IMINN
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  upperView: {
    backgroundColor: "#FF8252",
    display: "flex",
    flexDirection: "row",
    marginTop: 46.98,
    padding: 20,
    alignItems: "center",
  },
  UpperLeft: {
    height: 40.203956604003906,
    backgroundColor: "#fff",
    width: 20.77534294128418,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
  },
  UpperRight: {
    paddingLeft: 20,
  },
});
export default Upper;
