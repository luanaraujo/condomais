import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

const logout = (navigation) => {
  AsyncStorage.removeItem("TOKEN");
  navigation.reset({
    index: 0,
    routes: [{ name: "Login" }],
  });
};

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text></Text>
      <Button
        title="Logout"
        icon={{
          name: "logout",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        buttonStyle={specificStyle.button}
        onPress={() => logout(navigation)}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Mural do Condomínio"
        component={Feed}
        options={{
          tabBarLabel: "Mural do Condomínio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notifications}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const specificStyle = StyleSheet.create({
  button: {
    backgroundColor: "#4ba7ea",
    borderRadius: 30,
    marginHorizontal: 50,
    marginVertical: 10,
    height: 50,
    width: 300,
  },
  logo: {
    width: 150,
    height: 190,
    marginBottom: 15,
  },
});
