import { FC } from "react"
import styles from './NavBarComponent.scss?inline'

const NavBarComponent: FC = () => {
  return (
    <div className="header">
      <div className="header__items">
        <div className="header__items-logo">
          Sazón y candela
        </div>
        <div className="header__items-links">
          <a href="#" className="header__items-links-button">Inicio</a>
          <a href="#" className="header__items-links-button">Sobre nosotros</a>
          <a href="#" className="header__items-links-button">Contactenos</a>
        </div>
      </div>

      <style>{`
        ${styles}
      `}</style>
    </div>
  )
}

export default NavBarComponent