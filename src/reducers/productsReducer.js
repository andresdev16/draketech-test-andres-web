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
    EDIT_PRODUCT_ERROR
} from '../types';


const inisialState = {

    products: [],
    error: null,
    loading: false,
    productToDelete: null,
    productToEdit: null
}
export default (state = inisialState, action)=>{

    switch(action.type){
        case ADD_PRODUCT:
        case GET_PRODUCTS:
            return{
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                products: [...state.products, action.payload],
                error: null
            }
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:
            return{
                ...state,
                error: true,
                loading: false
            }
        case GET_PRODUCTS_SUCCESS: 
            return{
                ...state,
                error: false,
                loading: false,
                products: action.payload
            }
       case GET_PRODUCT_DELETE:
           return{
               ...state,
               productToDelete: action.payload
           }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: state.products.filter(producto => producto.id !== state.productToDelete),
                productToDelete: null
            }
        case GET_PRODUCT_EDIT:
            return{
                ...state,
                productToEdit: action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return{
                    ...state,
                    productToEdit: null,
                    products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }
        default: return state;

    }

}

