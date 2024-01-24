import ProductContainer from './component/productContainer/productContainer'
import Product from './component/product/product'
import data from '../api/book.json'
import Carousel from './component/Carousel/carousel'
import Navbar from './component/Nav/navbar'
// import SearchBar from './component/Search/Search'
import './App.css'



function App() {
  return (
    <>
    <Navbar/>
    <Carousel />
    {/* <SearchBar /> */}
    <ProductContainer  >

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

export default App
