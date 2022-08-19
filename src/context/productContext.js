import { createContext, useContext, useState } from "react";

const ProductContext=createContext();

const ProductContextProvider=(props)=>{
    const [product,setProduct]=useState();
    const addProduct=(newProduct)=>{
        setProduct(newProduct);
    }
    const value={
        product,
        addProduct
    }
    return <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>;
}

export const useProduct=()=>useContext(ProductContext)
    
export default ProductContextProvider;

