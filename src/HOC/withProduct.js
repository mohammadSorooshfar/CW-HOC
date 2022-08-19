import { useState } from "react";
import { useProduct } from "../context/productContext";

export const withProduct = (CustomComponent) => {
  return (props) => {
    const productContext = useProduct();

    return <CustomComponent products={productContext.products} />;
  };
};

export const withInsertProduct = (CustomComponent) => {
  return (props) => {
    const [product, setProduct] = useState({});
    const productContext = useProduct();

    const insertProduct = () => {
      productContext.addProduct(product);
    };

    const changeProductName = (value) => {
      setProduct({ ...product, name: value });
    };

    const changeProductPrice = (value) => {
      setProduct({ ...product, price: value });
    };

    // return (
    //   <CustomComponent
    //     insertProduct={insertProduct}
    //     changeProductName={changeProductName}
    //     changeProductPrice={changeProductPrice}
    //   />
    // );

    return (
      <CustomComponent
        {...{
          insertProduct,
          changeProductName,
          changeProductPrice,
          product,
          ...props,
        }}
      />
    );
  };
};
