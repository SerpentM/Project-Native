import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Lower() {
  const [state1, setLogin] = useState(true);
  const [state2, setRegister] = useState(false);
  return (
    <View style={styles.bottomView}>
      <View style={styles.top}>
        <Text style={{ color: "#FF8252" }}>Welcome Back to IMMINN!</Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: ("bold", "600"),
            paddingBottom: 30,
          }}
        >
          Let's Login into your Account!
        </Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Text
            style={state1 ? styles.button : styles.noButton}
            onPress={() => {
              setLogin(true);
              setRegister(false);
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={state2 ? styles.button : styles.noButton}
            onPress={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={{ fontSize: 10, paddingleft: 10, paddingBottom: 10 }}>
          E-Mail Address
        </Text>
        <TextInput
          placeholder="Enter your E-mail"
          style={styles.input}
        ></TextInput>
        <Text style={{ fontSize: 10, paddingleft: 10, paddingBottom: 10 }}>
          Password
        </Text>
        <TextInput
          placeholder="Enter Your Password"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.button2}>{state1 ? "Login " : "Register"}</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    marginBottom: 0,
    paddingBottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
  },
  top: {
    padding: 20,
  },
  nav: {
    width: 300,
    height: 60,
    backgroundColor: "rgba(255, 130, 82, 0.1)",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF8252",
    color: "#FFF",
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    width: 142,
    height: "89%",
    borderRadius: 50,
    fontSize: 20,
    paddingRight: 30,
    paddingLeft: 30,
    shadowColor: "black",
    textShadowRadius: 10,
    shadowOffset: { width: 20, height: 20 },
  },
  noButton: {
    color: "#FF8252",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    color: "#FF8252",
    opacity: 0.6,
    paddingRight: 30,
    paddingLeft: 30,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "80%",
    paddingLeft: 10,
  },
  input: {
    borderRadius: 50,
    borderColor: "#FF8252",
    width: 280,
    height: 50,
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    textAlign: "center",
  },
  button2: {
    borderRadius: 50,
    width: 200,
    height: 50,
    marginTop: 20,
    textAlign: "center",
    color: "#FFF",
    textAlignVertical: "center",
    backgroundColor: "#FF8252",
    fontSize: 20,
    textShadowRadius: 10,
    alignSelf: "center",
  },
});

export default Lower;
