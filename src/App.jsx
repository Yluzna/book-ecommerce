import './App.css'
import ProductContainer from './component/productContainer/productContainer'
import Product from './component/product/product'
import data from '../api/book.json'
import Navbar from './component/Nav/navbar'
import Carrusel from './component/carrusel/carrusel'
function App() {

  return (
    <>
    <Navbar />
    <Carrusel />
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

export default App
