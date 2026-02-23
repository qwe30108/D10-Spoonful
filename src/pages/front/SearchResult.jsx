import React, { useState, useEffect } from "react";
import axios from "axios";
import feather from "feather-icons";
import TagBadge from "../../component/TagBadge";

function SearchResults() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = "https://datasofspoonful.zeabur.app";

  const getSearchDishes = async () => {
    try {
      const title = "牛肉麵";
      const excludedTags = ["蒜"];
      const allowedCities = ["台北"];

      const response = await axios.get(`${baseURL}/dishes`, {
        params: {
          status: "published",
          title_like: title,
          _expand: "restaurant",
        },
      });

      setIsLoading(true);

      const filterDishes = response.data.filter((dish) => {
        const hasExcludedTag = dish.tags.some((tag) =>
          excludedTags.includes(tag),
        );
        const isInAllowedCity = allowedCities.some((city) =>
          dish.restaurant.address.includes(city),
        );
        return !hasExcludedTag && isInAllowedCity;
      });
      //console.log(filterDishes);
      setDishes(filterDishes);
      setIsLoading(false);
    } catch (error) {
      //console.error("取得資料失敗", error);
      setError(error);
      setIsLoading(false);
    }
  };

  //取得餐點資訊
  useEffect(() => {
    getSearchDishes();
  }, []);

  //document.title
  useEffect(() => {
    document.title = "餐點結果列表";

    return () => {
      document.title = "Spoonful";
    };
  }, []);

  //載入icon
  useEffect(() => {
    feather.replace();
  }, [dishes]);

  //背景顏色
  useEffect(() => {
    document.body.classList.add("bg-primary-50");

    return () => {
      document.body.classList.remove("bg-primary-50");
    };
  }, []);

  //描述文字換行
  const SmartText = ({ children, limit = 10 }) => {
    const regex = new RegExp(`(.{${limit},}?[，。！？、\\s])`, "g");
    const formattedText = children.replace(regex, "$1\n");
    return (
      <span
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {formattedText}
      </span>
    );
  };

  return (
    <>
      <div className="yellow-brown-food-background index-page">
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
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="選擇項目"
                >
                  <div className="selected-items d-flex align-items-end"></div>
                </button>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="multiSelectDropdown"
                >
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="薑" id="checkbox1" />
                      <label htmlFor="checkbox1" className="mb-2">
                        薑
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="蒜" id="checkbox2" />
                      <label htmlFor="checkbox2" className="mb-2">
                        蒜
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="香菜" id="checkbox3" />
                      <label htmlFor="checkbox3" className="mb-2">
                        香菜
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="洋蔥" id="checkbox4" />
                      <label htmlFor="checkbox4" className="mb-2">
                        洋蔥
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="番茄" id="checkbox5" />
                      <label htmlFor="checkbox5" className="mb-2">
                        番茄
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="生菜" id="checkbox6" />
                      <label htmlFor="checkbox6" className="mb-2">
                        生菜
                      </label>
                    </div>
                  </li>

                  <li>
                    <div className="dropdown-item">
                      <input type="checkbox" value="牛肉" id="checkbox7" />
                      <label htmlFor="checkbox7">牛肉</label>
                    </div>
                  </li>
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
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="where-selected-item">台北市</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      台北市
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      新北市
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      桃園市
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      新竹縣
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      苗栗縣
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      台中市
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      彰化縣
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-button col-md-3 flex-grow-1 flex-lg-grow-0 align-self-end">
              <button
                type="button"
                className="rounded-pill btn btn-secondary-700 px-24 py-12 border border-0"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 px-lg-0 result-container">
        {/* <!-- 回報餐點資訊 --> */}
        <div className="d-flex justify-content-start align-items-center mb-5">
          <p className="mb-0 me-4 fs-4 text-primary-950">找不到想要的餐點嗎?</p>
          <button className="btn btn-report rounded-1 d-flex align-items-center fs-5 py-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_671_4310)">
                <path
                  d="M23.5013 17.9976L15.0233 2.41279C13.6612 0.119622 10.3407 0.116575 8.9767 2.41279L0.499073 17.9976C-0.893396 20.3408 0.792463 23.3081 3.52167 23.3081H20.478C23.2049 23.3081 24.8938 20.3432 23.5013 17.9976ZM12 20.4956C11.2248 20.4956 10.5937 19.8646 10.5937 19.0894C10.5937 18.3142 11.2248 17.6831 12 17.6831C12.7752 17.6831 13.4062 18.3142 13.4062 19.0894C13.4062 19.8646 12.7752 20.4956 12 20.4956ZM13.4062 14.8706C13.4062 15.6458 12.7752 16.2769 12 16.2769C11.2248 16.2769 10.5937 15.6458 10.5937 14.8706V7.83937C10.5937 7.06415 11.2248 6.43312 12 6.43312C12.7752 6.43312 13.4062 7.06415 13.4062 7.83937V14.8706Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_671_4310">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="ms-2 fs-5">回報餐點資訊</span>
          </button>
        </div>

        {isLoading ? (
          <div>loading...</div>
        ) : (
          dishes.map((dish) => (
            <div className="row" key={dish.id}>
              <div className="card p-4 p-lg-6 mb-5 mb-lg-9 rounded-5 result-card-container">
                {/* <!-- 可課製 --> */}
                {dish.isCustomizable ? (
                  <div className="img-custom">
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcSet="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/customization_64.WEBP"
                      />
                      <img
                        src="https://raw.githubusercontent.com/qwe30108/D10-Spoonful/assets/add-webp-images/src/assets/images/webp-images/customization_55.WEBP"
                        alt="customization"
                      />
                    </picture>
                  </div>
                ) : (
                  <></>
                )}

                <div className="row g-0">
                  {/* <!-- picture --> */}
                  <div className="col-lg-4 d-flex align-self-stretch mb-5 mb-lg-0">
                    <img
                      src={dish.images[0]}
                      className="img-fluid rounded-3 img-dish"
                      alt="..."
                    />
                  </div>

                  {/* <!-- content --> */}
                  <div className="col-lg-8">
                    <div className="card-body d-flex flex-column justify-content-between px-0 ms-0 ms-lg-9">
                      {/* <!-- address & description --> */}
                      <div>
                        <h3 className="card-title text-primary-950 mb-3">
                          {dish.title}
                        </h3>
                        <p className="card-text fs-4 text-gray-900 mb-3 d-flex align-items-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-2"
                          >
                            <path
                              d="M12 0C7.038 0 3 4.066 3 9.065C3 16.168 11.154 23.502 11.501 23.81C11.644 23.937 11.822 24 12 24C12.178 24 12.356 23.937 12.499 23.811C12.846 23.502 21 16.168 21 9.065C21 4.066 16.962 0 12 0ZM12 14C9.243 14 7 11.757 7 9C7 6.243 9.243 4 12 4C14.757 4 17 6.243 17 9C17 11.757 14.757 14 12 14Z"
                              fill="#E59C0A"
                            />
                          </svg>
                          {dish.restaurant.address}
                        </p>
                        <p className="card-text fs-5 mb-6 mb-lg-0">
                          <small className="text-gray-700">
                            <SmartText limit={12}>{dish.description}</SmartText>
                          </small>
                        </p>
                      </div>

                      {/* <!-- tags & button --> */}
                      <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
                        <TagBadge tags={dish.tags} />
                        <div className="ms-lg-auto mx-auto mx-lg-0 flex-grow-1 flex-lg-grow-0">
                          <button
                            type="button"
                            className="btn rounded-pill text-white btn-secondary-700 py-3 px-lg-9 d-flex align-items-center justify-content-center w-100 w-lg-auto"
                          >
                            <span className="me-2">看更多</span>
                            <i
                              data-feather="chevron-right"
                              width="16px"
                              height="16px"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* <!-- pagination --> */}
        <div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item me-4">
                <a className="page-link text-primary-950" href="#">
                  <i data-feather="chevron-left" width="16px" height="16px"></i>
                </a>
              </li>
              <li className="page-item me-4 active">
                <a className="page-link bg-primary-600" href="#">
                  1
                </a>
              </li>
              <li className="page-item me-4">
                <a className="page-link text-primary-950" href="#">
                  2
                </a>
              </li>
              <li className="page-item me-4">
                <a className="page-link text-primary-950" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-primary-950" href="#">
                  <i
                    data-feather="chevron-right"
                    width="16px"
                    height="16px"
                  ></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
