import React from "react";
import { IoNotifications } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <div className="app-page flex-column flex-column-fluid bg-[#007C85]">
    <div id="kt_app_header" className="app-header">
      <div className="bg-[#007C85] flex ml-5">
        <div
          className=" flex align-items-stretch justify-content-between"
          id="kt_app_header_primary_container"
        >
          <div className="flex flex-stack align-items-stretch flex-grow-1 flex-lg-grow-0">
            <div className="flex align-items-center me-7">
              <a href="patient-list" className="d-flex align-items-center">
                <img alt="Logo" src="/img/chs.png" className="h-25px h-25" />
              </a>

              <div className="form-group w-[1000px] flex justify-end ml-3 mt-[9px]">
				<div className="input-icon w-[500px]">
					<input type="text" className="form-control" placeholder="Search..."/>
					<span><i className="flaticon2-search-1 icon-md"></i></span>
				</div>
       
        </div>
            </div>
          </div>
          </div>
          <div className="flex items-center mt-3 ">
          <IoNotifications className="text-white text-2xl cursor-pointer mr-5" />
        </div>
      </div>
      <div className="app-navbar-item" >
									<div className=" mr-11 mt-4 btn btn-flex flex-auto align-items-center bg-hover-white bg-hover-opacity-10 py-2 ps-3 pe-1" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										
										<div className="symbol symbol-30px symbol-md-40px">
											<img src="/img/prof.png" alt="image" />
										</div>
                    <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-7">
											<div className=" text-white fs-8 fw-bold lh-1 mb-1 flex ml-4">Drake Ramos</div>
											<div className="text-white fs-8 opacity-75 fw-semibold lh-1"></div>
										</div>      
                  </div>
									</div>
                </div>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
										<div className="menu-item px-3">
											<div className="menu-content d-flex align-items-center px-3">
												
												<div className="symbol symbol-50px me-5">
													<img alt="Logo" src="assets/media/avatars/300-1.jpg" />
												</div>
												
												<div className="d-flex flex-column">
													<div className="fw-bold d-flex align-items-center fs-5">Max Smith 
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
													<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
												</div>
											</div>
										</div>
    </div>   	
			</div>
                          
  );
};

export default Header;
