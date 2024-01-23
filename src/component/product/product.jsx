import './product.css'
import AddToCart from '../AddToCart/AddToCart'
const Product = (props) => {
    return (
        <div className='product'>

            <h3 className='product-calification'> <img src="./src/assets/img/starIcon.svg" alt="" />{props.calification}</h3>
            <p className='product-add'>+</p>
            <img className='product-img' src={props.img} alt="product" />
            <h2 className='product-title'>{props.name}</h2>
            <h3 className='product-price'>{props.price}<AddToCart /></h3>

        </div>
    )
}

export default Product