
export const productService = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}product`;

  const listProductsCategory = async (limit: number = 10) => {
    return await fetch(`${apiUrl}?limit=${limit}`, {
      method: "GET",
    })
  }

  return {
    listProductsCategory,
  }
}
