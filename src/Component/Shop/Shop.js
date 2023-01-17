import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        const handleLocalstorage = () =>{
            console.log('i am clicked');
        }
        toast("Product Added!")
        // Swal.fire(
        //     'Product Added!'
        //   )
    }
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))   
        
    }, [])    
    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key = {product.id}
                            product = {product}
                            addToCart = {addToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
        </div>
        
    );
};

export default Shop;