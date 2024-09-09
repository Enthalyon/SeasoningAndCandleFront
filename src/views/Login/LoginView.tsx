import { FC } from "react";
import styles from "./LoginView.scss?inline";
import ImageContainerComponent from "@views/Login/components/ImageContainerComponent";
import LoginComponent from "@views/Login/components/LoginComponent";
import LogOutTemplate from "@views/Commons/Layouts/LogOutLayout";

const LoginPage: FC = () => {
  return (
    <div>
      <LogOutTemplate>
        <div className="login__content-images">
          <ImageContainerComponent />
        </div>
        <div className="login__content-form">
          <LoginComponent />
        </div>
      </LogOutTemplate>
      <style>{`
          ${styles}
        `}</style>
    </div>
  );
};

export default LoginPage;
