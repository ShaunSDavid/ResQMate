import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  FirstAidList: undefined;
  FirstAid: { type: string };
  ProfilePage: undefined;
  EditInfo: undefined;
  Map: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Dashboard">;

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Find your desired health solution</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search doctor, drugs, articles..."
          placeholderTextColor="#B0B0B0"
        />
      </View>

      {/* Categories Section */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Category</Text>
        <View style={styles.categories}>
          {[
            {
              name: "Symptom Check",
              icon: require("@/assets/icons/symptom-icon.png"),
              route: "FirstAidList",
            },
            {
              name: "SoS",
              icon: require("@/assets/icons/sos-icon.png"),
              route: "Dashboard",
            },
            {
              name: "Image Sensing",
              icon: require("@/assets/icons/image-sensing-icon.png"),
              route: "Dashboard",
            },
            {
              name: "Voice Command",
              icon: require("@/assets/icons/voice-command-icon.png"),
              route: "Dashboard",
            },
            {
              name: "Hospital",
              icon: require("@/assets/icons/hospital-icon.png"),
              route: "Map",
            },
          ].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => {
                if (category.route == "FirstAidList") {
                  navigation.navigate("FirstAidList");
                } else if (category.route == "Map") {
                  navigation.navigate("Map");
                } else {
                  navigation.navigate("Dashboard");
                }
              }}
            >
              <Image
                source={category.icon}
                style={styles.categoryIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#0F6D66" />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              setLoading(true);
              try {
                await FIREBASE_AUTH.signOut();
                navigation.replace("Login"); // Ensures the user cannot navigate back to Dashboard after logout
              } catch (error: any) {
                alert("Logout failed: " + error.message);
              } finally {
                setLoading(false);
              }
            }}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#333",
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: width / 3 - 30, // Adjusted for consistent alignment
    alignItems: "center",
    marginBottom: 20,
  },
  categoryIcon: {
    width: 100, // Adjusted for proportional sizing
    height: 100,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0F6D66",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dashboard;
