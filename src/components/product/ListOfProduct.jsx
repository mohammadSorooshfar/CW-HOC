import React from 'react'
import { withProduct } from '../../HOC/withProduct';

const ListOfProduct = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <>
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </>
            ))}
        </div>
    )
}

export default withProduct(ListOfProduct);