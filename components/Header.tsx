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
					<input type="text" className="form-control" placeholder="Search... Bar"/>
					<span><i className="flaticon2-search-1 icon-md"></i></span>
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
