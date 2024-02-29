import Image from "next/image";
import React from "react";
import Link from "next/link";
const Login = () =>  {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen w- relative">
      <div className="bg-[#007C85] w-[827px] h-full relative">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <div className="w-full pl-[160px]">
            <img src="/img/chs.png" alt="ColinaHealthLogo" width="400" />
            <p className="text-teal-50 text-[20px] break-words max-w-[500px] font-light">
              The art of medicine lies in listening to what the patient's body
              and spirit are trying to say.
            </p>
          </div>

          <img src="/img/icon1.png" alt="ColinaHealthLogo" width="600" />
        </div>
      </div>

      <div className="flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div className="flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-lg-500px p-10">
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

              <div className="fv-row mb-3">
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
                <a href="" className="text-[#57beee] text-md no-underline hover:underline ... ">
                  Forgot Password?
                </a>
              </div>

        <Link href="/patient-list">

        <button 
          type="submit"
          id="kt_sign_in_submit"
          className=" p-5 rounded-xl text-teal-50 hover:bg-[#78e0e7] w-full h-full flex flex-col justify-center items-center bg-[#007C85]" >
          <span className=" flex-col indicator-label ho">Sign In</span>

          <span className="indicator-progress">
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      
        </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Login;