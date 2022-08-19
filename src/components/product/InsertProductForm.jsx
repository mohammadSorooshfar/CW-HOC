import React from 'react'
import { withInsertProduct } from '../../HOC/withProduct';

const InsertProductForm = ({ insertProduct, changeProductName, changeProductPrice, product }) => {
    return (
        <form onSubmit={(e) => { e.preventDefault(); insertProduct() }}>
            <input type="text" onChange={(e) => changeProductName(e.target.value)} value={product.name} />
            <input type="text" onChange={(e) => changeProductPrice(e.target.value)} value={product.price} />
            <button type='submit'>submit</button>
        </form>
    )
}

export default withInsertProduct(InsertProductForm);