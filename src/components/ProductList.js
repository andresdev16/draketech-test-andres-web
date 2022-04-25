import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {deleteProductAction, getProductToEditAction} from '../actions/productsAction';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

const ProductList = ({product}) => {


    const dispatch = useDispatch();
    const history = useHistory();

    const getProductToDelete = (id) => dispatch( deleteProductAction(id) );
    
    const onclickObtieneProducto = id =>{
            
        Swal.fire({
            title: 'Are you sure?',
            text: "This product will be removed definitively",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
            
            getProductToDelete(product.id);   
             
            }
          })            
    } 

    const getProductToEdit = (product) => dispatch( getProductToEditAction(product) );

    const getFullProduct = product => {

        getProductToEdit(product);
        history.push(`/products/edit/${product.id}`);
    }
    const {name, quantity, price, imageUrl, id} = product;


    return ( 

        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td>{imageUrl}</td>
            <td className="acciones">
                    <button 
                        type="button"
                        onClick={e=>getFullProduct(product)}
                        className="btn btn-primary">Edit</button>
                    <button type="button"
                        onClick={e=>onclickObtieneProducto(product.id)}
                        className="btn btn-danger ml-2"
                    >Delete</button>
            </td>
        </tr>


     );
}
 
export default ProductList;