import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/CommonStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.ImageContainer}>
        <Image source={require("../assets/HomeImage.png")} />
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
    flex: 0.1,
  },
  ImageContainer: {
    flex: 0.8,
    alignItems: "center",
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
    width: 140,
    fontSize: 25,
  },
});

export default HomeScreen;
