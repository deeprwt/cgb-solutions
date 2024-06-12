import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import google from '@/assets/images/icon/google.png';
import facebook from '@/assets/images/icon/facebook.png';
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";
import { Auth } from "firebase/auth";
import AuthLogin from "../forms/auth-login";
import AuthSignup from "../forms/auth-signup";
import CareerVendorForm from "./career-vendor-form";
import CareerJobForm from "./career-job-form";


const CareerMainForm = () => {
  return (
    <div
    className="modal fade"
    id="CareerModal"
    tabIndex={-1}
    aria-hidden="true"
  >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered mb-10 mt-10">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="user-data-form modal-content p-5" style={{boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)"}} >
          <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="form-wrapper m-auto" style={{maxWidth: "100%"}}>
              <ul className="nav nav-tabs border-0 w-100" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#new1"
                    role="tab"
                    aria-selected="true"
                    tabIndex={-1}
                  >
                    Candidate
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#new2"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Vendor
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-30">
                <div className="tab-pane show active" role="tabpanel" id="new1">
                  <div className="text-center mb-20">
                    {/* <h2>As a Person</h2> */}
                    <p className="font-weight-bold">
                      Aplly as Candidate
                    </p>
                  </div>
                  {/* login form start */}
                  <CareerJobForm />
                  {/* login form end */}
                </div>
                <div className="tab-pane" role="tabpanel" id="new2">
                  <div className="text-center mb-20">
                    {/* <h2>As a Venoder</h2> */}
                    <p className="font-weight-bold">
                     Apply as Vendor
                    </p>
                  </div>
                  {/* register form start */}
                  <CareerVendorForm />
                  {/* register form end */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
</div>
  );
};

export default CareerMainForm;
