import React from 'react';
import Link from "next/link"; // Assuming you are using React Router

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start relative">
      <div className="relative w-1/2 h-full flex flex-col">
        <img src="Bimage.png" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 ">
        <div className="flex flex-center flex-column flex-lg-row-fluid pb-11">
          <div className="w-lg-500px p-10 pb-10">
            <form
              className="w-100"
              id="kt_sign_in_form"
              data-kt-redirect-url="index.html"
              action="#"
            >
              <div className="mb-10">
                <h1 className="text-[#007C85] font-normal">WELCOME TO</h1>
                <div className="text-[#007C85] fw-semibold text-[40px]">
                  COLINAHEALTH
                </div>
              </div>

              <div className="fv-row mb-8">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control bg-transparent"
                />
              </div>

              <div className="fv-row mb-3 rounded-0">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control bg-transparent"
                />
              </div>

              <div className="flex justify-between mb-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-md">Remember me</span>
                </div>
                <Link href="/forgot-password" className="text-[#071437] text-md no-underline hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Link href="/patient-list">
                <button
                  type="submit"
                  id="kt_sign_in_submit"
                  className="p-5 rounded-0 text-teal-50 hover:bg-[#78e0e7] w-full h-full flex flex-col justify-center items-center bg-[#007C85]">
                  <span className="flex-col indicator-label ho">Sign In</span>
                  <span className="indicator-progress">
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login