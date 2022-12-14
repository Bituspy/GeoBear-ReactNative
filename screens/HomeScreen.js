import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Image,
  Alert,
  Button,
  TextInput
} from "react-native";
import { auth } from '../firebase'
import Topbar from '../components/topbar';
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {




  const navigation = useNavigation()

  const [searchKW, setSearchKW] = useState("");
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [validData,setValidData] = useState(false);

       const getCountryData = () => {
        if (searchKW == "") { return false; }
     fetch("https://restcountries.com/v2/name/" + searchKW)
       .then((response) => response.json())
       .then((json) => {
         setData(json);
       })
       .catch((error) => 
        console.error(error))
       .finally(() => setLoading(false));
   }
       
 
if (isLoading) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Topbar />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={[styles.TextFieldContainer]}>
            <Icon name="search-web" style={styles.iconStyle}></Icon>
            <TextInput
              placeholder={"Enter a country name"}
              style={styles.inputStyle}
              onChangeText={(text) => setSearchKW(text)}
              value={searchKW}
              underlineColorAndroid="transparent"
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={getCountryData}
              style={[styles.button, styles.buttonstyle1]}
            >
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Topbar />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={[styles.TextFieldContainer]}>
            <Icon name="search-web" style={styles.iconStyle}></Icon>
            <TextInput
              placeholder={"Enter a country name"}
              style={styles.inputStyle}
              onChangeText={(text) => setSearchKW(text)}
              value={searchKW}
              underlineColorAndroid="transparent"
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={getCountryData}
              style={[styles.button, styles.buttonstyle1]}
            >
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
          <View style={styles.cardView}>
            <View style={styles.container}>
              <View style={styles.countryCard}>
                <Image
                  source={{ uri: data[0].flags["png"] }}
                  style={styles.logo}
                />
                <Text>Country name :</Text>
                <Text style={styles.countryName}>{data[0].name}</Text>
                <Text>Country capital :</Text>
                <Text style={styles.countryInfo}>{data[0].capital}</Text>
                <Text>Country language :</Text>
                <Text style={styles.countryInfo}>
                  {data[0].languages[0].name}
                </Text>
                <Text>Country region :</Text>
                <Text style={styles.countryInfo}>{data[0].region}</Text>
                <Text>Country subregion :</Text>
                <Text style={styles.countryInfo}>{data[0].subregion}</Text>
                <Text>Country currency :</Text>
                <Text style={styles.countryInfo}>
                  {data[0].currencies[0].code} | {data[0].currencies[0].name}
                </Text>
              </View>
            </View>
          </View>
      </ScrollView>
    </View>
  );
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  cardView: {
    backgroundColor: "rgba(67,128,202,1)",
    width: 350,
    height: 350,
    shadowColor: "rgb(50,50,50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 350,
    height: 350,
    marginLeft: 12,
    marginTop: 28,
    opacity: 1,
    transform: [{ scale: 1.0 }],
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    paddingBottom: "80%",
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonKW: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: Platform.OS === "ios" ? "Avenir Next" : "Roboto",
  },
  countryCard: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  countryName: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    margin: 5,
  },
  countryInfo: {
    color: "white",
    fontSize: 18,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  historyContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  logo: {
    backgroundColor: "black",
    width: 66,
    height: 58,
  },
  TextFieldContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 5,
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  },
  buttonContainer: {
    height: 36,
    width: 286,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#06cab5",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "35%",
  },
  buttonstyle1: {
    height: 36,
    width: 286,
    marginTop: 2,
    backgroundColor: "rgba(67,128,202,1)",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    minHeight: 15,
  },
});
