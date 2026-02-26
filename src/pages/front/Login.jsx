import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const baseURL = "https://datasofspoonful.zeabur.app";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [token, setToken] = useState("");

  const signIn = async (formData) => {
    try {
      const response = await axios.post(`${baseURL}/login`, formData);
      console.log(response.data);
      const { token, expired } = response.data;

      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;

      axios.defaults.headers.common.Authorization = token;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className=" bg-primary-50">
      <div className="container mx-auto py-5">
        <div className="row py-120">
          <form
            className="login-form mx-auto rounded-5 bg-white col-10 col-lg-4 p-6"
            onSubmit={handleSubmit(signIn)}
          >
            {/* login title  */}
            <div className="mb-5">
              <h1 className="text-center fs-3 text-primary-950">登入帳號</h1>
            </div>

            {/* 帳密表單  */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label text-center fs-4 text-primary-950"
              >
                帳號
              </label>
              <input
                type="email"
                className="form-control  fs-5 text-gray-700"
                id="email"
                placeholder="請輸入帳號"
                {...register("email", {
                  required: "請輸入 Email 帳號",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email 格式不正確",
                  },
                })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="userpassword"
                className="form-label text-center fs-4 text-primary-950"
              >
                密碼
              </label>
              <input
                type="password"
                className="form-control  fs-5 text-gray-700"
                id="userpassword"
                placeholder="請輸入密碼"
                {...register("password", {
                  required: "請輸入密碼",
                  minLength: {
                    value: 6,
                    message: "密碼長度至少6碼",
                  },
                })}
              />
            </div>

            {/* 記住我  */}
            <div className="form-check d-flex align-items-center gap-2 mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remember-checkbox"
              />
              <label
                className="form-check-label  fs-5 text-gray-700"
                htmlFor="remember-checkbox"
              >
                記住我的資料
              </label>
            </div>

            {/* login button  */}
            <div className="text-center">
              <button
                type="submit"
                className="btn rounded-pill px-5 px-9 fs-5 bg-secondary-700 text-white"
              >
                登入
              </button>
            </div>

            {/* forget password  */}
            <div className="text-center mt-3">
              <a href="#" className="fs-7 text-primary-900">
                忘記密碼
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
