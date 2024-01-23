import './product.css'
import AddToCart from '../AddToCart/AddToCart'
const Product = (props) => {
    return (
        <div className='product'>
            <h3 className='product-calification'> <img src="./src/assets/img/starIcon.svg" alt="" /> {props.calification}</h3>
            <img className='product-img' src="./src/assets/img/libro1.svg" alt="product"></img>
            <h2 className='product-title'>{props.name}</h2>
            <h3 className='product-price'>{props.price} <AddToCart /></h3>
        </div>
    )
}

export default Product