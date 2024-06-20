import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/MainStyle";
import "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }],
    });
  };

  const cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Image
        source={require("../assets/condomais.png")}
        style={specificStyle.logo}
      />
      <Input
        placeholder="E-mail"
        leftIcon={{ type: "font-awesome", name: "envelope", size: 18 }}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={{
          name: "check",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        title="Entrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />

      <Button
        title="Cadastro"
        icon={{
          name: "user",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        buttonStyle={specificStyle.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 190,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#4ba7ea",
    marginTop: 10,
    borderRadius: 30,
    marginHorizontal: 50,
    marginVertical: 10,
    height: 50,
    width: 200,
  },
});
