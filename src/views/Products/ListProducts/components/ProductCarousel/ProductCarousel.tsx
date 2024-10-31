import styles from "./ProductCarousel.scss?inline";
import { FC, useRef } from "react";
import { ProductCategory } from "@/types/productTypes";
import ProductCardComponent from "../ProductCard/ProductCardComponent";
import { arrowLeft, arrowRight } from "@/assets/Products";
import ButtonIcon from "@/views/Commons/Components/ButtonIcon/ButtonIcon";

const ProductCarousel: FC<ProductCategory> = ({ categoryName, products }) => {
  const carouselCards = useRef<HTMLDivElement>(null);

  const onMoveCarousel = (direction: "right" | "left") => {
    const carousel = carouselCards.current;
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
        <span className="carousel-container__title">{categoryName}</span>
        <div className="cards-container">
          <div className="cards-container__button" style={{}}>
            <ButtonIcon
              size="full-height"
              icon={arrowLeft}
              color="tertiary"
              onClick={() => onMoveCarousel("left")}
              customStyle={{
                position: "absolute",
                borderRadius: "10px 0 0 10px",
              }}
            />
          </div>
          <div ref={carouselCards} className="cards-container__cards">
            {products.map(({ id, name, imageUrl, description }) => (
              <ProductCardComponent
                key={id}
                title={name}
                description={description}
                image={imageUrl}
              />
            ))}
          </div>
          <div className="cards-container__button">
            <ButtonIcon
              size="full-height"
              icon={arrowRight}
              color="tertiary"
              customStyle={{
                right: 0,
                position: "absolute",
                borderRadius: "0 10px 10px 0",
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
