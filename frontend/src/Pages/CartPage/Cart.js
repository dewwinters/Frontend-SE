import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div className='Cart'>
      <div className='TopLeftCart'>
        <div className="TopLeftCartTitle">Shopping Cart</div>
        <div className="DesellectAllCart">Deselect all items</div>
        <div className="CartPriceTextDivider">Price</div>

        <div className='CartItemDiv'>
          <div className='CartItemBlock'>
            <div className='CartItemLeftBlock'>
              <div className='CartItemLeftBlockImage'>
                <img className='CartItemLeftBlockImg' src='https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_SX450_.jpg'/>
              </div>
              <div className='CartItemLeftBlockDetail'>
                <div className='CartItemProductName'>Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD IPS Display |....</div>
                <div className='InstockCart'>In Stock</div>
                <div className='FreeShipping'>Freeshipping Available </div>
                <div className='RemoveFromCart'>Remove From Cart</div>
              </div>

            </div>

            <div className='CartItemRightBlock'>
              đ 7,800,800
            </div>

          </div>
        </div>

      </div>

      <div className='TopRightCart'>
        <div className='SubTotalTitle'>Subtotal ({2} items) : <span className='SubTotalTitleSpan'>VND {45000}</span></div>
        <div className='GiftAddTo'>
          <input type='Checkbox'/>
          <div>This order contain a gift</div>
        </div>
        <div className='ProceedToBuy'> Proceed to buy </div>
      </div>

    </div>
  )
}

export default Cart