import { useState } from 'react'
import './App.css'
import Admin from './components/admin'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import  { fontAwesomeIcon } from '@fontAwesome/reac/-fontAwesome';
import  { faEdit, faTrashAlt } from '@fortawesome/free-solid-vsg-icons';
import  { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='title'>Panel de Administrador</h1>
      <div className='search-panel'>
      <input
      type="text"
      placeholder='Search Book'
      className='text-panel'
      name='busqueda'> 
     </input> 
     </div>
    <Admin  img="../img/juego-de-tronos.jpg" price="$30" bookName="Juego de tronos" />
    <Admin  img="../img/festin-de-cuervos-cancion-de-hielo-y-fuego.jpg" price="$35" bookName="Festin de cuervos cancion de hielo y fuego" />
    <Admin  img="../img/choque-de-reyes-cancion-de-hielo-y-fuego.jpg" price="$30" bookName="Choque de reyes cancionde hielo y fuego" />
    <Admin  img="../img/danza-de-dragones-cancion-de-hielo-y-fuego.jpg" price="$32" bookName="Danza de dragones cancion de hielo y fuego" />
    <Admin  img="../img/tormenta-de-espadas-cancion-de-hielo-y-fuego.jpg" price="$32" bookName="Tormenta de espadas cancion de hielo y fuego." />
    </>

  )
}


export default App;
