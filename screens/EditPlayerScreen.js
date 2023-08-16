import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { updatePlayer } from "../redux/playerActions";
import { globalStyles } from "../styles/CommonStyles";
import { countryCodes } from "../common/countryData";
import { Picker } from "@react-native-picker/picker";

const EditPlayerScreen = ({ navigation, player, updatePlayer }) => {
  const [name, setName] = useState(player.name);
  const [country, setCountry] = useState(player.country);
  const [score, setScore] = useState(player.score.toString());

  const savePlayerChanges = () => {
    if (name && country && score) {
      const updatedPlayer = {
        ...player,
        name,
        country,
        score: parseInt(score),
      };
      updatePlayer(updatedPlayer);
      navigation.goBack();
    }
  };

  return (
    <View style={[globalStyles.container]}>
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
          onPress={savePlayerChanges}
          style={[globalStyles.button, globalStyles.mt20]}
        >
          <Text style={globalStyles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    paddingLeft: 0,
  },
});

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.navigation.state;
  const player = params ? params.player : null;
  return {
    player,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayer: (player) => dispatch(updatePlayer(player)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerScreen);
