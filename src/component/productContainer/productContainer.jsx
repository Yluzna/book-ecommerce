import './productContainer.css'

const ProductContainer = (props) => {
    return (
        <section className='products__section'>
            <h1 className='products__title'></h1>
            <h3 className='products__subtitle'> </h3>
            <div className='products__container'>
                {props.children}
            </div>
        </section>
    )
}

export default ProductContainer