import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'


function App(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}/>
                    <Route path='/Home' element={<HomePage/>}/>
                    <Route path='Dashboard' element={<Dashboard/>}/>
                    <Route path='*' element={<About/>}/>

            </Routes>
        </div>
    )
}
export default App