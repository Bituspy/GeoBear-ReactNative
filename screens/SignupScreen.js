import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import { auth } from '../firebase'

const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const GoBack = () => {
    navigation.replace("Login");
  }

  const RegisterAccount = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Registered successfully!');
        navigation.replace("Login");
      })
      .catch(error => alert(error.message))
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={require("../assets/gblogo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.geoBear}>GeoBear - Register an account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={RegisterAccount}
          style={[styles.button, styles.buttonStyle1]}
        >
          <Text style={styles.buttonTextStyle}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={GoBack}
          style={[styles.button, styles.buttonStyle2]}
        >
          <Text style={styles.buttonTextStyle}>Go back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    height: 36,
    width: 286,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#06cab5",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle1: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "rgba(55,55,55,1)",
  },
  buttonStyle2: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "rgba(155,155,155,1)",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    minHeight:12,
  },

  image: {
    width: 200,
    height: 153,
    marginBottom: 15,
  },
  geoBear: {
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
  },
});
