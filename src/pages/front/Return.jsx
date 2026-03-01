import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Return() {
  const baseURL = "https://datasofspoonful.zeabur.app";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [local, setLocal] = useState();
  const navigate = useNavigate();

  const localData = [
    "基隆市",
    "台北市",
    "新北市",
    "桃園市",
    "新竹縣",
    "新竹市",
    "苗栗縣",
    "台中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "台南市",
    "高雄市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "台東縣",
    "澎湖縣",
    "金門縣",
    "馬祖縣",
  ];

  function toggleOtherInput() {
    const checkbox = document.getElementById("other-check");
    const input = document.getElementById("other-input");
    if (checkbox.checked) {
      input.classList.remove("d-none");
      input.focus();
    } else {
      input.classList.add("d-none");
    }
  }

  return (
    <div className="bg-primary-50">
      <div className="return-header">
        <div className="container text-white">
          <h2>發現隱藏地雷</h2>
          <p>請告訴我們您發現的錯誤</p>
        </div>
      </div>
      <div className="container py-120">
        <div className="d-flex justify-content-md-between ">
          <div
            type="button"
            className="btn btn-outline-primary-700 rounded-circle d-block d-sm-block d-md-none me-3"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M14.293 5.29302C14.6835 4.90249 15.3165 4.90249 15.707 5.29302C16.0975 5.68354 16.0975 6.31655 15.707 6.70708L10.414 12L15.707 17.293C16.0975 17.6835 16.0975 18.3166 15.707 18.7071C15.3165 19.0976 14.6835 19.0976 14.293 18.7071L8.29295 12.7071C7.90243 12.3166 7.90243 11.6835 8.29295 11.293L14.293 5.29302Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className="text-primary-950">回報餐點</h3>
          <button
            type="button"
            className="btn btn-outline-primary-700 rounded-pill d-none d-sm-none d-md-block"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path
                d="M14.293 5.29302C14.6835 4.90249 15.3165 4.90249 15.707 5.29302C16.0975 5.68354 16.0975 6.31655 15.707 6.70708L10.414 12L15.707 17.293C16.0975 17.6835 16.0975 18.3166 15.707 18.7071C15.3165 19.0976 14.6835 19.0976 14.293 18.7071L8.29295 12.7071C7.90243 12.3166 7.90243 11.6835 8.29295 11.293L14.293 5.29302Z"
                fill="currentColor"
              />
            </svg>
            重新選擇狀況
          </button>
        </div>
        <form action="" className="bg-white rounded-5 mt-6 p-10">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4 d-flex flex-column">
                <label htmlFor="restaurant" className="fs-5 mb-2">
                  店名<span className="text-alert">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="restaurant"
                    placeholder="請輸入店名"
                    {...register("restaurant", { required: "請輸入店名" })}
                  />
                </div>
              </div>
              <div className="mb-4 d-flex flex-column">
                <label htmlFor="address" className="fs-5 mb-2">
                  地點<span className="text-alert">*</span>
                </label>
                <div>
                  <select
                    className="form-select "
                    aria-label="Large select example"
                    id="address"
                    defaultValue=""
                    {...register("address", { required: "請選擇地點" })}
                  >
                    <option disabled hidden value="">
                      請選擇地點
                    </option>
                    {localData.map((local) => {
                      return (
                        <option value={local} key={local}>
                          {local}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="mb-4 d-flex flex-column">
                <label className="fs-5 mb-2" htmlFor="title">
                  餐點<span className="text-alert">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="title"
                    placeholder="請輸入餐點"
                  />
                </div>
              </div>
              <div className="mb-4 d-flex flex-column">
                <label htmlFor="" className="fs-5 mb-2">
                  地雷標籤
                </label>
                <div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <div className="me-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="spring-onion"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary-200 rounded-pill text-primary-900"
                        htmlFor="spring-onion"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M21.2993 8.19356C21.2386 8.20844 19.7849 8.5622 17.9062 9.17948C16.6663 9.587 15.5579 10.0036 14.5807 10.4294C17.1331 8.3894 20.2006 6.69044 20.2404 6.66836L19.6241 5.54972C19.5691 5.57996 18.2597 6.30356 16.6095 7.39292C15.4661 8.14796 14.4656 8.87428 13.608 9.57188C14.176 8.62612 14.7535 7.53276 15.3403 6.2918C16.1856 4.50404 16.7165 3.10532 16.7388 3.04676L15.5441 2.5946C15.5232 2.65028 13.4163 8.17916 11.0367 11.044L10.3241 11.7566L12.048 13.4817L12.6106 12.9194L12.6867 12.8431C15.8307 10.8465 21.5427 9.44876 21.5995 9.43508L21.2993 8.19356Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.16082 16.3694L11.7091 13.8211L9.98402 12.0959L7.4357 14.644C6.48818 14.428 5.36738 14.7559 4.53338 15.5896C3.4025 16.7207 3.20234 18.3791 4.02794 19.4183C4.08038 19.4846 4.13647 19.5479 4.19594 19.6079C4.25595 19.6675 4.31934 19.7236 4.38578 19.7759C5.42498 20.602 7.08338 20.4014 8.21426 19.2705C9.04802 18.4367 9.3761 17.3159 9.15962 16.3682L9.16082 16.3694Z"
                            fill="currentColor"
                          />
                          <path
                            d="M4.08841 20.153C3.92697 20.0248 3.78067 19.8786 3.65233 19.7172C3.64153 19.7035 3.63097 19.6896 3.62041 19.6757L2.85409 20.4422C2.82062 20.4756 2.79406 20.5153 2.77593 20.559C2.7578 20.6027 2.74845 20.6495 2.74841 20.6968C2.74835 20.7924 2.78623 20.884 2.85373 20.9516C2.92124 21.0192 3.01283 21.0572 3.10836 21.0573C3.15566 21.0573 3.20251 21.048 3.24622 21.03C3.28994 21.0119 3.32966 20.9854 3.36313 20.952L4.12969 20.184C4.11601 20.1739 4.10185 20.1638 4.08841 20.153Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3.65236 19.7171C3.49337 19.5167 3.36322 19.2949 3.26572 19.0583H2.40004C2.30456 19.0583 2.21299 19.0963 2.14548 19.1638C2.07797 19.2313 2.04004 19.3229 2.04004 19.4183C2.04004 19.5138 2.07797 19.6054 2.14548 19.6729C2.21299 19.7404 2.30456 19.7783 2.40004 19.7783H3.70252C3.68548 19.7582 3.66892 19.7378 3.65236 19.7171Z"
                            fill="currentColor"
                          />
                          <path
                            d="M4.08842 20.1531C4.06754 20.1365 4.04714 20.1197 4.02698 20.1027V21.4054C4.02698 21.5009 4.06491 21.5924 4.13242 21.6599C4.19993 21.7275 4.2915 21.7654 4.38698 21.7654C4.48246 21.7654 4.57402 21.7275 4.64154 21.6599C4.70905 21.5924 4.74698 21.5009 4.74698 21.4054V20.5395C4.51047 20.4421 4.28879 20.312 4.08842 20.1531Z"
                            fill="currentColor"
                          />
                        </svg>
                        蔥
                      </label>
                    </div>
                    <div className="me-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="garlic"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary-200 rounded-pill text-primary-900"
                        htmlFor="garlic"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M22.5466 13.4059C22.5466 10.1266 20.5046 7.08137 17.2177 5.45954C15.8334 4.77563 14.8385 3.53476 14.4897 2.13671L14.4293 1.89709C14.367 1.64748 14.2575 1.42192 14.1296 1.21088L14.1306 1.40204C14.2706 3.70979 15.1413 5.95182 16.6471 7.75974L17.8 9.1426C19.9086 11.6735 20.3199 15.2131 18.8464 18.1601C17.8164 20.2214 16.0573 21.721 14.0214 22.2744C13.3582 22.455 12.6784 22.5463 12 22.5463C11.3216 22.5463 10.6419 22.455 9.97857 22.2744C7.94274 21.7209 6.18362 20.2214 5.15363 18.1601C3.68012 15.2131 4.0914 11.6735 6.20007 9.1426L7.35296 7.75904C8.85873 5.95182 9.72938 3.70979 9.87085 1.3629L9.87198 1.20667C9.74288 1.41868 9.63296 1.64593 9.5701 1.89709L9.51104 2.13671C9.16154 3.53467 8.16662 4.77563 6.78306 5.45954C3.49538 7.08132 1.45337 10.1266 1.45337 13.4059C1.45337 17.5189 4.6052 21.0041 8.92515 22.1477C8.66893 22.3326 8.4226 22.5798 8.20229 22.8102C7.93379 23.0911 7.9441 23.5367 8.22428 23.8045C8.50717 24.0744 8.95074 24.0627 9.21854 23.7825C9.42118 23.5704 9.65199 23.3956 9.89617 23.2432C9.89574 23.2613 9.89078 23.2782 9.89078 23.2964C9.89078 23.685 10.2053 23.9995 10.5939 23.9995C10.9825 23.9995 11.297 23.685 11.297 23.2964C11.297 23.0242 11.4567 22.7478 11.6832 22.6309C11.8952 22.6148 12.1051 22.6148 12.3171 22.6309C12.5436 22.7478 12.7033 23.0242 12.7033 23.2964C12.7033 23.685 13.0178 23.9995 13.4064 23.9995C13.795 23.9995 14.1095 23.685 14.1095 23.2964C14.1095 23.2782 14.1046 23.2613 14.1041 23.2432C14.3483 23.3957 14.5791 23.5704 14.7818 23.7825C14.9198 23.9267 15.1045 23.9995 15.2899 23.9995C15.4643 23.9995 15.6394 23.9349 15.776 23.8045C16.0562 23.5367 16.0665 23.0911 15.798 22.8102C15.5777 22.5798 15.3314 22.3326 15.0751 22.1477C19.3948 21.0041 22.5466 17.519 22.5466 13.4059Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.4872 9.20995C12.9667 7.39383 12.703 5.51588 12.703 3.62695V0.708047C12.703 0.353484 12.4391 0.0538594 12.0872 0.0102656C12.0336 0.00365625 12 0 12 0C11.9998 0 11.9659 0.00370313 11.9119 0.0104063C11.5598 0.0540469 11.2969 0.352453 11.2969 0.707297V3.627C11.2969 5.51592 11.0332 7.39383 10.5127 9.21C9.46625 12.8629 9.56647 16.6929 10.8011 20.2847C10.9776 20.7962 11.4589 21.1403 12 21.1403C12.5411 21.1403 13.0224 20.7962 13.1989 20.2847C14.4334 16.6929 14.5337 12.8629 13.4872 9.20995Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.7192 10.0436L15.5663 8.66007C15.1385 8.14575 14.7554 7.60402 14.4203 7.03894C14.5308 7.63908 14.6702 8.23439 14.8385 8.82282C15.9481 12.6961 15.8609 16.7534 14.5865 20.5697C15.8376 19.9716 16.9025 18.9039 17.5884 17.5313C18.8121 15.0842 18.4708 12.1447 16.7192 10.0436Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.16145 8.82262C9.32969 8.23419 9.46909 7.63823 9.57963 7.03809C9.24456 7.60387 8.86141 8.14565 8.43363 8.65921L7.28074 10.0434C5.5292 12.1446 5.18795 15.084 6.41149 17.5312C7.09745 18.9037 8.16241 19.9715 9.41345 20.5695C8.13977 16.7532 8.05188 12.6959 9.16145 8.82262Z"
                            fill="currentColor"
                          />
                        </svg>
                        蒜
                      </label>
                    </div>
                    <div className="me-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="cilantro"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary-200 rounded-pill text-primary-900"
                        htmlFor="cilantro"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="me-2"
                        >
                          <path
                            d="M22.9885 9.03461C23.0532 8.64597 22.87 8.3113 21.7838 7.67867C22.814 6.19317 23.3549 3.42946 22.523 1.76691C22.4605 1.64168 22.3592 1.5402 22.2342 1.47759C20.5705 0.635518 17.8163 1.1861 16.3314 2.21818C15.7 1.1386 15.3659 0.946436 14.978 1.01121C14.7862 1.03928 13.0233 1.35236 12.2302 2.84865C11.9156 2.55284 11.5492 2.31318 11.1527 2.14261C10.7928 1.99146 10.4458 2.14261 9.8467 2.75149C8.82734 1.6935 6.85973 0.838478 5.41365 1.18394C5.27788 1.21633 5.15504 1.2919 5.06668 1.39986C4.11412 2.54421 4.00206 4.6904 4.49342 6.07442C3.67879 6.33999 3.39432 6.58614 3.36846 6.97478C3.35337 7.16479 3.25855 8.93313 4.68523 9.79895C5.20676 10.1163 6.07958 10.5698 7.00196 11.0513C7.83168 11.4831 8.74113 11.9581 9.41783 12.3468L1.18749 20.7674C0.937502 21.0201 0.937502 21.426 1.18749 21.6786L2.31892 22.8122C2.57107 23.0626 2.97623 23.0626 3.22838 22.8122L11.6333 14.5664C12.0212 15.2465 12.4953 16.1555 12.9263 16.9889C13.4069 17.913 13.8617 18.7853 14.1763 19.31C14.9047 20.5127 16.2689 20.6357 16.7969 20.6357H16.9952C17.3831 20.6098 17.6309 20.3248 17.8939 19.5087C19.2753 20.0009 21.4175 19.8887 22.5597 18.9343C22.6674 18.8458 22.7428 18.7227 22.7752 18.5867C23.12 17.1379 22.2666 15.1644 21.2106 14.1453C21.8226 13.5451 21.967 13.1975 21.8161 12.8369C21.6502 12.4504 21.4196 12.0963 21.1351 11.7875C22.6437 10.9994 22.9562 9.22678 22.9885 9.03461Z"
                            fill="currentColor"
                          />
                        </svg>
                        香菜
                      </label>
                    </div>
                    <div className="me-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="tomato"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary-200 rounded-pill text-primary-900"
                        htmlFor="tomato"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="me-2"
                        >
                          <g clipPath="url(#clip0_671_4307)">
                            <path
                              d="M4.91157 1.0005C5.05993 0.686016 5.47585 0.409594 5.80173 0.409594C5.95262 0.409594 6.02743 0.470484 6.07562 0.523734C6.58665 1.07916 8.30354 5.11781 8.45063 5.56795C8.41257 5.76323 7.99543 6.14742 7.77479 6.14742L7.54656 5.70234C6.88463 4.46222 5.77768 2.38772 4.9382 1.3657C4.87351 1.28578 4.82406 1.18561 4.91157 1.0005ZM3.48376 6.87525C3.44317 5.97877 2.56192 4.63083 1.85181 3.68362C2.41862 3.74705 4.77587 4.10081 5.21715 4.15786C5.65717 4.92122 6.08195 5.71753 6.40023 6.3135L6.6234 6.73064C6.86813 7.18589 7.28785 7.44586 7.77479 7.44586C8.45448 7.44586 9.06821 6.95259 9.38645 6.53034C9.70093 6.11189 9.81507 5.67441 9.70726 5.29781C9.65401 5.11139 9.26598 4.12739 8.78664 3.02297C9.99634 2.13661 11.6727 0.906656 12.8951 0C12.9407 1.29844 12.2903 3.13331 11.977 4.01709C11.8464 4.38736 11.7564 4.65872 11.7361 4.77666C11.6854 5.07464 11.8464 5.36752 12.1241 5.4855C12.5477 5.66423 13.1056 5.9978 13.7523 6.38578C14.5448 6.86002 15.478 7.41797 16.4608 7.85794C15.8001 8.20664 14.9949 8.3715 13.997 8.3715C13.4809 8.3715 11.8883 8.23711 11.6296 8.23711C11.2884 8.23711 10.8599 8.27517 10.5657 8.56809C10.2778 8.85595 10.2069 9.32887 10.0902 10.1125C9.92406 11.2233 9.68439 12.8236 8.7917 13.6795C8.50384 13.1913 8.22235 12.6651 7.94593 12.1515C7.08114 10.5373 6.63859 9.75492 6.04515 9.5888C5.94371 9.55964 5.83721 9.54572 5.72054 9.54572C5.35154 9.54572 4.9217 9.69028 4.37893 9.87412C3.62317 10.1303 2.6836 10.4473 1.68057 10.4473C1.26212 10.4473 0.86776 10.3928 0.492432 10.2812C1.80742 9.34791 3.52435 7.73752 3.48376 6.87525ZM21.4111 18.9951C19.8249 21.4868 16.1146 24 11.4026 24C10.0534 24 8.67887 23.7959 7.31954 23.3914C4.17231 22.4581 1.70092 18.7365 1.38517 17.4202C0.7854 14.9273 0.889369 13.0963 1.28246 11.7191C1.41432 11.728 1.5437 11.7458 1.67935 11.7458C2.89665 11.7458 3.99348 11.3755 4.7949 11.1041C5.15626 10.9823 5.56459 10.8442 5.60771 10.801C5.84106 10.9735 6.39643 12.0082 6.80218 12.7652C7.1851 13.4779 7.61753 14.2868 8.05754 14.9615C8.18054 15.1517 8.38853 15.2569 8.60153 15.2569C8.70296 15.2569 8.80567 15.2328 8.90078 15.1834C10.7914 14.2019 11.1566 11.7622 11.3747 10.3053C11.414 10.0403 11.4609 9.72581 11.5053 9.53939C11.6853 9.5242 13.4403 9.66998 13.997 9.66998C15.8217 9.66998 17.2127 9.16912 18.2461 8.13572C18.4059 7.97592 18.4718 7.74389 18.4186 7.52452C18.3653 7.30387 18.2005 7.12762 17.9849 7.05787C16.7397 6.65972 15.5072 5.92177 14.4192 5.27123C13.9614 4.99608 13.5443 4.74755 13.1664 4.5472C13.1778 4.51678 13.1892 4.48378 13.2006 4.45083C13.3186 4.11736 13.4605 3.71409 13.5975 3.27792C13.7269 3.27286 13.8524 3.26142 13.9842 3.26142C16.8449 3.26142 19.1705 4.16048 20.895 5.93316C24.8298 9.97688 23.7418 15.3318 21.4111 18.9951Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_671_4307">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        番茄
                      </label>
                    </div>
                    <div className="me-4 d-flex">
                      <label className="cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          id="other-check"
                          className="d-none"
                          onChange={toggleOtherInput}
                        />
                        <div className="btn btn-outline-primary-200 rounded-pill">
                          <span className="text-xs font-medium text-primary-900">
                            其他
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <label className="d-flex cursor-pointer me-4 mb-3">
                  <input
                    type="text"
                    id="other-input"
                    className="d-none form-control rounded-pill"
                    placeholder="請輸入其他地雷標籤"
                  />
                </label>
              </div>

              <div className="">
                <div className="fs-5">可客製化程度</div>
                <div className="d-flex flex-column flex-lg-row cursor-pointer">
                  <div className="form-check form-check-inline px-4 pt-4 mt-4 rounded ">
                    <input
                      className="form-check-input ms-0"
                      type="radio"
                      name="isCustomizable"
                      id="customized"
                      value="customized"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="customized"
                    >
                      <h5 className="mb-1 text-primary-950">可客製</h5>
                      <p className="fs-5 text-gray-600">或是可以自己挑掉</p>
                    </label>
                  </div>
                  <div className="form-check form-check-inline px-4 pt-4 mt-4 rounded ">
                    <input
                      className="form-check-input ms-0"
                      type="radio"
                      name="isCustomizable"
                      id="no-customized"
                      value="no-customized"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="no-customized"
                    >
                      <h5 className="mb-1 text-primary-950">地獄混入</h5>
                      <p className="fs-5 text-gray-600">無法挑掉最沒用的那種</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                <div className="mb-3">
                  <label className="form-label fs-5">上傳圖片</label>
                  <div className="d-flex flex-wrap gap-3">
                    {/* 圖片預覽區塊 (假設已有預覽功能) */}
                    {/* 這裡可以根據你的 state 渲染出已選擇的圖片 */}
                    <div className="upload-preview-item rounded-4 overflow-hidden ">
                      <img
                        src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=300"
                        alt="preview"
                        className="img-fluid object-fit-cover w-100 h-100"
                      />
                    </div>

                    {/* 自定義上傳按鈕 */}
                    <label
                      htmlFor="fileUpload"
                      className="upload-btn d-flex align-items-center justify-content-center rounded-4 cursor-pointer"
                    >
                      <div className="upload-icon-wrapper d-flex align-items-center justify-content-center rounded-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M18.5348 1.46447C17.0704 -1.19209e-07 14.7133 0 9.9993 0C5.28525 0 2.92823 -1.19209e-07 1.46377 1.46447C0.706282 2.22195 0.340603 3.21824 0.164062 4.65598C0.694733 4.06532 1.33236 3.57328 2.04836 3.20846C2.82984 2.81027 3.66664 2.6488 4.59316 2.5731C5.48829 2.49997 6.58971 2.49998 7.93646 2.5H12.0621C13.4089 2.49998 14.5103 2.49997 15.4054 2.5731C16.332 2.6488 17.1688 2.81027 17.9502 3.20846C18.6662 3.57328 19.3039 4.06532 19.8345 4.65598C19.658 3.21824 19.2923 2.22195 18.5348 1.46447Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 12C0 9.1997 5.96046e-08 7.79961 0.54497 6.73005C1.02433 5.78924 1.78924 5.02433 2.73005 4.54497C3.79961 4 5.19974 4 8 4H12C14.8003 4 16.2004 4 17.27 4.54497C18.2108 5.02433 18.9757 5.78924 19.455 6.73005C20 7.79961 20 9.1997 20 12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20H8C5.19974 20 3.79961 20 2.73005 19.455C1.78924 18.9757 1.02433 18.2108 0.54497 17.27C5.96046e-08 16.2004 0 14.8003 0 12ZM10.5303 8.4697C10.3897 8.329 10.1989 8.25 10 8.25C9.8011 8.25 9.6103 8.329 9.4697 8.4697L6.96967 10.9697C6.67678 11.2626 6.67678 11.7374 6.96967 12.0303C7.26256 12.3232 7.73744 12.3232 8.0303 12.0303L9.25 10.8107V15C9.25 15.4142 9.5858 15.75 10 15.75C10.4142 15.75 10.75 15.4142 10.75 15V10.8107L11.9697 12.0303C12.2626 12.3232 12.7374 12.3232 13.0303 12.0303C13.3232 11.7374 13.3232 11.2626 13.0303 10.9697L10.5303 8.4697Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <input
                        className="d-none"
                        type="file"
                        id="fileUpload"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => uploadImage(e)}
                      />
                    </label>
                  </div>
                </div>

                <div className="d-flex mt-auto justify-content-lg-end justify-content-center ">
                  <button
                    type="submit"
                    className="btn btn-secondary-700 rounded-pill px-5 py-2 d-flex align-items-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="me-2"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    送出
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Return;
