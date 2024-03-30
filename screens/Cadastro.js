import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { CheckBox, Button, Text, Input } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/MainStyle";
import "react-native-gesture-handler";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [senha, setSenha] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [errorEmails, setErrorEmails] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);

  let cpfField = null;
  let telefoneField = null;

  const validar = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmails("Preencha seu e-mail corretamente");
      error = true;
    }
    if (!cpfField.isValid()) {
      setErrorCpf("Preencha o seu CPF corretamente");
      error = true;
    }
    if (nome == null) {
      setErrorNome("Preencha o seu nome");
      error = true;
    }
    if (telefone == null) {
      setErrorTelefone("Preencha o seu telefone corretamente");
      error = true;
    }
    if (senha == null) {
      setErrorSenha("Preencha a senha");
      error = true;
    }
    return !error;
  };

  const salvar = () => {
    if (validar()) {
      console.log("salvar");
    }
  };

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Image
        source={require("../assets/condomais.png")} // Substitua pelo caminho da sua logo
        style={specificStyle.logo}
      />
      <Input
        placeholder="E-mail"
        placeholderTextColor="#999999"
        onChangeText={(value) => {
          setEmail(value);
          setErrorEmails(null);
        }}
        keyboardType="email-address"
        errorMessage={errorEmails}
      />
      <Input
        placeholder="Nome"
        placeholderTextColor="#999999"
        onChangeText={(value) => {
          setNome(value);
          setErrorNome(null);
        }}
        errorMessage={errorNome}
      />
      <View style={styles.containerMask}>
        <TextInputMask
          placeholder="CPF"
          placeholderTextColor="#999999"
          type={"cpf"}
          onChangeText={(value) => {
            setCpf(value);
            setErrorCpf(null);
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          style={styles.maskedInput}
          ref={(ref) => (cpfField = ref)}
        />
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>

      <View style={styles.containerMask}>
        <TextInputMask
          placeholder="Telefone"
          placeholderTextColor="#999999"
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99)",
          }}
          value={telefone}
          onChangeText={(value) => {
            setTelefone(value);
            setErrorTelefone(null);
          }}
          keyboardType="phone-pad"
          returnKeyType="done"
          style={styles.maskedInput}
          ref={(ref) => (telefoneField = ref)}
        />
      </View>
      <Text style={styles.errorMessage}>{errorTelefone}</Text>

      <Input
        placeholder="Senha"
        onChangeText={(value) => setSenha(value)}
        errorMessage={errorSenha}
        secureTextEntry={true}
      />
      <CheckBox
        title="Eu aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      />

      <Button
        title="Cadastrar"
        icon={{
          name: "user",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
  },
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
  icon: {
    marginRight: 10,
  },
});
