import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View,Alert} from "react-native";
import { Icon } from "@rneui/themed";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const Topbar = () => {

   const createTwoButtonAlert = () =>
     Alert.alert(
       "GeoBear Auth",
       "You are logged in as : " + auth.currentUser?.email,
       [
         {
           text: "Logout?",
           onPress: () => handleSignOut(),
           style: "cancel",
         },
         { text: "Stay connected", onPress: () => console.log("OK Pressed") },
       ]
     );

   const navigation = useNavigation();

     const handleSignOut = () => {
       auth
         .signOut()
         .then(() => {
           navigation.replace("Login");
         })
         .catch((error) => alert(error.message));
     };


  return (
    <View style={styles.topb}>
      <TouchableOpacity onPress={() => createTwoButtonAlert()}>
        <Icon
          name="user"
          type="font-awesome"
          color="#fff"
          style={styles.test}
        />
      </TouchableOpacity>
      <Text style={styles.test}>GeoBear - Know your world!</Text>
      <TouchableOpacity onPress={() => console.log("test2")}>
        <Icon
          name="info"
          type="font-awesome"
          color="#fff"
          style={styles.test}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topb: {
    alignSelf: "stretch",
    height: 62,
    flexDirection: "row", // row
    backgroundColor: "rgba(67,128,202,1)",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  test : {
    marginTop: 10
  }
});

export default Topbar;
