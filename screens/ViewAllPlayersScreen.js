import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { deletePlayer } from "../redux/playerActions";
import { globalStyles } from "../styles/CommonStyles";

const screenWidth = Dimensions.get("window").width;

const ViewAllPlayersScreen = ({ players, deletePlayer, navigation }) => {
  const [sortOrder, setSortOrder] = useState("name");

  const getSortedPlayers = () => {
    if (sortOrder === "score") {
      return players.slice().sort((a, b) => b.score - a.score);
    } else if (sortOrder === "country") {
      return players.slice().sort((a, b) => a.country.localeCompare(b.country));
    } else {
      return players.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const sortedPlayers = getSortedPlayers();

  const confirmDelete = (player) => {
    Alert.alert(
      "Confirm Delete",
      `Do you want to delete ${player.name} from ${player.country}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deletePlayer(player.id) },
      ]
    );
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={styles.sortButtonsContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOrder("name")}
        >
          <Text style={styles.sortButtonText}>Sort by Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOrder("country")}
        >
          <Text style={styles.sortButtonText}>Sort by Country</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOrder("score")}
        >
          <Text style={styles.sortButtonText}>Sort by Score</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.playersList]}>
        {players.length === 0 ? (
          <Text style={[styles.defaultText]}>No players added yet.</Text>
        ) : (
          <FlatList
            data={sortedPlayers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("EditPlayer", { player: item });
                  }}
                >
                  <Text style={[styles.listItem, styles.nameW]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.listItem, styles.countryW]}>
                  {item.country}
                </Text>
                <Text style={[styles.listItem, styles.scoreW]}>
                  Score: {item.score}
                </Text>
                <TouchableOpacity onPress={() => confirmDelete(item)}>
                  <Image
                    source={require("../assets/delete.png")}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddPlayer")}
        style={[globalStyles.button]}
      >
        <Text style={globalStyles.buttonText}>Add Player</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlayer: (playerId) => dispatch(deletePlayer(playerId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAllPlayersScreen);

const styles = StyleSheet.create({
  defaultText: {
    color: "#fff",
    fontSize: 15,
  },
  playersList: {
    flex: 0.9,
  },
  buttonContainer: {
    flex: 0.1,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
    width: screenWidth * 0.9,
  },
  listItem: {
    color: "#fff",
    fontSize: 18,
  },
  image: {
    width: 25,
    height: 30,
  },
  scoreW: {
    width: screenWidth * 0.3,
  },
  nameW: {
    width: screenWidth * 0.3,
  },
  countryW: {
    width: screenWidth * 0.1,
  },
  sortButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
  sortButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  sortButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
