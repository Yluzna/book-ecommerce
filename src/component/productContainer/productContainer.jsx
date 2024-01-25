import './productContainer.css'

const ProductContainer = (props) => {
    return (
        <section className='products__section'>
            <h1 className='products__title'></h1>
            <div className='products__container'>
                {props.children}
            </div>
        </section>
    )
}

export default ProductContainer