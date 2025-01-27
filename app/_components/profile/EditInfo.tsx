import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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

type NavigationProp = StackNavigationProp<RootStackParamList, "EditInfo">;

function EditInfo() {
  const navigation = useNavigation<NavigationProp>();
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
        <TouchableOpacity>
          <FontAwesome
            name="chevron-left"
            size={25}
            onPress={() => navigation.navigate("ProfilePage")}
          ></FontAwesome>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Edit Info</Text>
        <View style={{ width: 30 }} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text
          style={{ textAlign: "left", padding: 10, width: 70, marginLeft: 8 }}
        >
          Name :
        </Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter Name"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text
          style={{ textAlign: "left", padding: 10, width: 70, marginLeft: 8 }}
        >
          E-mail :
        </Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter Email"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
            marginLeft: 10,
          }}
        >
          <Text style={{ textAlign: "left", width: 55, marginLeft: 8 }}>
            Phone
          </Text>
          <Text style={{ textAlign: "left", width: 55, marginLeft: 8 }}>
            num :
          </Text>
        </View>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter phone no"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text
          style={{ textAlign: "left", padding: 10, width: 70, marginLeft: 8 }}
        >
          Height :
        </Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter Height"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text
          style={{ textAlign: "center", padding: 10, width: 70, marginLeft: 8 }}
        >
          Weight:
        </Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter Weight"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text
          style={{ textAlign: "center", padding: 10, width: 70, marginLeft: 8 }}
        >
          Age :
        </Text>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
          }}
          placeholder="Enter Age"
        ></TextInput>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#26C3A6",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 25,
          width: 60,
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <View>
          <Text>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default EditInfo;
