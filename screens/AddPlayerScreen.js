import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { addPlayer } from "../redux/playerActions";
import { globalStyles } from "../styles/CommonStyles";

const AddPlayerScreen = ({ navigation, addPlayer }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");

  const savePlayer = () => {
    if (name && country && score) {
      const newPlayer = {
        id: Date.now(),
        name,
        country,
        score: parseInt(score),
      };
      addPlayer(newPlayer);
      navigation.goBack();
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          maxLength={15}
          style={[globalStyles.textInput]}
        />
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
          maxLength={2}
          style={[globalStyles.textInput]}
        />
        <TextInput
          placeholder="Score"
          value={score}
          onChangeText={setScore}
          keyboardType="numeric"
          style={[globalStyles.textInput]}
        />
        <TouchableOpacity
          onPress={savePlayer}
          style={[globalStyles.button, styles.button]}
        >
          <Text style={globalStyles.buttonText}>Save Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (player) => dispatch(addPlayer(player)),
  };
};

export default connect(null, mapDispatchToProps)(AddPlayerScreen);

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 10,
    alignItems: "center",
  },
  button: {
    marginTop: 20,
  },
});
