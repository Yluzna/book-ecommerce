
import Navbar from '../../component/Nav/navbar.jsx'
import Carousel from '../../component/Carousel/carousel.jsx'
import Product from '../../component/product/product.jsx'
import ProductContainer from '../../component/productContainer/productContainer.jsx'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ProductContainer>
                <Product />
            </ProductContainer>



        </>
    )
}

export default HomePage
