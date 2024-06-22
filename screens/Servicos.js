import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import servicoService from "./services/ServicoService";

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = () => {
    setLoading(true);
    servicoService
      .listar()
      .then((response) => {
        setServicos(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar serviços:", error);
        setLoading(false);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={servicos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    backgroundColor: "#4ba7ea",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 370,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
