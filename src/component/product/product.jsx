import './product.css'
import AddToCart from '../AddToCart/AddToCart'
// import { Link } from 'react-router-dom'

const Product = (props) => {


    return (
        
        <div className='product'>

            {/* <Link to="/Product">
                Go to Product
            </Link> */}
        
        

            <h3 className='product-calification'> <img src="./src/assets/img/starIcon.svg" alt="" />{props.calification}</h3>
            <div
                className='top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded m-2 p-1 text-white cursor-pointer'
                onClick={ () => context.setCount(context.count + 1 )}>
                +
            </div>
            <img className='product-img' src={props.img} alt="product" />
            <h2 className='product-title'>{props.name}</h2>
            <h3 className='product-price'>{props.price}<AddToCart /></h3>

        </div>
    )
}

export default Product