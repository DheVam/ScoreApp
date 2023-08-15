import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  debug: {
    borderWidth: 1,
    borderColor: "#0000",
    backgroundColor: "#D3D3D3",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
  },
  button: {
    backgroundColor: "#246BFD", // Blue color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  textInput: {
    width: screenWidth * 0.8,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
