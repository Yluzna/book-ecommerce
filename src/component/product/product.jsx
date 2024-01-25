import './product.css'
import AddToCart from '../AddToCart/AddToCart'
const Product = () => {
    return (
        <div className="book-card">
            <div className="calification">
            <h3 className='product-calification'> 4.6</h3>
            </div>
            <div className="title-container">

                <div className="title">Choque de reyes</div>
            </div>
            <img className="book-cover" src="./src/assets/img/danza.svg" alt="Book Cover" />
            <div className="price">$ 35.53

            </div>
            <div className="add-to-cart">
                <AddToCart />
            </div>
        </div>
    )

}

export default Product