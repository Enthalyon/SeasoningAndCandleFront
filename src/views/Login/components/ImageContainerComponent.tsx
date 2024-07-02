import { FC } from "react";
import styles from "./ImageContainerComponent.scss?inline";
import {
  LoginBackgroundLeft,
  LoginBackgroundUpperRight,
  LoginBackgroundBottomRight,
} from "@assets/Login";

const ImageContainerComponent: FC = () => {
  return (
    <div>
      <div className="images">
        <div className="images__main-image">
          <img className="image" src={LoginBackgroundLeft} />
        </div>
        <div className="images__column-images">
          <img className="image image--middle" src={LoginBackgroundUpperRight} />
          <img className="image image--middle" src={LoginBackgroundBottomRight} />
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};

export default ImageContainerComponent;
