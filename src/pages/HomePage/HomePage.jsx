
import Navbar from '../../component/Nav/navbar.jsx'
import Carousel from '../../component/Carousel/carousel.jsx'
import Product from '../../component/product/product.jsx'
import ProductContainer from '../../component/productContainer/productContainer.jsx'
import data from '../../../api/book.json'

const HomePage = (props) => {
    return (
        <>
            
                <Navbar />
                <Carousel />
                <ProductContainer>
                    {data.map((product => <Product
                        key={product.id}
                        name={product.name}
                        calification={product.calification}
                        price={product.price}
                        img={product.img}
                    />
                    ))}
                </ProductContainer>
            
            






        </>
    )
}

export default HomePage
