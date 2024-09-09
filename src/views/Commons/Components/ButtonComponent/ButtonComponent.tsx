import { CSSProperties, FC, MouseEvent } from 'react'
import styles from './ButtonComponent.scss?inline'

type ButtonType = 'primary' | 'secondary';

interface ButtonComponentProps {
  text: string;
  type?: ButtonType;
  style: CSSProperties;
  onClickHandler?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const chooseType = (type?: ButtonType) => {
  switch (type) {
    case 'primary':
      return 'button--primary';
    case 'secondary':
      return 'button--secondary';
    default:
      return 'button--primary';
  }
}

const ButtonComponent: FC<ButtonComponentProps> = ({onClickHandler, text, type, style}) => {
  return (
    <>
      <a style={style} className={`button ${chooseType(type)}`} onClick={onClickHandler}>{text}</a>
      <style>{`
        ${styles}
      `}</style>
    </>
  )
}

export default ButtonComponent