import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [topDishes, setToptDishes] = useState([]);
  const [latestDishes, setLatestDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "https://datasofspoonful.zeabur.app";

  // 搜尋條件的 State
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [city, setCity] = useState("台北市");
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  // Checkbox 勾選與取消勾選
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // 如果打勾，就把這個食材加入陣列
      setTags([...tags, value]);
    } else {
      // 如果取消打勾，就把這個食材從陣列中移除
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  //大家都想吃
  const getTopDishes = async () => {
    try {
      const response = await axios.get(`${baseURL}/dishes`, {
        params: {
          status: "published",
          _sort: "likeCount",
          _order: "desc",
          _limit: 6,
          _expand: "restaurant",
        },
      });
      setIsLoading(true);
      setToptDishes(response.data);
      setIsLoading(false);
    } catch (error) {
      //console.error("取得資料失敗", error);
      setError(error);
      setIsLoading(false);
    }
  };

  //新餐點出爐
  const getLatestDishes = async () => {
    try {
      const response = await axios.get(`${baseURL}/dishes`, {
        params: {
          status: "published",
          _sort: "id",
          _order: "desc",
          _limit: 3,
          _expand: "restaurant",
        },
      });
      setIsLoading(true);
      setLatestDishes(response.data);
      setIsLoading(false);
    } catch (error) {
      //console.error("取得資料失敗", error);
      setError(error);
      setIsLoading(false);
    }
  };

  //取得大家都想吃、新餐點出爐
  useEffect(() => {
    getTopDishes();
    getLatestDishes();
  }, []);

  const searchParams = new URLSearchParams();
  if (title) searchParams.append("title", title);
  if (city) searchParams.append("city", city);
  if (tags.length > 0) searchParams.append("tags", tags.join(","));
  const targetUrl = `/searchResult?${searchParams.toString()}`;

  const ingredientsList = [
    "蔥",
    "薑",
    "蒜",
    "香菜",
    "洋蔥",
    "辣",
    "番茄",
    "生菜",
    "牛肉",
  ];
  const citiesList = [
    "台北市",
    "新北市",
    "桃園市",
    "新竹縣",
    "苗栗縣",
    "台中市",
    "彰化縣",
  ];

  return (
    <div className="container">
      {/* 條件搜尋 */}
      <div className="mask-wrapper d-flex flex-column align-items-center">
        <div className="masked-banner"></div>
        <div className="index-search-solgan text-center mt-60">
          <h1>為你挑食</h1>
          <p className="small-title h3">想吃不想吃的都可以</p>
        </div>
        <div className="search-box px-20 py-16 mx-auto">
          <div className="search-box-left row">
            <div className="search-box-wannaeat text-start d-flex col-md-3">
              <div className="mb-1">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_74_1069)">
                    <path
                      d="M13.4545 0.863525C13.3098 0.863525 13.1711 0.920993 13.0688 1.02329C12.9665 1.12558 12.909 1.26432 12.909 1.40898V4.68171C12.909 4.82637 12.8516 4.96511 12.7493 5.0674C12.647 5.16969 12.5083 5.22716 12.3636 5.22716H11.8181V1.40898C11.8181 1.26432 11.7607 1.12558 11.6584 1.02329C11.5561 0.920993 11.4173 0.863525 11.2727 0.863525C11.128 0.863525 10.9893 0.920993 10.887 1.02329C10.7847 1.12558 10.7272 1.26432 10.7272 1.40898V5.22716H10.1818C10.0371 5.22716 9.89837 5.16969 9.79608 5.0674C9.69379 4.96511 9.63632 4.82637 9.63632 4.68171V1.40898C9.63632 1.26432 9.57885 1.12558 9.47656 1.02329C9.37427 0.920993 9.23553 0.863525 9.09086 0.863525C8.9462 0.863525 8.80746 0.920993 8.70517 1.02329C8.60288 1.12558 8.54541 1.26432 8.54541 1.40898V5.22716C8.5474 5.78341 8.71944 6.32575 9.03844 6.78144C9.35744 7.23713 9.80816 7.58438 10.3301 7.77662L9.95541 15.2166C9.95948 15.345 9.98946 15.4711 10.0435 15.5876C10.0976 15.7041 10.1747 15.8084 10.2701 15.8943C10.3656 15.9802 10.4774 16.0459 10.5989 16.0875C10.7204 16.1291 10.849 16.1457 10.977 16.1363H11.5683C11.6964 16.1457 11.825 16.1291 11.9465 16.0875C12.068 16.0459 12.1798 15.9802 12.2752 15.8943C12.3707 15.8084 12.4477 15.7041 12.5018 15.5876C12.5559 15.4711 12.5859 15.345 12.59 15.2166L12.2147 7.77662C12.7371 7.58493 13.1882 7.23784 13.5074 6.78204C13.8266 6.32623 13.9985 5.7836 14 5.22716V1.40898C14 1.26432 13.9425 1.12558 13.8402 1.02329C13.7379 0.920993 13.5992 0.863525 13.4545 0.863525Z"
                      fill="#9F6A00"
                    />
                    <path
                      d="M4.72727 0.863525C3.22127 0.863525 2 3.02898 2 4.97516C2 6.49262 2.74564 7.42098 3.78636 7.76025L3.41 15.2166C3.41407 15.345 3.44405 15.4711 3.49813 15.5876C3.55222 15.7041 3.62929 15.8084 3.72473 15.8943C3.82016 15.9802 3.93198 16.0459 4.05346 16.0875C4.17494 16.1291 4.30358 16.1457 4.43164 16.1363H5.02291C5.15097 16.1457 5.2796 16.1291 5.40109 16.0875C5.52257 16.0459 5.63439 15.9802 5.72982 15.8943C5.82525 15.8084 5.90233 15.7041 5.95642 15.5876C6.0105 15.4711 6.04048 15.345 6.04455 15.2166L5.66818 7.76025C6.70891 7.42098 7.45455 6.49262 7.45455 4.97516C7.45455 3.02898 6.23327 0.863525 4.72727 0.863525Z"
                      fill="#9F6A00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_74_1069">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <label htmlFor="inputText" className="form-label">
                  我想吃
                </label>
              </div>
              <input
                type="text"
                id="inputText"
                className="form-control bg-transparent border border-0"
                aria-describedby=""
                placeholder="請輸入..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="search-box-dnt col-md-3">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-ban"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                </svg>
                不要加
              </p>
              <div className="dropdown" id="myDropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="multiSelectDropdown"
                  aria-expanded="false"
                  aria-label="選擇項目"
                  onClick={() => setIsTagsOpen(!isTagsOpen)}
                >
                  <div className="selected-items d-flex align-items-end flex-wrap gap-1">
                    {tags.length > 0 ? (
                      tags.map((item) => (
                        <span
                          key={item}
                          className="badge my-selected-badge d-flex align-items-center"
                        >
                          {item}
                          <span
                            className="remove-item ms-1"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setTags(tags.filter((tag) => tag !== item));
                            }}
                          >
                            ×
                          </span>
                        </span>
                      ))
                    ) : (
                      <span className="text-muted" style={{ opacity: 0.7 }}>
                        請選擇...
                      </span>
                    )}
                  </div>
                </button>

                <ul
                  className={`dropdown-menu ${isTagsOpen ? "show" : ""}`}
                  aria-labelledby="multiSelectDropdown"
                >
                  {ingredientsList.map((ingredient, index) => (
                    <li key={index}>
                      <label
                        className="dropdown-item d-block"
                        style={{ cursor: "pointer" }}
                      >
                        <input
                          type="checkbox"
                          className="me-2"
                          value={ingredient}
                          checked={tags.includes(ingredient)}
                          onChange={handleCheckboxChange}
                        />
                        {ingredient}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="search-box-where col-md-3">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                在哪裡
              </p>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="whereDropdownButton"
                  //data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setIsCityOpen(!isCityOpen)}
                >
                  <span className="where-selected-item">{city}</span>
                </button>
                <ul className={`dropdown-menu ${isCityOpen ? "show" : ""}`}>
                  {citiesList.map((cityName, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCity(cityName);
                          setIsCityOpen(false);
                        }}
                      >
                        {cityName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="search-button col-md-3  align-self-end">
              <Link
                to={targetUrl}
                className=" rounded-pill btn btn-secondary-700 px-24 py-12 border border-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <span className="ms-2">搜尋</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 今天想吃些什麼 */}
      <div className="what-to-eat mx-auto">
        <div className="background-top"></div>
        <div className="text-center eat-today text-primary-950 mt-60">
          <h2 className="my-12">今天想吃些什麼</h2>
          <p className="small-title h3 mb-40">選個想吃的吧!</p>
        </div>

        <div className="container-fluid mx-auto px-3 px-lg-0">
          {/* 放棄巢狀網格，改用單一層級的 food-grid-container */}
          <div className="food-grid-container">
            {/* 日式料理 */}
            <Link
              to="/searchResult?type=日式料理"
              className="item-sushi text-decoration-none"
            >
              <div className="card-lg-lg image-with-gradient h-100">
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/sushi-3-kinds.WEBP"
                  alt="壽司"
                  className="taiwanese-food-card"
                />
                <div className="card-lg-green-banner"></div>
                <h3 className="card-lg-banner-text text-white">日式料理</h3>
              </div>
            </Link>

            {/* 義國風味 */}
            <Link
              to="/searchResult?type=義國風味"
              className="item-italian text-decoration-none"
            >
              <div className="card-md image-with-gradient h-100">
                <div className="card-lg-green-banner"></div>
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/italian-food-pasta.WEBP"
                  alt="義國風味"
                  className="taiwanese-food-card"
                />
                <h3 className="card-md-banner-text text-white">義國風味</h3>
              </div>
            </Link>

            {/* 韓國美食 */}
            <Link
              to="/searchResult?type=韓國美食"
              className="item-korean text-decoration-none"
            >
              <div className="card-md image-with-gradient h-100">
                <div className="card-lg-green-banner"></div>
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/korean-food-bibimbap.WEBP"
                  alt="韓國美食"
                  className="taiwanese-food-card"
                />
                <h3 className="card-md-banner-text text-white">韓國美食</h3>
              </div>
            </Link>

            {/* 泰式料理 */}
            <Link
              to="/searchResult?type=泰式料理"
              className="item-thai text-decoration-none"
            >
              <div className="card-md image-with-gradient h-100">
                <div className="card-lg-green-banner"></div>
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/thai-food-tomkhakai.WEBP"
                  alt="泰式料理"
                  className="taiwanese-food-card"
                />
                <h3 className="card-md-banner-text text-white">泰式料理</h3>
              </div>
            </Link>

            {/* 美式經典 */}
            <Link
              to="/searchResult?type=美式經典"
              className="item-american text-decoration-none"
            >
              <div className="card-md image-with-gradient h-100">
                <div className="card-lg-green-banner"></div>
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/burger-fries.webp"
                  alt="美式經典"
                  className="taiwanese-food-card"
                />
                <h3 className="card-md-banner-text text-white">美式經典</h3>
              </div>
            </Link>

            {/* 台式小吃 */}
            <Link
              to="/searchResult?type=台式小吃"
              className="item-taiwanese text-decoration-none"
            >
              <div className="card-long image-with-gradient h-100">
                <div className="card-lg-green-banner"></div>
                <img
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/raised-pork-rice.WEBP"
                  alt="台式小吃"
                  className="taiwanese-food-card"
                />
                <h3 className="card-long-banner-text text-white">台式小吃</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="background-top"></div>

      {/* 大家都想吃 */}
      <div className="everybody-eat bg-primary-50 mb-10">
        <div className="text-center  pt-10">
          <h2 className="mb-9 text-primary-950">大家都想吃</h2>
        </div>
        <div className="container">
          <div className="row">
            {topDishes.map((dish) => (
              <div className="col-md-4" key={dish.id}>
                <div className="card border-0 position-relative overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <img
                      src={dish.images[0]}
                      className="card-img"
                      alt={dish.title}
                    />
                  </div>
                  <div className="card-img-overlay d-flex flex-column-reverse">
                    <button
                      id="likeBtn"
                      className="btn like-count-btn d-flex align-items-center gap-2 px-2 py-1 rounded-pill text-white position-absolute top-0 end-0 m-2"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        />
                      </svg>{" "}
                      <span id="likeCount">{dish.likeCount}</span>
                    </button>
                    <div className="card-text-background">
                      <p className="text-white text-start mb-0 line-clamp">
                        {" "}
                        <span className="h5">{dish.title} | </span>
                        {dish.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/dish/${dish.id}`}
                    className="stretched-link"
                  ></Link>
                </div>
                <div className="d-flex justify-content-start mt-3">
                  <svg
                    className="bowl-icon me-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3.5C6.183 3.5 0 5.07702 0 8C0 13.321 4.30402 17.406 8.07502 19.346C8.59402 20.465 11.626 20.5 12 20.5C12.374 20.5 15.406 20.465 15.925 19.346C19.696 17.403 24 13.317 24 8C24 5.07697 17.817 3.5 12 3.5ZM12 11.5C5.51798 11.5 0.999984 9.65497 0.999984 7.99995C0.999984 6.34498 5.51798 4.49998 12 4.49998C18.482 4.49998 23 6.34498 23 8C23 9.65497 18.482 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 7.5C7.839 7.5 4.38202 8.20402 3.64899 9.13298C5.24199 9.81 7.99702 10.5 12 10.5C16.001 10.5 18.756 9.81098 20.348 9.12998C19.609 8.202 16.156 7.5 12 7.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-primary-950 pt-1 mb-5 mb-md-9">
                    {dish.tags.join(" / ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 新餐點出爐 */}
      <div className="new-meals pt-5 pt-md-10 mb-10">
        <div className="new-meals-title text-center text-primary-950 mb-9">
          <h2>新餐點出爐</h2>
          <p className="small-title h3">熱騰騰的要試試嗎?</p>
        </div>
        <div className="container py-md-5">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            className="mySwiper pb-5"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {latestDishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <div className="card new-meals-card p-4 rounded-4 shadow-sm h-100">
                  <img
                    className="rounded-3 w-100 new-meals-img"
                    src={dish.images[0]}
                    alt={dish.title}
                  />
                  <h5 className="mt-3">{dish.title}</h5>
                  <p className="line-clamp">{dish.description}</p>

                  <div className="d-flex justify-content-between mt-auto pt-3">
                    <div>
                      <span className="food-label d-inline-flex align-items-center text-white rounded-pill px-3 py-1">
                        <svg
                          className="me-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3.5C6.183 3.5 0 5.07702 0 8C0 13.321 4.30402 17.406 8.07502 19.346C8.59402 20.465 11.626 20.5 12 20.5C12.374 20.5 15.406 20.465 15.925 19.346C19.696 17.403 24 13.317 24 8C24 5.07697 17.817 3.5 12 3.5ZM12 11.5C5.51798 11.5 0.999984 9.65497 0.999984 7.99995C0.999984 6.34498 5.51798 4.49998 12 4.49998C18.482 4.49998 23 6.34498 23 8C23 9.65497 18.482 11.5 12 11.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 7.5C7.839 7.5 4.38202 8.20402 3.64899 9.13298C5.24199 9.81 7.99702 10.5 12 10.5C16.001 10.5 18.756 9.81098 20.348 9.12998C19.609 8.202 16.156 7.5 12 7.5Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p className="my-auto mb-0">{dish.tags.join(" / ")}</p>
                      </span>
                    </div>
                    <div>
                      <Link
                        to={`/dish/${dish.id}`}
                        className="btn bg-white text-primary-950 rounded-pill px-md-3 py-md-1 d-flex align-items-center"
                      >
                        <p className="my-auto mb-0">
                          <span className="d-none d-md-inline">查看更多</span>
                          <span className="ms-1">›</span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 關於我們 */}
      <div className="about-us pt-5 pt-md-10 mb-120">
        <div className="container">
          <div className="row align-items-center rounded-5 bg-primary-50 p-4 p-md-9 mx-1">
            <div className="about-us-text col-md-6">
              <h2 className="mb-7">關於我們</h2>
              <p className="fs-4">
                是否有過因為一匙香菜而毀了整碗羹的經驗？
                <br />
                去一間陌生的餐廳前，上網看菜單時，
                <br />
                除了選擇障礙外，更多是因為挑食，
                <br />
                不吃蒜泥、酸菜或不加美乃滋、豆瓣醬。
                <br />
                <br />
                我們希望打造一個由使用者共同維護的資訊平台，
                <br />
                能夠分享各地餐廳的菜單細節、食材，
                <br />
                讓不吃香菜、不愛美乃滋的人，都能提前掌握資訊、安心點餐。
              </p>
            </div>
            <div className="about-us-img col-md-6 d-flex flex-column flex-md-row gap-4 py-9">
              <div className="w-30 ratio-sm-4x3">
                <img
                  className="img-fluid rounded-3 object-fit-cover h-100"
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/pizza-tomato-meet.WEBP"
                  alt="披薩"
                />
              </div>
              <div className="coriander-width ratio ratio-4x3">
                <img
                  className=" rounded-3 object-fit-cover h-100"
                  src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/coriander-spoon.WEBP"
                  alt="一匙香菜"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
