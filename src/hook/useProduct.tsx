import { productService } from "@/services/productService";
import { ProductCategory } from "@/types/productTypes";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [productCategoryList, setProductCategoryList] = useState<ProductCategory[]>([]);
  
  useEffect(() => {
    const { listProductsCategory } = productService();

    //TODO: HACEMOS QUE EL SPINNER DE CARGANDO SE VEA
    listProductsCategory()
      .then<ProductCategory[]>((response) => response.json())
      .then((response) => {
        setProductCategoryList(response);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => {
        //TODO: HACEMOS QUE EL SPINNER DE CARGANDO SE VEA
        console.log("Finally");
      });
  }, []);

  return {
    productCategoryList,
  };
};

export default useProduct;
