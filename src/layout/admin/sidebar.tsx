"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// internal
import Navbar from "../header/navbar";
import NavbarAdmin from "../header/navbar-admin";
import logo from "@/assets/images/logo/logome.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/components/common/login-modal";
import { signOut } from "firebase/auth"; // Import signOut function
import { useRouter } from "next/navigation"; // Import useRouter
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import { db, auth } from "@/database/firebase"; // Adjust the path as necessary

const Sidebar = () => {
  const { sticky } = useSticky();
     // Access the current page URL
  const pathrouter = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // Redirect to login after successful logout
      notifySuccess("Successfully logged out");
    } catch (error) {
      console.error("Error logging out:", error);
      notifyError("Failed to log out");
    }
  };
  return (
    <>
      <header
        className={`${pathrouter === "/dashboard" ? "header-change " : "" } theme-main-menu menu-style-one white-vr sticky-menu header-change ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link
                  href="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <Image width={110} src={logo} alt="logo" />
                </Link>
              </div>

              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  {/* logout button  */}
                  <li>
                  <button onClick={handleLogout} className="btn-fourteen tran3s">  <i className="bi bi-box-arrow-right"></i></button>
                    {/* <Link href="/contact" className="btn-fourteen tran3s">
                    <i className="bi bi-box-arrow-right"></i>
                    </Link> */}
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  {/* <Navbar logo_white={true} /> */}
                  <NavbarAdmin logo_white={true} />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default Sidebar;
