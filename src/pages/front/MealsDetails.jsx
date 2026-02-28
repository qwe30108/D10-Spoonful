import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import feather from "feather-icons";
import TagBadge from "../../component/TagBadge";

function CommentCard({ reviews }) {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
  //       const res = await axios.get(`${baseURL}/reviews`);
  //       setReviews(res.data);
  //     } catch (error) {
  //       console.error("讀取失敗", error);
  //     }
  //   };
  //   getReviews();
  // }, []);
  // if (reviews.length === 0) return <div>載入中...</div>;

  // const showReviews = reviews.filter((item) => item.dishId === 1);
  return (
    <>
      {reviews.map((review, index) => (
        <div
          className="comment-card py-md-9 px-md-6 pt-4 border-bottom"
          key={index}
        >
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src={
                  review.images[0] ||
                  "../src/assets/images/webp-images/no-image.webp"
                }
                className="img-fluid rounded-3 mb-4 mb-md-0"
                alt={`評論 ${index + 1}`}
              />
            </div>
            <div className="col-md-7">
              <p>{review.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function DishCard({ dish }) {
  return (
    <>
      {/* 左側大圖區 */}
      <div className="info-left col-lg-6 mt-4 mt-md-9">
        <div
          id="foodCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ratio ratio-4x3 pb-6">
            {dish.images.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100 rounded-4 carousel-img"
                  alt={`${dish.title}圖片 ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* 左右按鈕 */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-primary-500 rounded-circle"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-primary-500 rounded-circle"></span>
          </button>
        </div>

        {/* 縮圖列 */}
        <div className="d-none d-md-flex justify-content-start mt-5 thumb-row">
          {dish.images.map((image, index) => (
            <img
              src={image}
              className="thumb"
              data-bs-target="#foodCarousel"
              data-bs-slide-to={index}
              key={index}
            />
          ))}
        </div>
      </div>

      {/* 右側文字資訊 */}
      <div className="info-right col-lg-6 mt-9">
        <div className="meals-title d-flex justify-content-between">
          <h1 className="info-title h2 fs-md-1 text-primary-950">
            {dish.title}
          </h1>
          <div className="add-favorite">
            <input
              type="checkbox"
              className="btn-check"
              id="likeBtn"
              autoComplete="off"
            />
            <label
              className="btn d-flex align-items-center justify-content-center rounded-circle p-0"
              htmlFor="likeBtn"
              style={{ width: "48px", height: "48px" }}
            >
              <i className="fi fi-rr-heart"></i>
              <i className="fi fi-sr-heart"></i>
            </label>
          </div>
        </div>

        <div className="location-info p-4 bg-gray-50 rounded-2 mt-6">
          <h6 className="h6 fw-bold">{dish.restaurant.name}</h6>
          <a href="#" className="text-decoration-none text-dark">
            <i className="fi fi-sr-marker text-primary-600 pe-2"></i>
            {dish.restaurant.address}
          </a>
        </div>

        {/* 標籤區 */}
        <div className="mt-6 d-md-flex align-items-center">
          {dish.isCustomizable && (
            <img
              src="../src/assets/images//webp-images/customization_64.WEBP"
              className="me-4 mb-4"
              alt="可客製"
            />
          )}

          <div className="d-flex flex-wrap gap-2">
            <TagBadge tags={dish.tags} />
          </div>
        </div>

        <div className="d-inline-flex align-items-center mt-4 mt-md-10">
          <p className="mb-0 me-4 fs-4 text-primary-950">找不到想要的餐點嗎?</p>
          <a
            className="btn btn-report rounded-1 d-flex align-items-center fs-5 py-1"
            href="return.html"
          >
            <span className="ms-2 fs-5">回報餐點資訊</span>
          </a>
        </div>
      </div>
    </>
  );
}
function MealsDetails() {
  const { id } = useParams();
  const baseURL = "https://datasofspoonful.zeabur.app";
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const getDishDetail = async () => {
      try {
        const response = await axios.get(`${baseURL}/dishes/${id}`, {
          params: {
            _expand: "restaurant",
            _embed: "reviews",
          },
        });
        setDish(response.data);
      } catch (error) {
        console.error("取得資料失敗", error);
      }
    };
    getDishDetail();
  }, [id]);

  if (!dish) return <div className="text-center py-5">餐點載入中...</div>;

  return (
    <div className="bg-primary-50 pt-10">
      {/* 餐點資訊區塊 */}
      <div className="meals-info">
        <div className="container">
          <div className="row jc-center bg-white pb-4 pb-md-9 mx-0 rounded-4 rounded-md-5">
            <DishCard dish={dish}></DishCard>
          </div>
        </div>
      </div>

      {/* 評論區 */}
      <div className="comment pb-md-10 mx-3">
        <div className="container my-10 jc-center bg-white p-md-9 pt-6 px-4 rounded-4 rounded-md-5">
          <h2 className="h1 text-primary-950 mb-0">評論</h2>
          {/* 評論元件 1 */}
          <CommentCard reviews={dish.reviews}></CommentCard>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-green align-items-center text-white mt-4 mt-md-9 mb-5 px-6 py-3 rounded-5"
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
