import { FC, HTMLInputTypeAttribute } from "react";
import styles from "./InputComponent.scss?inline";

interface InputComponentProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  setValue?: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = ({ setValue, placeholder, type }) => {
  return (
    <>
      <input
        className="input"
        placeholder={placeholder}
        onKeyUp={(e) => setValue?.(e.currentTarget.value)}
        type={type}
      />
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};

export default InputComponent;
