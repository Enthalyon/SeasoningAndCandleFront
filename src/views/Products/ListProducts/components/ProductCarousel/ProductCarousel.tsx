import styles from "./ProductCarousel.scss?inline";
import { FC } from "react";
import { ProductCategory } from "@/types/productTypes";
import ProductCardComponent from "../ProductCard/ProductCardComponent";
import { arrowLeft, arrowRight } from "@/assets/Products";
import ButtonIcon from "@/views/Commons/Components/ButtonIcon/ButtonIcon";

const ProductCarousel: FC<ProductCategory> = ({ categoryName, products }) => {

  const onMoveCarousel = (direction: "right" | "left") => {
    const carousel = document.querySelector(".carousel-container__cards");
    if (!carousel) return;

    const cardWidth = carousel.children[0].clientWidth;
    const scrollAmount = cardWidth * 3;

    if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    } else {
      carousel.scrollLeft -= scrollAmount;
    }
  };

  return (
    <>
      <div className="carousel-container">
        <span className="carousel-container__title">
          <h2>{categoryName}</h2>
        </span>
        <div className="">
          <div className="carousel-container__cards">
            <ButtonIcon
              size="full-height"
              icon={arrowLeft}
              color="tertiary"
              onClick={() => onMoveCarousel("left")}
              customStyle={{
                position: "fixed",
                height: "274px",
              }}
            />
            {products.map(({ id, name, imageUrl, description }) => (
              <ProductCardComponent
                key={id}
                title={name}
                description={description}
                image={imageUrl}
              />
            ))}
            <ButtonIcon
              size="full-height"
              icon={arrowRight}
              color="tertiary"
              customStyle={{
                right: 0,
                height: "274px",
                position: "fixed",
              }}
              onClick={() => onMoveCarousel("right")}
            />
          </div>
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};

export default ProductCarousel;
