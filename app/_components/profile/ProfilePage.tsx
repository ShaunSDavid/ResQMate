import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import { Link, useRouter } from "expo-router";

const profileImg = require("@/assets/images/photo.jpeg");
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Dashboard from "../dashboard/Dashboard";
import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ProfilePage: undefined;
  EditInfo: undefined;
  Dashboard: undefined;
  Chatbot: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "ProfilePage">;

const ProfilePage = () => {
  const navigation = useNavigation<NavigationProp>();
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = FIREBASE_AUTH.currentUser;
      if (!user) {
        navigation.replace("Login");
        return;
      }
      try {
        const userRef = doc(FIREBASE_DB, "users", user.email!);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUsername(userData.name);
        } else {
          setUsername("User");
        }
      } catch (error: any) {
        alert("Error fetching Profile :" + error.message);
      } finally {
        setFetching(false);
      }
    };

    fetchUserData();
  }, []);

  const confirmLogout = () => {
    setModalVisible(false);
    console.log("Logged out");
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E6F5F1" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 75,
          marginBottom: 10,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <FontAwesome name="chevron-left" size={25} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Your Profile</Text>
        <View style={{ width: 20 }} />
      </View>

      <View
        style={{
          alignItems: "center",
          paddingVertical: 40,
          backgroundColor: "#0F6D66",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Image
          source={profileImg}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}>
          {username}
        </Text>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("EditInfo")}
        >
          <Text style={{ fontSize: 16, color: "#333" }}>Edit Information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#333" }}>
            Diagnostics History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <FontAwesome name="comment-o" size={24} color="#999999" />
          <Text style={styles.navText}>Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <FontAwesome name="home" size={24} color="#999999" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <FontAwesome name="user" size={24} color="#0F6D66" />
          <Text style={styles.activeNavText}>Mine</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelLogout}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Confirm Logout
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Are you sure you want to logout?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Pressable
                onPress={cancelLogout}
                style={{
                  flex: 1,
                  marginRight: 10,
                  paddingVertical: 10,
                  backgroundColor: "#26C3A6",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={confirmLogout}
                style={{
                  flex: 1,
                  marginLeft: 10,
                  paddingVertical: 10,
                  backgroundColor: "#FF6B6B",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    height: 60,
    paddingBottom: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
  navText: {
    fontSize: 12,
    color: "#999999",
    marginTop: 4,
  },
  activeNavText: {
    fontSize: 12,
    color: "#0F6D66",
    fontWeight: "bold",
    marginTop: 4,
  },
});
