import React, {Fragment, useEffect} from 'react';
import {getProductsAction} from '../actions/productsAction';
import {useDispatch, useSelector} from 'react-redux';
import ProductList from './ProductList';

const Products = () => {

    
    const dispatch = useDispatch();

    useEffect(() =>{

        const getProducts = () => dispatch( getProductsAction() );
        getProducts();

    }, [])
    
    const products = useSelector( (state) => state.product.products.products);
    const error = useSelector( state => state.product.error);
    const cargando = useSelector( state => state.product.loading);
   
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Product List</h2>
            {error ?<p className="font-weight-bold alert alert-danger text-center mt-4">Error</p> : null}
            {cargando ? <p className="text-center">Loading....</p> : null}
            <table className="table table-striped">
                   
                <thead className="bg-primary table-dark">
                    <tr>
                            <th scope="col">Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope="col">Price</th>
                            <th scope='col'>Image</th>
                            <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {products?.lenght === 0 ? 'No products found' : (

                            products?.map(product => (

                                    <ProductList 
                                        key={product.id}
                                        product={product.products}
                                    />
                            ))
                        )}
                </tbody>
            </table>
        </Fragment>
        
     );
}
 
export default Products;