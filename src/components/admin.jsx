import './Admin.css'

const Admin = (props) => {
  return (
    <>
      

     <div className='Articles'>
      <img src={props.img} alt="img-libro" className='book-juegotronos'/>
      <div className='description-article'>
     <h2>{props.bookName}</h2>
     <p>GEORGE R.R MARTIN</p>
     <p className='price'>{props.price}</p>
     </div>
     </div>
    </>
  )
   }
export default Admin