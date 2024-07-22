"use client";
import React, { useEffect, useState } from "react";
import { db, auth } from "@/database/firebase";; // Adjust the path as necessary
import withAuth from "@/components/hoc/withAuth";
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";

const Profile = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = () => {
      const user = auth.currentUser;
      if (user) {
        console.log("User is authenticated", user);
        setUserEmail(user.email);
      } else {
        console.log("No authenticated user found");
      }
    };

    fetchUserEmail();
  }, []);

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Sidebar />
        <main>
          <div className="team-details light-bg border-top pt-120 lg-pt-80 pb-120 lg-pb-80 ">
            <div className="container">
              <div className="bg-wrapper">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                      {userEmail ? (
                        <>
                          <h2 className="name fw-bold m-0">
                            User Email: {userEmail}
                          </h2>
                        </>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default withAuth(Profile);
