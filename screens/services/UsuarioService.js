import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "../../util/config";

class UsuarioService {
  async cadastrar(data) {
    try {
      const response = await axios({
        url: Config.API_URL + "usuario",
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
          Accept: "application/json",
        },
      });
      return response;
    } catch (error) {
      console.error(
        "Erro ao cadastrar:",
        error.response ? error.response.data : error.message
      );
      return Promise.reject(error);
    }
  }

  async login(data) {
    try {
      const response = await axios({
        url: Config.API_URL + "usuario/login",
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
          Accept: "application/json",
        },
      });
      const token = response.data.access_token.toString();
      await AsyncStorage.setItem("TOKEN", token);
      return response;
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response ? error.response.data : error.message
      );
      return Promise.reject(error);
    }
  }

  async loginComToken(data) {
    try {
      const response = await axios({
        url: Config.API_URL + "usuario/login-token",
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.data.access_token) {
        const token = response.data.access_token.toString();
        await AsyncStorage.setItem("TOKEN", token);
        return response;
      } else {
        throw new Error("Token inválido na resposta");
      }
    } catch (error) {
      console.error(
        "Erro ao fazer login com token:",
        error.response ? error.response.data : error.message
      );
      return Promise.reject(error);
    }
  }
  async getPerfil(token) {
    try {
      const response = await axios({
        url: Config.API_URL + "usuario",
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return response.data; // Retorna os dados do perfil do usuário
    } catch (error) {
      console.error(
        "Erro ao obter perfil:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Erro ao obter perfil do usuário");
    }
  }
  async atualizarPerfil(token, { nome, email, cpf, avatar }) {
    try {
      const response = await axios({
        url: Config.API_URL + "usuario",
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        data: {
          nome,
          email,
          cpf,
        },
      });
      return response.data; // Retorna os dados atualizados do perfil do usuário
    } catch (error) {
      console.error(
        "Erro ao atualizar perfil:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Erro ao atualizar perfil do usuário");
    }
  }
}

const usuarioService = new UsuarioService();
export default usuarioService;
