import { FC } from "react";
import styles from "./ProductCardComponent.scss?inline";

interface ProductCardComponentProps {
  image: string;
  title: string;
  description: string;
}

const ProductCardComponent: FC<ProductCardComponentProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="product-card">
        <img
          className="product-card__image"
          src={image}
          alt={description}
        />
        <div className="product-card__info">
          <span className="product-card__title">{title}</span>
          <hr className="product-card__divider" />
          <div className="product-card__description">
            <span className="product-card__text">{description}</span>
          </div>
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};

export default ProductCardComponent;
