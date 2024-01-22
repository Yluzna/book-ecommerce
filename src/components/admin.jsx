import './Admin.css'

const admin = () => {
  return (
    <>
      <div className='title'>Panel de Administrador</div>
      <div className='search-panel'>
      <input
      type="text"
      placeholder='Buscar'
      className='text-panel'
      name='busqueda'> 
     </input> 
     </div>
    </>
  )
   }
export default admin