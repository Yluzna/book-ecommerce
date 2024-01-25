import ProductContainer from './component/productContainer/productContainer'
import Product from './component/product/product'
import data from '../api/book.json'
import Carrusel from './component/carrusel/carrusel'
import Navbar from './component/Nav/navbar'
import { ShoppingCartProvier } from './Context/context'
import ProductDetail from './component/ProductDetail/producdetail'
import './App.css'


function App() {
  return (
    <>
    <ShoppingCartProvier>
    <Navbar/>
    <Carrusel />
    <ProductDetail />
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
      </ShoppingCartProvier>
</>
  )
}

export default App
