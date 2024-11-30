import React from 'react'
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ProductDetail from './Product.json';
import NavBar from "../../Components/Navbar/Navigation"
import Footer from "../../Pages/ProductPage/Footer"

const Product = () => {
  return (
    <div className='ProductPage'>
      <NavBar />
      <div className='ProductTopBanner'>

        <div className='ProductTopBannerItems'>
          Electronics
        </div>

        <div className='ProductTopBannerItemsSubMenu'>Mobiles & Accessories</div>
        <div className="ProductTopBannerItemsSubMenu">Laptops & Accessories</div>
        <div className="ProductTopBannerItemsSubMenu">TV & Home Entertainment</div>
        <div className="ProductTopBannerItemsSubMenu">Audio</div>
        <div className="ProductTopBannerItemsSubMenu">Cameras</div>
        <div className="ProductTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="ProductTopBannerItemsSubMenu">Smart Technology</div>
        <div className="ProductTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="ProductTopBannerItemsSubMenu">Office & Stationary</div>
      </div>

      <div className='ProductPageMain'>
        <div className="ProductPageMainLeftCategory">
          <div className='ProductPageMainLeftCategoryTitle'>Catergory</div>
          <div className="ProductPageMainLeftCategoryContent">
            <div className="ProductPageMainLeftCategoryTitleContent">Computers & Accessories</div>
            <div className="ProductPageMainLeftCategoryContentSub">Macbooks</div>
            <div className="ProductPageMainLeftCategoryContentSub">Amazon Prime</div>
            <div className="ProductPageMainLeftCategoryContentSub">Average Customer Review</div>

            <div className="RatingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="AndUp"> & Up</div>
            </div>

            <div className="RatingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="AndUp"> & Up</div>
            </div>

            <div className="RatingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="AndUp"> & Up</div>
            </div>

            <div className="RatingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="AndUp"> & Up</div>
            </div>

          </div>
        </div>

        <div className='ProductPageMainRight'>
          <div className="ProductPageMainRightTopBanner">
            1-10 of 200 results for <span className='ProductPageMainRightTopBannerSpan'>Laptops</span>
          </div>

          <div className='ItemImageProductPage'>

            {
              ProductDetail.Product.map((item, index) => {
                return (
                  <div className='ItemImageProductPageOne' key={item.id}>
                    <div className='ImageBlockItemImageProductPageOne'>
                      <img src={item.imageUrl} className="ProductImageProduct" />
                    </div>

                    <div className='ProductNameProduct'>
                      <div>{item.name}</div>
                      <div className='ProductNameProductRating'>
                        <StarRateIcon sx={{ fontSize: "15px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "15px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "15px", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "15px", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "15px", color: "#febd69" }} />
                      </div>
                      <div className='PriceProductDetailPage'>
                        <div className='CurrencyText'>đ</div>
                        <div className='RateHomeDetail'>
                          <div className='RateHomeDetailPrice'>{item.price}</div>
                          <div className='AddToCartButton'>Add To Cart</div>
                        </div>

                      </div>
                      <div className='SaleProductPage'>Up to 25% off on Black Friday</div>
                      <div className='DeliveryHomepage'>Free Domestic Shipping By Amazon</div>
                    </div>
                  </div>
                );
              })
            }



          </div>


        </div>

      </div>

      <Footer />
    </div>

  )
}

export default Product