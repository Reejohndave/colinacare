import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className="app-page flex-column flex-column-fluid bg-[#007C85]">
    <div id="kt_app_header" className="app-header">
      <div className="bg-[#007C85] flex ml-5">
        <div
          className="app-container container-xxl flex align-items-stretch justify-content-between"
          id="kt_app_header_primary_container"
        >
          <div className="flex flex-stack align-items-stretch flex-grow-1 flex-lg-grow-0">
            <div className="flex align-items-center me-7">
              <a href="patient-list" className="d-flex align-items-center">
                <img alt="Logo" src="/img/chs.png" className="h-25px h-25" />
              </a>

              <div className="form-group w-[1000px] flex justify-end ">
				<div className="input-icon w-[500px]">
					<input type="text" className="form-control" placeholder="Search..."/>
					<span><i className="flaticon2-search-1 icon-md"></i></span>
				</div>

        <div className="app-navbar-item" id="kt_header_user_menu_toggle">
									
									<div className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 ps-3 pe-1" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										
										<div className="symbol symbol-30px symbol-md-40px">
											<img src="/img/prof.png" alt="image" />
										</div>
                    <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-7">
											<span className="text-white fs-8 fw-bold lh-1 mb-1 flex">DRAKE RAMOS</span>
											<span className="text-white fs-8 opacity-75 fw-semibold lh-1"></span>
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
  );
};

export default Header;
