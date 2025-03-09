import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Credentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", credentials);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;