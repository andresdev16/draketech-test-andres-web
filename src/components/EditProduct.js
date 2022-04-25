import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editProductAction} from '../actions/productsAction';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const[product, saveProduct] = useState({
        name: '',
        quantity: '',
        price: '',
        imageUrl: ''
    })

    const productToEdit = useSelector(state => state.product.productToEdit)
    const dispatch = useDispatch();
    const history = useHistory();
    const productEditSuccess = (product) => dispatch( editProductAction(product) )

    useEffect(()=>{

        saveProduct(productToEdit);

    },[productToEdit])

    if(product === null)return null;
    const {name, quantity, price, imageUrl } = product;

    const onChangeProduct = e =>{

        saveProduct({

            ...product,
            [e.target.name]: e.target.value
        })
    }
    const submitProductEdit = e =>{

        e.preventDefault();
        productEditSuccess(product);
        history.push('/');
    }
    return ( 

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Edit product
                            </h2>
                            <form
                                onSubmit={submitProductEdit}
                            >
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre producto"
                                        name="nombre"
                                        value={name}
                                       onChange={onChangeProduct}                                                                                
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={onChangeProduct}                                                                                
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio Producto</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Precio Producto"
                                        name="price"
                                        value={price}
                                        onChange={onChangeProduct}                                                                                
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image Url</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Image URL"
                                        name="imageUrl"
                                        value={imageUrl}
                                       onChange={onChangeProduct}                                                                                
                                    />
                                </div>
                                <button 
                                    type="submit"    
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save</button>
                            </form>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default EditProduct;