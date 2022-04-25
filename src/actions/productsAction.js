import {
    ADD_PRODUCT, 
    ADD_PRODUCT_SUCCESS, 
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    EDITING_PRODUCT
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


    export function createProduct(product){

        return async(dispatch)=>{

                dispatch( addProduct() );

            try {

                await clienteAxios.post('/products/create', product);
                dispatch( addProductSuccess(product) );
                Swal.fire(
                    'Done!',
                    'Product created successfully',
                    'success'
                )


            } catch (error) {
                console.log(error);
                dispatch( addProductError() );
                Swal.fire({
                    icon: 'error',
                    title: 'Ups!',
                    text: 'There was an error while create the product. Try again'
                })
            }         
        }
    }

    const addProduct = () => ({

        type: ADD_PRODUCT
    })
    const addProductSuccess = (product) => ({

        type: ADD_PRODUCT_SUCCESS,
        payload: product

    })
    const addProductError = () => ({

        type: ADD_PRODUCT_ERROR
    })

    export function getProductsAction(){

        return async(dispatch) =>{

                
                dispatch( getProducts() );

            try {
                   
                     const result = await clienteAxios.get('/products/all?offset=0&limit=20');
                        
                     dispatch( getProductsSuccess(result.data) );
                   
                     
            } catch (error) {
                console.log(error);
                dispatch( getProductsError() );
            }

        }
    }
    const getProducts = () => ({

        type: GET_PRODUCTS
    })
    const getProductsSuccess = (products) => ({

        type: GET_PRODUCTS_SUCCESS,
        payload: products
    })
    const getProductsError = () =>({

        type: GET_PRODUCTS_ERROR
    })

export function deleteProductAction(id){

    return async(dispatch)=>{

        dispatch( getProductToDelete(id) );   
        
        try {
                await clienteAxios.delete(`/products/${id}`);                
                dispatch( deleteProduct() );
                Swal.fire(
                    'Deleted!',
                    'Product deleted successfully.',
                    'success'
                  )

        } catch (error) {
            console.log(error);
            dispatch( deleteProductError() );
        }

    }
}

const getProductToDelete = (id) => ({

    type: GET_PRODUCT_DELETE,
    payload: id
})
const deleteProduct = () => ({

    type: DELETE_PRODUCT_SUCCESS

})
const deleteProductError = () => ({

    type: DELETE_PRODUCT_ERROR
})

export function getProductToEditAction(product){

    return(dispatch)=>{
            
            dispatch( getProductToEdit(product) );
    }
}
const getProductToEdit = (producto) => ({

    type: GET_PRODUCT_EDIT,
    payload: producto
})
export function editProductAction(product){

    return async(dispatch)=>{
            dispatch( editProduct() );

            try {

                    await clienteAxios.put('/products/update', product)
                   dispatch( editProductSuccess(product) );                

            } catch (error) {
                console.log(error)
                dispatch( editProductError());
            }
    }
}
const editProduct = () => ({

    type: EDITING_PRODUCT

})
const editProductSuccess = (producto) => ({

    type: EDIT_PRODUCT_SUCCESS,
    payload: producto
})
const editProductError = () => ({

    type: EDIT_PRODUCT_ERROR
})