import { FC } from "react"
import styles from './FooterComponent.scss?inline'

const FooterComponent: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        © 2024. All Rights Reserved to Sazón y Candela
      </div>
      <style>{`
        ${styles}
      `}</style>
    </footer>
  )
}

export default FooterComponent