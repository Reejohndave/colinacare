
import React from "react";

const PatientList = () =>  {
    return (
    
        <div className="flex flex-col h-screen w-full relative items-center mt-20">
        <div className="card">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="flex align-items-center position-relative px-2 py-2 mb-3">
                <i className="ki-duotone ki-magnifier search-icon fs-2 text-gray-500 top-50 translate-middle-y ms-5">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
                <input
                  type="text"
                  className="form-control form-control-solid w-250px ps-12"
                  placeholder="Search Patient..."
                />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <button
                type="button"
                className="bg-[#1B84FF] rounded-xl p-2 text-teal-50 w-full h-[50px] hover:bg-blue-300"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_customer"
              >
                Add Patient
              </button>
  
              <button
                type="button"
                className="bg-[#DB3956] rounded-xl p-2 text-teal-50 w-full h-[50px] ml-5 hover:bg-red-500"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_customer"
              >
                Export to PDF
              </button>
            </div>
          </div>
  
          <table className="table align-middle text-xl ml-5 table-row-dashed">
            <thead className="font-bold opacity-60">
              <tr className="text-start text-[30px]">
                <th className="w-[30px] p-5"></th>
                <th className="min-w-125px">PATIENT ID</th>
                <th className="min-w-125px">NAME</th>
                <th className="min-w-125px">AGE</th>
                <th className="min-w-125px">GENDER</th>
                <th className="">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="fw-semibold text-gray-600">
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-600 text-hover-primary mb-1 opacity-60"
                  >
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a href="#" className="text-gray-600 text-hover-primary mb-1">
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a href="#" className="text-gray-600 text-hover-primary mb-1">
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a href="#" className="text-gray-600 text-hover-primary mb-1">
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a href="#" className="text-gray-600 text-hover-primary mb-1">
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a
                    href="apps/customers/view.html"
                    className="text-gray-800 text-hover-primary mb-1"
                  >
                    8127423928
                  </a>
                </td>
                <td>
                  <a href="#" className="text-gray-600 text-hover-primary mb-1">
                    Drake Ramos
                  </a>
                </td>
                <td>20 years old</td>
                <td data-filter="mastercard">
                  <img
                    src="assets/media/svg/card-logos/mastercard.svg"
                    className="w-35px me-3"
                    alt=""
                  />
                  Male
                </td>
                <td className="">
                  <a
                    href="#"
                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                    data-kt-menu-trigger="click"
                  >
                    Actions
                    <i className="ki-duotone ki-down fs-5 ms-1"></i>
                  </a>
  
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="apps/customers/view.html"
                        className="menu-link px-3"
                      >
                        View
                      </a>
                    </div>
  
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-kt-customer-table-filter="delete_row"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    );
  };
  
  export default PatientList;