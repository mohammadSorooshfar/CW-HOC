import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState();
  const addProduct = (newProduct) => {
    setProducts(newProduct);
  };
  const value = {
    products,
    addProduct,
  };
  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

export default ProductContextProvider;
