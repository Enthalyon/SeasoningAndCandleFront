import { FC } from "react";
import styles from "./InputComponent.scss?inline";

interface InputComponentProps {
  placeholder: string;
  type?: string;
  setValue?: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = ({ setValue, placeholder }) => {
  return (
    <>
      <input
        className="input"
        placeholder={placeholder}
        onKeyUp={(e) => setValue?.(e.currentTarget.value)}
      />
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};

export default InputComponent;
