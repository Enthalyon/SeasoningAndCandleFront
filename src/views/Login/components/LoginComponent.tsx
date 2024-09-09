import { FC, MouseEvent, useState } from "react";
import styles from "./LoginComponent.scss?inline";
import { login } from "@/services/authService";
import { useNavigate } from "react-router-dom";

const LoginComponent: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onLoginHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!email || !password) return;

    login(email, password);
  };

  const onRegisterHandler = () => {
    navigate("/register-user");
  }
  
  return (
    <div className="login-form">
      <form className="login-form__container">
        <span className="login-form__container-title">¡Bienvenido!</span>
        <span className="login-form__container-description">
          Donde el sabor es parte de la sazón
        </span>
        <div className="login-form__container-inputs">
          <input
            className="login-form__container-inputs-field"
            placeholder="Correo electrónico"
            onKeyUp={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            className="login-form__container-inputs-field"
            placeholder="Contraseña"
            onKeyUp={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="login-form__container-buttons">
          <button className="login-form__container-buttons-sign-in" onClick={onLoginHandler}>
            Ingresar
          </button>
          <a className="login-form__container-buttons-sign-up" onClick={onRegisterHandler}>Registrarse</a>
        </div>
      </form>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};

export default LoginComponent;
