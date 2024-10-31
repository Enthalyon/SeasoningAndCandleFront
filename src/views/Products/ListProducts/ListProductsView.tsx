import LogInLayout from "@/views/Commons/Layouts/LogInLayout/LogInLayout"
import styles from './ListProductsView.scss?inline'
import ProductCarousel from "./components/ProductCarousel/ProductCarousel"
import useProduct from "@/hook/useProduct";

const ListProductsView = () => {
  const { productCategoryList } = useProduct();

  return (
    <LogInLayout>
      <>
        <div className="cards">
          <div className="cards-container">
            {
              productCategoryList.map((productCategory) => (
                <ProductCarousel key={productCategory.categoryId} {...productCategory} />
              ))
            }
          </div>
        </div>
        <style>{`
          ${styles}
        `}</style>
      </>
    </LogInLayout>
  )
}

export default ListProductsView