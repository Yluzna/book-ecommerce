import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'
import Product from './component/product/product'




function App(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                    <Route path='Dashboard' element={<Dashboard/>}/>
                    <Route path='Home' element={<HomePage/>}/>
                    <Route path='Product' element={<Product/>}/>
                    <Route path='*' element={<About/>}/>

            </Routes>
        </div>
    )
}
export default App