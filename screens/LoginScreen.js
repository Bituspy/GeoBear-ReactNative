import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const GoToRegisterPage = () => {
    navigation.replace("Signup");
  }

  const LoginUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={require("../assets/gblogo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.geoBear}>GeoBear</Text>
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
          onPress={LoginUser}
          style={[styles.button, styles.buttonstyle1]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registertext}>
          If you don't have an account , please register one now!
        </Text>
        <TouchableOpacity
          onPress={GoToRegisterPage}
          style={[styles.button, styles.buttonstyle2]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen

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
  buttonstyle1: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "#06cab5",
  },
  buttonstyle2: {
    height: 36,
    width: 286,
    marginTop: 15,
    backgroundColor: "rgba(55,55,55,1)",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
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
  registertext: {
    color: "#121212",
    marginTop: 20,
    fontSize: 12,
    alignSelf: "center",
  },
});
