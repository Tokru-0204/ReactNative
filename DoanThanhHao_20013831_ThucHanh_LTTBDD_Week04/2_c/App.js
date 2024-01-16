import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [includePasswordLength, setIncludePasswordLength] = useState("");
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
  const [inputPasswordLength, setinputPasswordLength] = useState("");

  function vailidInput() {
    if (isNaN(includePasswordLength) || includePasswordLength <= 0) {
      alert("invalid password");
      return false;
    }

    if (
      !(
        includeLowerCase ||
        includeUpperCase ||
        includeNumbers ||
        includeSpecialSymbols
      )
    ) {
      alert("Please check at least one option");
      return false;
    }

    return true;
  }

  function password() {
    if (vailidInput()) {
      let characterSet = "";

      if (includeLowerCase) characterSet += "abcdefghijklmnopqrstuvwxyz";
      if (includeUpperCase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeNumbers) characterSet += "0123456789";
      if (includeSpecialSymbols) characterSet += "!@#$%^&*()_+[]{}|;:,.<>?";

      let password = "";
      for (let i = 0; i < includePasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
      }

      setinputPasswordLength(password);
    }
  }

  return (
    <View
      style={{
        background: "rgb(196,196,196)",
        background:
          "linear-gradient(90deg, rgba(196,196,196,1) 0%, rgba(59,59,152,0.7596288515406162) 0%, rgba(59,59,152,1) 50%, rgba(59,59,152,0.5691526610644257) 100%, rgba(179,179,191,1) 100%)",
        width: "100%",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>PASSWORD{"\n"}GENERATOR</Text>
        <TextInput value={inputPasswordLength} style={styles.passwordOutput} />

        <View style={styles.checkbox}>
          <Text style={styles.checkboxContent}>Password length</Text>
          <TextInput
            keyboardType="numeric"
            value={includePasswordLength}
            onChangeText={setIncludePasswordLength}
            style={styles.inputPasswordLength}
          />
        </View>
        <View style={styles.checkbox}>
          <Text style={styles.checkboxContent}>Include lower case letters</Text>
          <TouchableOpacity
            onPress={() => setIncludeLowerCase((prevState) => !prevState)}
          >
            <View style={styles.customCheckbox}>
              {includeLowerCase && (
                <AntDesign name="check" size={20} color="#000" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.checkbox}>
          <Text style={styles.checkboxContent}>Include upcase letters</Text>
          <TouchableOpacity
            onPress={() => setIncludeUpperCase((prevState) => !prevState)}
          >
            <View style={styles.customCheckbox}>
              {includeUpperCase && (
                <AntDesign name="check" size={20} color="#000" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.checkbox}>
          <Text style={styles.checkboxContent}>Include number</Text>
          <TouchableOpacity
            onPress={() => setIncludeNumbers((prevState) => !prevState)}
          >
            <View style={styles.customCheckbox}>
              {includeNumbers && (
                <AntDesign name="check" size={20} color="#000000" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.checkbox}>
          <Text style={styles.checkboxContent}>Include special symbol</Text>
          <TouchableOpacity
            onPress={() => setIncludeSpecialSymbols((prevState) => !prevState)}
          >
            <View style={styles.customCheckbox}>
              {includeSpecialSymbols && (
                <AntDesign name="check" size={20} color="#000000" />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.passwordButton}
          onPress={() => password()}
        >
          <Text style={styles.passwordButtonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "80%",
    margin: 20,
    borderRadius: 20,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#23235B",
  },
  header: {
    fontSize: 25,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },
  passwordOutput: {
    width: 297,
    height: 55,
    fontSize: 25,
    color: "#ffffff",
    backgroundColor: "#151537",
    padding: 5,
  },
  checkbox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customCheckbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxContent: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  inputPasswordLength: {
    width: 118,
    height: 33,
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 5,
  },
  passwordButton: {
    backgroundColor: "#3B3B98",
    justifyContent: "center",
    alignItems: "center",
    width: 269,
    height: 55,
  },
  passwordButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 700,
  },
});
