import { ToastContainer } from 'react-toastify';
import './Product.css'


const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product
    
    // console.log(props)
    return (
        <div className='product-card'  data-aos="zoom-in" data-aos-duration="600">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>Brand: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='btn-addToCart' onClick={()=>props.addToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;