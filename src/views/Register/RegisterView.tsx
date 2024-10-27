import {
  RegisterBackgroundCenter,
  RegisterBackgroundLeft,
  RegisterBackgroundRight,
} from "@/assets/Register";
import LogOutTemplate from "@views/Commons/Layouts/LogOutLayout";
import styles from "./RegisterView.scss?inline";
import InputComponent from "../Commons/Components/InputComponent/InputComponent";
import ButtonComponent from "../Commons/Components/ButtonComponent/ButtonComponent";

const RegisterView = () => {
  return (
    <LogOutTemplate>
      <div className="images">
        <img className="images__column" src={RegisterBackgroundLeft} />
        <img className="images__column" src={RegisterBackgroundCenter} />
        <img className="images__column" src={RegisterBackgroundRight} />
      </div>
      <div className="form">
        <div className="form__container">
          <p className="form__title">Registro</p>
          <p className="form__description">¡Estamos esperando tu primera orden!</p>
          <hr className="form__separator" />
          <div className="form__inputs">
            <InputComponent placeholder="Nombres..." type="password" />
            <InputComponent placeholder="Apellidos..." />
            <InputComponent placeholder="Correo electrónico..." />
            <InputComponent placeholder="Dirección de domicilio..." />
            <InputComponent placeholder="Teléfono..." />
            <InputComponent placeholder="Contraseña..." />
          </div>
          <div className="form__button">
            <ButtonComponent style={{width: '264px'}} text="Registrarse" />
          </div>
        </div>
      </div>
      <style>{`
          ${styles}
        `}</style>
    </LogOutTemplate>
  );
};

export default RegisterView;
