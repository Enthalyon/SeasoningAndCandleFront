import { FC } from "react";
import styles from "./LoginComponent.scss?inline";

const LoginComponent: FC = () => {
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
          />
          <input
            className="login-form__container-inputs-field"
            placeholder="Contraseña"
          />
        </div>
        <div className="login-form__container-buttons">
          <button className="login-form__container-buttons-sign-in">
            Ingresar
          </button>
          <a className="login-form__container-buttons-sign-up">Registrarse</a>
        </div>
      </form>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};

export default LoginComponent;
