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
import { globalStyles, screenWidth } from "../styles/CommonStyles";
import { countryCodes } from "../common/countryData";
import { Picker } from "@react-native-picker/picker";

const AddPlayerScreen = ({ navigation, addPlayer }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState(null);
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
      <View style={globalStyles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          maxLength={15}
          style={[globalStyles.textInput]}
        />

        <TextInput
          placeholder="Score"
          value={score}
          onChangeText={setScore}
          keyboardType="numeric"
          style={[globalStyles.textInput]}
        />
        <View style={[globalStyles.textInput, styles.picker]}>
          <Picker
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
            mode="dropdown"
          >
            <Picker.Item
              label="Select Country"
              value=""
              style={{ color: "#8e8e8e" }}
            />
            {countryCodes.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          onPress={savePlayer}
          style={[globalStyles.button, globalStyles.mt20]}
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
  picker: {
    paddingLeft: 0,
  },
});
