import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';

export default combineReducers({

    product: productsReducer,
    auth: authReducer
})