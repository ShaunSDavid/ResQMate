import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Link, useRouter } from "expo-router";

const profileImg = require("@/assets/images/photo.jpeg");
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  FirstAidList: undefined;
  FirstAid: { type: string };
  ProfilePage: undefined;
  EditInfo: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "ProfilePage">;

const ProfilePage = () => {
  const navigation = useNavigation<NavigationProp>();
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

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
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="chevron-left" size={25} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Your Profile</Text>
        <View style={{ width: 20 }} />
      </View>

      <View
        style={{
          alignItems: "center",
          paddingVertical: 40,
          backgroundColor: "#26C3A6",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Image
          source={profileImg}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}>
          Amelia Renata
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
          {/* <Link href="/EditInfo">
            <Text style={{ fontSize: 16, color: "#333" }}>My Information</Text>
          </Link> */}
          <Text style={{ fontSize: 16, color: "#333" }}>My Information</Text>
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

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#FF6B6B",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 16, color: "#FF6B6B" }}>Logout</Text>
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
