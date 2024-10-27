import { authService } from "@/services/authService";
import { saveElementToLocalStorage } from "@/services/localStorage";
import { LoginResponse } from "@/types/loginTypes";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const { login } = authService();

  const onLoginHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!email || !password) return;

    login(email, password)
      .then((response) => {
        response.json().then((data: LoginResponse) => {
          saveElementToLocalStorage('token', data.accessToken);
          navigate("/products")
        })
      })
      .catch((error) => {
        //TODO: Mostrar notificación de error
        console.error("Error:", error);
        throw error;
      });
  };

  const onRedirectRegisterHandler = () => {
    navigate("/register-user");
  }
  

  return {
    onLoginHandler,
    onRedirectRegisterHandler,
    email,
    password,
    setEmail,
    setPassword,
  }
}
