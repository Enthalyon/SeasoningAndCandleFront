import LogInLayout from "@/views/Commons/Layouts/LogInLayout/LogInLayout"
import styles from './ListProductsView.scss?inline'
import ProductCarousel from "./components/ProductCarousel/ProductCarousel"
import { productCategoryList } from "@/mocks/productMocks";

const ListProductsView = () => {
  const productsFromAPI = productCategoryList;

  return (
    <LogInLayout>
      <>
        <div className="cards">
          <div className="cards-container">
            {
              productsFromAPI.map((productCategory) => (
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