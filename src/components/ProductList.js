import React from 'react'
import Product from './Product';
function ProductList (props) {
    return (
        props.productList.length > 0 ?
       props.productList.map((product, i) => {
           return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem} />
       })
       : <h1>Please add products in the cart</h1> 
    )
}

export default ProductList