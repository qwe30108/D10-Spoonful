import React from "react";

function About() {
  return (
    <section className="bg-primary-50">
      <div className="about-background text-center text-white">
        <h1 className="mb-4">關於我們</h1>
        <p className="h2 about-small-title">沒有誰的口味是孤單的</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {/* 簡介  */}
          <div className="col-md-8 mb-8">
            <div className="bg-secondary-50 rounded-3 px-4 py-8 text-center">
              <h2 className="text-secondary-950 mt-3 mb-4">
                你是否有過因為一匙香菜而毀了整碗羹的經驗？
              </h2>
              <p className="text-primary-950">
                去一間陌生的餐廳前，經常會先上網看菜單，
                <br />
                除了選擇障礙外，更多是因為挑食，不吃蒜泥、酸菜或不加美乃滋、豆瓣醬。
                <br />
                <br />
                我們希望打造一個由使用者共同維護的資訊平台，
                <br />
                能夠分享各地餐廳的菜單細節、食材，
                <br />
                讓不吃香菜、不愛美乃滋的人，都能提前掌握資訊、安心點餐。
              </p>
            </div>
          </div>
          {/* 圖片  */}
          <div className="col-md-8 mt-8 mb-8">
            <img
              className="img-fluid rounded-3"
              src={`/src/assets/images/yellow-brown-food.jpg`}
              alt="滿桌食物"
            />
          </div>
          {/* 聯絡我們  */}
          <div className="col-10 mb-120 mt-8">
            <div className="card border-0 rounded-3 bg-primary-700 py-4 px-6 py-md-6 px-md-9">
              <div className="card-body p-0">
                <div className="card-dashed">
                  <div className="my-6 text-white">
                    <h3 className="card-title fs-7 fw-bold mb-2">
                      我們的使命：讓每一口都是驚喜，而不是冒險
                    </h3>
                    <p className="card-text fs-4 fs-md-7 mb-2">
                      有什麼問題或建議，歡迎聯絡我們
                    </p>
                  </div>
                </div>

                <div className="text-light d-md-flex justify-content-between mt-md-6">
                  <div className="d-md-flex align-items-center gap-md-6">
                    <p className="my-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M24,6.24c0,7.64-10.13,17.76-17.76,17.76-1.67,0-3.23-.63-4.38-1.78l-1-1.15c-1.16-1.16-1.16-3.12,.05-4.33,.03-.03,2.44-1.88,2.44-1.88,1.2-1.14,3.09-1.14,4.28,0l1.46,1.17c3.2-1.36,5.47-3.64,6.93-6.95l-1.16-1.46c-1.15-1.19-1.15-3.09,0-4.28,0,0,1.85-2.41,1.88-2.44,1.21-1.21,3.17-1.21,4.38,0l1.05,.91c1.2,1.19,1.83,2.75,1.83,4.42Z"
                          fill="currentColor"
                        />
                      </svg>
                      　0800-777-999
                    </p>
                    <p className="mb-6 mb-lg-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Filled"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"
                          fill="currentColor"
                        />
                      </svg>
                      　spoonful@mail.com
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn white-btn rounded-5 py-3 ps-3 pe-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="spoonful@mail.com"
                    >
                      聯絡我們 ＞
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              New message
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="recipient-name"
                                  className="col-form-label"
                                >
                                  收件者:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="recipient-name"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="message-text"
                                  className="col-form-label"
                                >
                                  內容:
                                </label>
                                <textarea
                                  className="form-control"
                                  id="message-text"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              關閉
                            </button>
                            <button type="button" className="btn btn-secondary">
                              送出
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
