"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "@/database/firebase"; // Adjust the path as necessary
import withAuth from "@/components/hoc/withAuth";
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";
import { useRouter } from "next/navigation"; // Import useRouter
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import { signOut } from "firebase/auth"; // Import signOut function

// Define the UserData type
type UserData = {
  email: string;
  name?: string;
  profileImage?: string;
  phoneNumber?: string;
};

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as UserData;
            setUserData(data);
            setName(data.name || "");
            setProfileImage(data.profileImage || "");
            setPhoneNumber(data.phoneNumber || "");
          }
          setLoading(false);
        } else {
          console.log("No authenticated user found");
          router.push("/login"); // Redirect to login if user is not authenticated
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();

    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login"); // Redirect to login if session expires
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, {
          email: user.email,
          name,
          profileImage,
          phoneNumber,
        });
        notifySuccess("User data updated successfully!");
        // router.reload();
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      notifyError("Failed to update user data");
    }
  };

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

  if (loading) {
    return <p>Loading...</p>;
  }

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
                      <h2 className="name fw-bold m-0">User Email: {userData?.email}</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="profileImage" className="form-label">Profile Image URL</label>
                          <input
                            type="text"
                            className="form-control"
                            id="profileImage"
                            value={profileImage}
                            onChange={(e) => setProfileImage(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                      </form>
                      <button onClick={handleLogout} className="btn btn-secondary mt-3">Logout</button>
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

export default withAuth(Dashboard);
