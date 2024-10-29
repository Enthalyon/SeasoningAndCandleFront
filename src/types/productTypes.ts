export interface ProductCategory {
  categoryId:   number;
  categoryName: string;
  products:     Product[];
}

export interface Product {
  id:          number;
  name:        string;
  description: string;
  imageUrl:    string;
  price:       number;
  stock:       number;
}
