import { FC} from "react";
import styles from "./LoginComponent.scss?inline";
import { useAuth } from "@/hook/useAuth";

//TODO: Mejorar toda la vista del login y usar componentes de commons
const LoginComponent: FC = () => {
  const { onLoginHandler, onRedirectRegisterHandler, setEmail, setPassword } = useAuth();

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
            type="email"
          />
          <input
            className="login-form__container-inputs-field"
            placeholder="Contraseña"
            type="password"
            onKeyUp={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="login-form__container-buttons">
          <button className="login-form__container-buttons-sign-in" onClick={onLoginHandler}>
            Ingresar
          </button>
          <a className="login-form__container-buttons-sign-up" onClick={onRedirectRegisterHandler}>Registrarse</a>
        </div>
      </form>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};

export default LoginComponent;
