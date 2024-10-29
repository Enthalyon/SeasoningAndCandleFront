import { FC } from "react";
import styles from "./ButtonIcon.scss?inline";

interface ButtonIconProps {
  icon: string;
  size?: "small" | "medium" | "large" | "full-height";
  color?: "primary" | "tertiary";
  onClick?: () => void;
  customStyle?: React.CSSProperties;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  onClick,
  size,
  color,
  customStyle,
}) => {
  return (
    <>
      <div
        className={`button-icon__container button-icon__container--${
          size ?? "small"
        } button-icon__container--${color ?? "primary"}`}
        onClick={() => onClick && onClick()}
        style={customStyle}
      >
        <img className="button-icon__image" src={icon} />
      </div>
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};

export default ButtonIcon;
