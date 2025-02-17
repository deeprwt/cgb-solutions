"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "@/database/firebase";
import withAuth from "@/components/hoc/withAuth";
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";
import { useRouter } from "next/navigation";
import { notifySuccess, notifyError } from "@/utils/toast";
import { signOut } from "firebase/auth";

// Define User Data Type
type UserData = {
  email: string;
  name?: string;
  profileImage?: string;
  phoneNumber?: string;
  devices?: DeviceInfo[];
};

// Define Device Info Type
type DeviceInfo = {
  device: string;
  ip: string;
  loginTime: string;
};

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [currentDevice, setCurrentDevice] = useState<DeviceInfo | null>(null);
  const [deviceHistory, setDeviceHistory] = useState<DeviceInfo[]>([]);
  const router = useRouter();

  // Get Current Device Info
  const getDeviceInfo = async (): Promise<DeviceInfo> => {
    const userAgent = navigator.userAgent;
    let ip = "Unknown"; // Default IP

    // Fetch IP Address
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      ip = data.ip;
    } catch (error) {
      console.error("Error fetching IP:", error);
    }

    return {
      device: userAgent,
      ip,
      loginTime: new Date().toLocaleString(),
    };
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          router.push("/login");
          return;
        }

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let existingDevices: DeviceInfo[] = [];

        if (docSnap.exists()) {
          const data = docSnap.data() as UserData;
          setUserData(data);
          setName(data.name || "");
          setProfileImage(data.profileImage || "");
          setPhoneNumber(data.phoneNumber || "");
          existingDevices = data.devices || [];
        }

        // Get new device info
        const newDevice = await getDeviceInfo();
        setCurrentDevice(newDevice);

        // Prevent duplicate entries (Check if device+IP exists already)
        const isDuplicate = existingDevices.some(
          (device) => device.device === newDevice.device && device.ip === newDevice.ip
        );

        if (!isDuplicate) {
          // Append new device to Firestore without removing older data
          await updateDoc(docRef, {
            devices: arrayUnion(newDevice),
          });

          // Update local state with full history
          setDeviceHistory([...existingDevices, newDevice]);
        } else {
          // Just update UI if already exists
          setDeviceHistory(existingDevices);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          email: user.email,
          name,
          profileImage,
          phoneNumber,
        });
        notifySuccess("User data updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      notifyError("Failed to update user data");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
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
          <div className="team-details light-bg border-top pt-120 lg-pt-80 pb-120 lg-pb-80">
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

          {/* 🔥 Current Device Info */}
          {currentDevice && (
            <div className="mt-4 p-3 border rounded bg-light">
              <h5>Current Device</h5>
              <p><strong>Device:</strong> {currentDevice.device}</p>
              <p><strong>IP Address:</strong> {currentDevice.ip}</p>
              <p><strong>Login Time:</strong> {currentDevice.loginTime}</p>
            </div>
          )}

          {/* 🔥 Login History */}
          <div className="mt-4 p-3 border rounded bg-light">
            <h5>Login History (Last 10 Logins)</h5>
            <ul className="list-group">
              {deviceHistory.length === 0 ? (
                <li className="list-group-item">No login history available.</li>
              ) : (
                [...deviceHistory].slice(-10).map((device, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{device.device}</strong> | IP: {device.ip} | {device.loginTime}
                  </li>
                ))
              )}
            </ul>
            <p className="mt-2"><small>Showing last 10 logins (Full history is stored).</small></p>
          </div>

        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default withAuth(Dashboard);
