import React from 'react'
import { withInsertProduct } from '../../HOC/withProduct';
import withValidation from '../../HOC/withValidation';

const conditions = {
    name: (value) => (value.length > 4),
    price: (value) => (/^\d+$/.test(value))
}

const InsertProductForm = ({ insertProduct, changeProductName, changeProductPrice, product, validation }) => {
    const handleSumbit = (e) => {
        e.preventDefault();
        if (validation("name", product.name) && validation("price", product.price)) {
            insertProduct();
        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <div>
                <input type="text" onChange={(e) => changeProductName(e.target.value)} value={product.name} />
                <div>{!validation("name", product.name) && 'name must be more than 4 letters'}</div>
            </div>
            <div>
                <input type="text" onChange={(e) => changeProductPrice(e.target.value)} value={product.price} />
                <div>{!validation("price", product.price) && 'price must be number'}</div>
            </div>
            <button type='submit'>submit</button>
        </form>
    )
}

export default withInsertProduct(withValidation(InsertProductForm, conditions));