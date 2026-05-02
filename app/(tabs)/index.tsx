// Edited by: Joshua Domingo
// Date: May 3, 2026
// Changes: Created Profile Card UI with image, name, course, and bio

import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../assets/images/joshuaprofile.jpg")}
        style={styles.image}
      />

      <Text style={styles.name}>Joshua Gabrielle D. Domingo</Text>

      <Text style={styles.course}>Multimedia Arts</Text>

      <Text style={styles.bio}>
        MMA Student learning Mobile App Development.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  course: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
  bio: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});