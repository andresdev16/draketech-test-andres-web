import React,{useState} from 'react';
import {createProduct} from '../actions/productsAction';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';


const NewProduct = ({history}) => {

    
    

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [price, savePrice] = useState(0);
    const [imageUrl, saveImage] = useState('');

    const dispatch = useDispatch();

    const addProduct = (product) => dispatch( createProduct(product) );

    const loading = useSelector( (state) => state.product.loading);
    const error = useSelector( (state) => state.product.error);
   
    const handleSubmit = e =>{

        e.preventDefault();

        // validate emtpy fields
        if(name.trim() === '' || price <= 0){

            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'All fields are required'
            })
            return;
        }
        
        addProduct({name: name, quantity: quantity, price: price, imageUrl: imageUrl});
        history.push('/');

    }


    return ( 

      <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Add Product
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={e=>saveName(e.target.value)}                                                                                                                                                                                                                                                                                                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Quantity</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={e=>saveQuantity(Number(e.target.value))}

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Price</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Price"
                                        name="precio"
                                        value={price}
                                        onChange={e=>savePrice(Number(e.target.value))}

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product Image</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Image URL"
                                        name="imageUrl"
                                        value={imageUrl}
                                        onChange={e=>saveImage(e.target.value)}                                                                                                                                                                                                                                                                                                                        
                                    />
                                </div>
                                <button 
                                    type="submit"    
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save</button>
                                    {loading ? <p>loading ...</p>: null}
                                    {error ? <p className="alert alert-danger p2 mt-4 text-center text-uppercase">Error</p> : null}
                            </form>
                    </div>
                </div>
            </div>
      </div>
     );
}
 
export default NewProduct;