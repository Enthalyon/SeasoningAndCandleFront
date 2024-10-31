import {
  RegisterBackgroundCenter,
  RegisterBackgroundLeft,
  RegisterBackgroundRight,
} from "@/assets/Register";
import LogOutTemplate from "@views/Commons/Layouts/LogOutLayout";
import styles from "./RegisterView.scss?inline";
import InputComponent from "../Commons/Components/InputComponent/InputComponent";
import ButtonComponent from "../Commons/Components/ButtonComponent/ButtonComponent";
import useForm from "@/hook/useForm";
import { SignUpRequest } from "@/types/authTypes";
import { useAuth } from "@/hook/useAuth";

const RegisterView = () => {
  const { onRegisterUser } = useAuth();
  const { onValueChange, formState } = useForm<SignUpRequest>({
    address: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
  });

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
          <p className="form__description">
            ¡Estamos esperando tu primera orden!
          </p>
          <hr className="form__separator" />
          <div className="form__inputs">
            <InputComponent
              placeholder="Nombres..."
              type="text"
              setValue={(name) => onValueChange("firstName", name)}
            />
            <InputComponent
              placeholder="Apellidos..."
              type="text"
              setValue={(name) => onValueChange("lastName", name)}
            />
            <InputComponent
              placeholder="Correo electrónico..."
              type="email"
              setValue={(name) => onValueChange("email", name)}
            />
            <InputComponent
              placeholder="Dirección de domicilio..."
              type="text"
              setValue={(name) => onValueChange("address", name)}
            />
            <InputComponent
              placeholder="Teléfono..."
              type="text"
              setValue={(name) => onValueChange("phone", name)}
            />
            <InputComponent
              placeholder="Contraseña..."
              type="password"
              setValue={(name) => onValueChange("password", name)}
            />
          </div>
          <div className="form__button">
            <ButtonComponent
              style={{ width: "264px" }}
              text="Registrarse"
              onClickHandler={() => onRegisterUser(formState)}
            />
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
