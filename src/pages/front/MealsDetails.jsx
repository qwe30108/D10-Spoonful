import React, { useState, useEffect } from 'react';
import axios from 'axios';
import feather from 'feather-icons';
import TagBadge from '../../component/TagBadge';
import ReportBtn from '../../component/ReportBtn';

function CommentCard() {
  const baseURL = 'https://datasofspoonful.zeabur.app';
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(`${baseURL}/reviews`);
        setReviews(res.data);
      } catch (error) {
        console.error('讀取失敗', error);
      }
    };
    getReviews();
  }, []);
  if (reviews.length === 0) return <div>沒有相關評論</div>;

  const showReviews = reviews.filter((item) => item.dishId === 1);
  return (
    <>
      {showReviews.map((item) => (
        <div className='comment-card py-md-9 px-md-6 pt-4 border-bottom' key={item.id}>
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <img src={item.images} className='img-fluid rounded-3 mb-4 mb-md-0' alt='評論1' />
            </div>
            <div className='col-md-7'>
              <p>{item.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function MealsDetails() {
  return (
    <div className='bg-primary-50 pt-10'>
      {/* 餐點資訊區塊 */}
      <div className='meals-info'>
        <div className='container'>
          <div className='row jc-center bg-white pb-4 pb-md-9 mx-0 rounded-4 rounded-md-5'>
            {/* 左側大圖區 */}
            <div className='info-left col-lg-6 mt-4 mt-md-9'>
              <div id='foodCarousel' className='carousel slide carousel-fade' data-bs-ride='carousel'>
                <div className='carousel-inner ratio ratio-4x3 pb-6'>
                  <div className='carousel-item active'>
                    <img
                      src='../src/assets/images/webp-images/pick-up-noodles-near.WEBP'
                      className='d-block w-100 rounded-4 carousel-img'
                      alt='清燉牛肉麵附圖1'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='../src/assets/images/webp-images/beef-noodles-3d-painting.WEBP'
                      className='d-block w-100 rounded-4 carousel-img'
                      alt='清燉牛肉麵附圖2'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='../src/assets/images/webp-images/beef-vegetabl-noodles-on-cloth.WEBP'
                      className='d-block w-100 rounded-4 carousel-img'
                      alt='清燉牛肉麵附圖3'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='../src/assets/images/webp-images/saute-beef-noodles-red-green.WEBP'
                      className='d-block w-100 rounded-4 carousel-img'
                      alt='清燉牛肉麵附圖4'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src='../src/assets/images/webp-images/red-soup-beef-noodles.WEBP'
                      className='d-block w-100 rounded-4 carousel-img'
                      alt='清燉牛肉麵附圖5'
                    />
                  </div>
                </div>

                {/* 左右按鈕 */}
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#foodCarousel'
                  data-bs-slide='prev'
                >
                  <span className='carousel-control-prev-icon bg-primary-500 rounded-circle'></span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#foodCarousel'
                  data-bs-slide='next'
                >
                  <span className='carousel-control-next-icon bg-primary-500 rounded-circle'></span>
                </button>
              </div>

              {/* 縮圖列 */}
              <div className='d-none d-md-flex justify-content-between mt-5 thumb-row'>
                <img
                  src='../src/assets/images/webp-images/pick-up-noodles-near.WEBP'
                  className='thumb'
                  data-bs-target='#foodCarousel'
                  data-bs-slide-to='0'
                />
                <img
                  src='../src/assets/images/webp-images/beef-noodles-3d-painting.WEBP'
                  className='thumb'
                  data-bs-target='#foodCarousel'
                  data-bs-slide-to='1'
                />
                <img
                  src='../src/assets/images/webp-images/beef-vegetabl-noodles-on-cloth.WEBP'
                  className='thumb'
                  data-bs-target='#foodCarousel'
                  data-bs-slide-to='2'
                />
                <img
                  src='../src/assets/images/webp-images/saute-beef-noodles-red-green.WEBP'
                  className='thumb'
                  data-bs-target='#foodCarousel'
                  data-bs-slide-to='3'
                />
                <img
                  src='../src/assets/images/webp-images/red-soup-beef-noodles.WEBP'
                  className='thumb'
                  data-bs-target='#foodCarousel'
                  data-bs-slide-to='4'
                />
              </div>
            </div>

            {/* 右側文字資訊 */}
            <div className='info-right col-lg-6 mt-9'>
              <div className='meals-title d-flex justify-content-between'>
                <h1 className='info-title h2 fs-md-1 text-primary-950'>清燉牛肉麵</h1>
                <div className='add-favorite'>
                  <input type='checkbox' className='btn-check' id='likeBtn' autoComplete='off' />
                  <label
                    className='btn d-flex align-items-center justify-content-center rounded-circle p-0'
                    htmlFor='likeBtn'
                    style={{ width: '48px', height: '48px' }}
                  >
                    <i className='fi fi-rr-heart'></i>
                    <i className='fi fi-sr-heart'></i>
                  </label>
                </div>
              </div>

              <div className='location-info p-4 bg-gray-50 rounded-2 mt-6'>
                <h6 className='h6 fw-bold'>牛私廚</h6>
                <a href='#' className='text-decoration-none text-dark'>
                  <i className='fi fi-sr-marker text-primary-600 pe-2'></i>台北市清月區華月路12巷55號
                </a>
              </div>

              {/* 標籤區 */}
              <div className='mt-6 d-md-flex align-items-center'>
                <img src='../src/assets/images//webp-images/customization_64.WEBP' className='me-4 mb-4' alt='可客製' />
                <div className='d-flex flex-wrap gap-2'>
                  <TagBadge tags={['紅蘿蔔', '洋蔥', '蔥', '番茄']} />
                </div>
              </div>
              <div className='d-inline-flex align-items-center mt-4 mt-md-10'>
                <p className='mb-0 me-4 fs-4 text-primary-950'>找不到想要的餐點嗎?</p>
                <ReportBtn></ReportBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 評論區 */}
      <div className='comment pb-md-10 mx-3'>
        <div className='container my-10 jc-center bg-white p-md-9 pt-6 px-4 rounded-4 rounded-md-5'>
          <h2 className='h1 text-primary-950 mb-0'>評論</h2>
          {/* 評論元件 1 */}
          <CommentCard></CommentCard>
          <div class='d-flex justify-content-center'>
            <button
              type='button'
              class='btn btn-green align-items-center text-white mt-4 mt-md-9 mb-5 px-6 py-3 rounded-5'
            >
              ＋ 分享餐點
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MealsDetails;
