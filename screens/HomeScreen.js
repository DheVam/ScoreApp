import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  globalStyles,
  screenWidth,
  screenHeight,
} from "../styles/CommonStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.welcomeText}>Welcome To The Score App</Text>
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/HomeImage.png")}
          style={styles.heroImage}
        />
        <Text style={styles.introText}>Universal Score Application</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("ViewAllPlayers")}
        >
          <Text style={globalStyles.buttonText}>View All Players</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("AddPlayer")}
        >
          <Text style={globalStyles.buttonText}>Add Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    flex: 0.05,
  },
  ImageContainer: {
    flex: 0.85,
    alignItems: "center",
  },
  heroImage: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
  },
  buttonContainer: {
    flex: 0.1,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },

  introText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 25,
    marginTop: 15,
  },
});

export default HomeScreen;
