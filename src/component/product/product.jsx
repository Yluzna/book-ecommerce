import './product.css'
import AddToCart from '../AddToCart/AddToCart'
const Product = (props) => {
    return (
        <div className='product'>

            <h3 className='product-calification'> <img src="./src/assets/img/starIcon.svg" alt="" />4.9</h3>
            <p className='product-add'>+</p>
            <img className='product-img' src="./src/assets/img/libro1.svg" alt="product" />
            <h2 className='product-title'>Choque de Reyes</h2>
            <h3 className='product-price'>$4.53 <AddToCart /></h3>


        </div>
    )
}

export default Product