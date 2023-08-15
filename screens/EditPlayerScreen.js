import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { updatePlayer } from "../redux/playerActions";
import { globalStyles } from "../styles/CommonStyles";

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
      <Text>Edit Player</Text>
      <TextInput value={name} onChangeText={setName} maxLength={15} />
      <TextInput value={country} onChangeText={setCountry} maxLength={2} />
      <TextInput value={score} onChangeText={setScore} keyboardType="numeric" />
      <TouchableOpacity onPress={savePlayerChanges}>
        <Text>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { player } = ownProps.route.params;
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
