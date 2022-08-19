import React from 'react'
import InsertProductForm from '../components/product/InsertProductForm'
import ListOfProduct from '../components/product/ListOfProduct'

const Home = () => {
    return (
        <div>
            <InsertProductForm />
            <ListOfProduct />
        </div>
    )
}

export default Home