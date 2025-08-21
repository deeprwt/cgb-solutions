import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import google from "@/assets/images/icon/google.png";
import facebook from "@/assets/images/icon/facebook.png";
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";
import AuthLogin from "../forms/auth-login";
import AuthSignup from "../forms/auth-signup";
import ContactForm from "../forms/contact-form";

const PopFormModal = () => {
  return (
    <div className="modal fade" id="PopModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="form-wrapper m-auto">
              <div className="text-center mb-20">
                <h3>Get Expert Guidance for Your Digital Transformation</h3>
                <p>
                  From Managed IT to Digital Process Automation, ServiceNow,
                  Oracle, and Dynamics 365 — CGB Solutions delivers strategic
                  transformation for startups and enterprises worldwide
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopFormModal;
