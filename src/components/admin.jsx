import './Admin.css'

const admin = () => {
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
     <div className='Articles'>
      <img src="./img/juego-de-tronos.jpg" alt="img-libro" className='book-juegotronos'/>
      <div className='description-article'>
     <h2>Juego de Tronos</h2>
     <p>GEORGE R.R MARTIN</p>
     <p className='price'>$ 35.53</p>
     </div>
     </div>
    </>
  )
   }
export default admin