import { FC } from 'react'
import styles from "./LogOutLayout.scss?inline";
import NavBarComponent from '@views/Commons/Components/LogOutComponents/NavBarComponent';
import FooterComponent from '@views/Commons/Components/LogOutComponents/FooterComponent';

interface ILogOutTemplateProps {
  children: React.ReactNode;
}

const LogOutTemplate: FC<ILogOutTemplateProps> = ({children}) => {
    return (
      <div>
        <div className="login">
          <div className="login__header">
            <NavBarComponent />
          </div>
          <div className="login__content">
            {children}
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
}

export default LogOutTemplate;