import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/context'
import './productdetail.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed  right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-black'>Detail</h2>
                <div className='text-black cursor-pointer'
                 onClick={context.closeProductDetail}>x
                </div>

            </div>
            <figure>
                <img className='w-full h-full rounded-lg' src={context.productToShow.img} alt={context.productToShow.name} />
            </figure>
            <p>
                <span>${context.productToShow.price}</span>
            </p>
        </aside>
    )
}



export default ProductDetail