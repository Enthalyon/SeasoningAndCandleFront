import { FC } from "react";
import styles from "./LoginPage.scss?inline";
import NavBarComponent from "@views/Login/components/NavBarComponent";
import ImageContainerComponent from "@views/Login/components/ImageContainerComponent";
import LoginComponent from "@views/Login/components/LoginComponent";
import FooterComponent from "@views/Login/components/FooterComponent";

const LoginPage: FC = () => {
  return (
    <div>
      <div className="login">
        <div className="login__header">
          <NavBarComponent />
        </div>
        <div className="login__content">
          <div className="login__content-images">
            <ImageContainerComponent />
          </div>
          <div className="login__content-form">
            <LoginComponent />
          </div>
        </div>
        <div className="login__footer">
          <FooterComponent />
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};

export default LoginPage;
