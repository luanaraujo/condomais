import axios from "axios";

class UsuarioService {
  async cadastrar(data) {
    return axios({
      url: "http://192.168.1.9:3000/usuario", // Certifique-se de que a URL está correta
      method: "POST",
      timeout: 5000,
      data: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        // Retorne diretamente o response sem transformar os dados
        return response;
      })
      .catch((error) => {
        // Retorne diretamente o erro sem transformar os dados
        return Promise.reject(error);
      });
  }
}

const usuarioService = new UsuarioService(); // Criação correta da instância
export default usuarioService;
