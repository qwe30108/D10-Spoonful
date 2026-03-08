import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import feather from "feather-icons";

const baseURL = "https://datasofspoonful.zeabur.app";

function NewsBadge({ tags, textColor, bgColor }) {
  if (tags.length === 0) return null;
  return (
    <div>
      {tags.map((tag, index) => {
        return (
          <span
            key={index}
            className={`badge fw-normal rounded-pill ${textColor} ${bgColor} fs-5 me-2 me-lg-3 mb-2 mb-lg-0 py-1 px-2 d-inline-flex vertical-align-center align-items-center gap-1`}
          >
            <span>#</span>
            <span>{tag}</span>
          </span>
        );
      })}
    </div>
  );
}

const HeroArticle = ({ newsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNews = newsList[currentIndex];
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current && currentNews?.images?.[0]) {
      bgRef.current.style.setProperty(
        "--dynamic-bg",
        `url(${currentNews.images[0]})`,
      );
    }
  }, [currentNews]);

  // 上一則
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsList.length - 1 : prevIndex - 1,
    );
  };

  // 下一則
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsList.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="container py-9 py-lg-10">
      <div className="container-fluid">
        <div className="card border-0 rounded-0 bg-primary-50">
          <div className="row">
            {/* 左側圖片 */}
            <div ref={bgRef} className="news-background col-12 col-sm-7"></div>
            <div className="col-12 col-sm-1"></div>
            {/* 右側內容 */}
            <div className="col-12 col-sm-4 py-9 py-lg-5 d-flex flex-column">
              <div className="card-body p-0 d-flex flex-column">
                <div className="d-flex align-items-center mb-3 small-title">
                  <h6 className="card-text text-secondary-800 my-0">
                    {currentNews.category}
                  </h6>
                  <div className="category-header-line flex-grow-1"></div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    //微調位置
                    className="flex-shrink-0"
                    style={{ transform: "translateY(-2px)" }}
                  >
                    <path
                      d="M2.45284 6.49477H17.536C17.7199 6.49477 17.8952 6.419 18.0213 6.28549C18.1475 6.15198 18.2129 5.97241 18.2026 5.78883L18.1942 5.6156C18.0857 3.86259 16.6205 2.48942 14.8578 2.48942H13.9999V1.82186C13.9999 1.45336 13.7009 1.1543 13.3324 1.1543C12.9639 1.1543 12.6648 1.45336 12.6648 1.82186V2.48942H7.32435V1.82186C7.32435 1.45336 7.02529 1.1543 6.65679 1.1543C6.2883 1.1543 5.98923 1.45336 5.98923 1.82186V2.48942H5.13142C3.36873 2.48942 1.9031 3.86292 1.79463 5.61693L1.78628 5.78916C1.7756 5.97241 1.84135 6.15198 1.96719 6.28583C2.09302 6.41967 2.26926 6.49477 2.45284 6.49477Z"
                      fill="#EFAB23"
                    />
                    <path
                      d="M18.307 8.48095C18.2983 8.1188 18.0019 7.83008 17.6398 7.83008H2.34931C1.98716 7.83008 1.6911 8.1188 1.68176 8.48095C1.62201 10.8725 1.6644 13.2557 1.80792 15.5651C1.91206 17.2407 3.25419 18.5825 4.9291 18.6866C6.61001 18.7921 8.30228 18.8448 9.99454 18.8448C11.6865 18.8448 13.3794 18.7921 15.0593 18.6863C16.7349 18.5821 18.0767 17.24 18.1812 15.5648C18.3247 13.2557 18.3671 10.8721 18.307 8.48095ZM13.3323 11.8354C12.7793 11.8354 12.331 11.3872 12.331 10.8341C12.331 10.281 12.7793 9.83276 13.3323 9.83276C13.8854 9.83276 14.3337 10.281 14.3337 10.8341C14.3337 11.3872 13.8854 11.8354 13.3323 11.8354ZM14.3337 14.1719C14.3337 14.725 13.8854 15.1732 13.3323 15.1732C12.7793 15.1732 12.331 14.725 12.331 14.1719C12.331 13.6188 12.7793 13.1706 13.3323 13.1706C13.8854 13.1706 14.3337 13.6188 14.3337 14.1719ZM6.65674 13.1706C7.20982 13.1706 7.65808 13.6188 7.65808 14.1719C7.65808 14.725 7.20982 15.1732 6.65674 15.1732C6.10367 15.1732 5.6554 14.725 5.6554 14.1719C5.6554 13.6188 6.10367 13.1706 6.65674 13.1706ZM5.6554 10.8341C5.6554 10.281 6.10367 9.83276 6.65674 9.83276C7.20982 9.83276 7.65808 10.281 7.65808 10.8341C7.65808 11.3872 7.20982 11.8354 6.65674 11.8354C6.10367 11.8354 5.6554 11.3872 5.6554 10.8341ZM8.9932 14.1719C8.9932 13.6188 9.44147 13.1706 9.99454 13.1706C10.5476 13.1706 10.9959 13.6188 10.9959 14.1719C10.9959 14.725 10.5476 15.1732 9.99454 15.1732C9.44147 15.1732 8.9932 14.725 8.9932 14.1719ZM9.99454 11.8354C9.44147 11.8354 8.9932 11.3872 8.9932 10.8341C8.9932 10.281 9.44147 9.83276 9.99454 9.83276C10.5476 9.83276 10.9959 10.281 10.9959 10.8341C10.9959 11.3872 10.5476 11.8354 9.99454 11.8354Z"
                      fill="#EFAB23"
                    />
                  </svg>
                  <span className="fs-5 ms-2">{currentNews.date}</span>
                </div>
                <p className="card-title text-primary-950 mb-3 fs-32 fs-lg-48 fw-medium">
                  {currentNews.title}
                </p>
                <p className="card-text  mb-4 text-gray-800">
                  {currentNews.summary}
                </p>
                <div className="card-text mb-9 mb-lg-0">
                  <NewsBadge
                    tags={currentNews.tags}
                    textColor="text-gray-900"
                    bgColor="bg-white"
                  />
                </div>

                {/* 指示條與切換按鈕 */}
                <div className="d-flex align-items-center justify-content-between mt-auto">
                  {/* 指示條 */}
                  <div className="news-indicators">
                    {newsList.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`indicator-item ${currentIndex === index ? "active" : ""}`}
                      ></div>
                    ))}
                  </div>

                  {/* 切換按鈕 */}
                  <div className="news-controls">
                    <button
                      onClick={handlePrev}
                      className="btn-news-ctrl shadow-sm"
                    >
                      <span className="fs-5 fw-bold">&lt;</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="btn-news-ctrl shadow-sm"
                    >
                      <span className="fs-5 fw-bold">&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ data }) => {
  return (
    <div className="card news-card">
      <div className="p-4">
        <img src={data.images[0]} className="card-img-top" alt={data.title} />
      </div>

      <div className="card-body pt-0">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h6 className="fs-5 text-secondary-700 mb-0">{data.category}</h6>
          <h6 className="fs-5 text-gray-900 mb-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              //微調位置
              className="flex-shrink-0"
              style={{ transform: "translateY(-2px)" }}
            >
              <path
                d="M2.45284 6.49477H17.536C17.7199 6.49477 17.8952 6.419 18.0213 6.28549C18.1475 6.15198 18.2129 5.97241 18.2026 5.78883L18.1942 5.6156C18.0857 3.86259 16.6205 2.48942 14.8578 2.48942H13.9999V1.82186C13.9999 1.45336 13.7009 1.1543 13.3324 1.1543C12.9639 1.1543 12.6648 1.45336 12.6648 1.82186V2.48942H7.32435V1.82186C7.32435 1.45336 7.02529 1.1543 6.65679 1.1543C6.2883 1.1543 5.98923 1.45336 5.98923 1.82186V2.48942H5.13142C3.36873 2.48942 1.9031 3.86292 1.79463 5.61693L1.78628 5.78916C1.7756 5.97241 1.84135 6.15198 1.96719 6.28583C2.09302 6.41967 2.26926 6.49477 2.45284 6.49477Z"
                fill="#EFAB23"
              />
              <path
                d="M18.307 8.48095C18.2983 8.1188 18.0019 7.83008 17.6398 7.83008H2.34931C1.98716 7.83008 1.6911 8.1188 1.68176 8.48095C1.62201 10.8725 1.6644 13.2557 1.80792 15.5651C1.91206 17.2407 3.25419 18.5825 4.9291 18.6866C6.61001 18.7921 8.30228 18.8448 9.99454 18.8448C11.6865 18.8448 13.3794 18.7921 15.0593 18.6863C16.7349 18.5821 18.0767 17.24 18.1812 15.5648C18.3247 13.2557 18.3671 10.8721 18.307 8.48095ZM13.3323 11.8354C12.7793 11.8354 12.331 11.3872 12.331 10.8341C12.331 10.281 12.7793 9.83276 13.3323 9.83276C13.8854 9.83276 14.3337 10.281 14.3337 10.8341C14.3337 11.3872 13.8854 11.8354 13.3323 11.8354ZM14.3337 14.1719C14.3337 14.725 13.8854 15.1732 13.3323 15.1732C12.7793 15.1732 12.331 14.725 12.331 14.1719C12.331 13.6188 12.7793 13.1706 13.3323 13.1706C13.8854 13.1706 14.3337 13.6188 14.3337 14.1719ZM6.65674 13.1706C7.20982 13.1706 7.65808 13.6188 7.65808 14.1719C7.65808 14.725 7.20982 15.1732 6.65674 15.1732C6.10367 15.1732 5.6554 14.725 5.6554 14.1719C5.6554 13.6188 6.10367 13.1706 6.65674 13.1706ZM5.6554 10.8341C5.6554 10.281 6.10367 9.83276 6.65674 9.83276C7.20982 9.83276 7.65808 10.281 7.65808 10.8341C7.65808 11.3872 7.20982 11.8354 6.65674 11.8354C6.10367 11.8354 5.6554 11.3872 5.6554 10.8341ZM8.9932 14.1719C8.9932 13.6188 9.44147 13.1706 9.99454 13.1706C10.5476 13.1706 10.9959 13.6188 10.9959 14.1719C10.9959 14.725 10.5476 15.1732 9.99454 15.1732C9.44147 15.1732 8.9932 14.725 8.9932 14.1719ZM9.99454 11.8354C9.44147 11.8354 8.9932 11.3872 8.9932 10.8341C8.9932 10.281 9.44147 9.83276 9.99454 9.83276C10.5476 9.83276 10.9959 10.281 10.9959 10.8341C10.9959 11.3872 10.5476 11.8354 9.99454 11.8354Z"
                fill="#EFAB23"
              />
            </svg>
            <span className="ms-2">{data.date}</span>
          </h6>
        </div>
        <h5 className="card-title text-primary-950 mb-4">{data.title}</h5>
        <p className="card-text text-gray-800 summary-text mb-4">
          {data.summary}
        </p>
        <div className="card-text">
          <NewsBadge
            tags={data.tags}
            textColor="text-primary-950"
            bgColor="bg-primary-50"
          />
        </div>
      </div>
    </div>
  );
};

const NewsSection = ({ newsList }) => {
  const [activeTab, setActiveTab] = useState("全部");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = ["全部", "系統公告", "挑食專欄"];

  const filteredNews = newsList.filter((news) => {
    const matchCategory = activeTab === "全部" || news.category === activeTab;
    const matchSearch = news.title.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <section className="container py-10 py-lg-120">
      <h2 className="text-center mb-8 h1 text-primary-950">最新動態</h2>

      <div className="d-flex flex-wrap align-items-center mb-8 row-gap-3">
        <ul className="nav nav-tabs me-auto flex-grow-1">
          {tabs.map((tab, index) => (
            <li
              className={`nav-item flex-fill flex-lg-grow-0 ${index < tabs.length - 1 ? "pe-1" : ""}`}
              key={tab}
            >
              <a
                className={`nav-link text-center px-0 px-lg-8 py-3 border-0 ${activeTab === tab ? "bg-primary-600 text-white" : "bg-white text-primary-950"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <div className="position-relative search-field">
          <input
            id="news-search-input"
            name="news-search-input"
            className="form-control text-gray-500 bg-white ps-5 py-3 search-field rounded-pill"
            type="text"
            placeholder="搜尋餐點或餐廳名稱"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6211 13.577L11.9426 9.89825C12.5676 8.90323 12.9303 7.72717 12.9303 6.46503C12.9303 2.89429 10.0356 0 6.46503 0C2.89442 0 0 2.89429 0 6.46503C0 10.0359 2.89429 12.9299 6.46503 12.9299C7.83856 12.9299 9.1108 12.5005 10.1577 11.7708L13.7924 15.4058C14.045 15.6581 14.3761 15.7838 14.7068 15.7838C15.0378 15.7838 15.3685 15.6581 15.6215 15.4058C16.1262 14.9006 16.1262 14.0822 15.6211 13.577ZM6.46503 10.8354C4.05162 10.8354 2.09498 8.87885 2.09498 6.4653C2.09498 4.05176 4.05162 2.09511 6.46503 2.09511C8.87858 2.09511 10.8351 4.05176 10.8351 6.4653C10.8351 8.87885 8.87858 10.8354 6.46503 10.8354Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* 最新消息卡片列表 */}
      <div className="row g-4 mb-8">
        {filteredNews.map((news) => (
          <div key={news.id} className="col-12 col-lg-3">
            <NewsCard data={news} />
          </div>
        ))}
      </div>

      {/* 載入更多 */}
      <div className="text-center">
        <button className="btn load-more-btn rounded-pill py-3">
          載入更多
          <span className="ps-2 d-inline-flex align-items-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.64645 4.14645C8.84171 3.95118 9.15822 3.95118 9.35348 4.14645C9.54874 4.34171 9.54874 4.65822 9.35348 4.85348L6.35348 7.85348C6.15822 8.04874 5.84171 8.04874 5.64645 7.85348L2.64645 4.85348C2.45118 4.65822 2.45118 4.34171 2.64645 4.14645C2.84171 3.95118 3.15822 3.95118 3.35348 4.14645L5.99996 6.79293L8.64645 4.14645Z" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${baseURL}/news`, {
          params: {
            _sort: "id",
            _order: "desc",
            _limit: 8,
          },
        });
        setNewsList(response.data);
      } catch (error) {
        console.error("取得資料失敗", error);
      }
    };

    fetchNews();
  }, []);

  if (newsList.length === 0)
    return <div className="text-center py-5">消息載入中...</div>;

  return (
    <div className="bg-primary-50">
      <HeroArticle newsList={newsList} />
      <NewsSection newsList={newsList} />
    </div>
  );
};

export default News;
