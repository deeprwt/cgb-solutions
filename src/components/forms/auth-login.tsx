"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/database/firebase";
import icon from "@/assets/images/icon/icon_13.svg";
import ErrorMsg from "../common/error-msg";
import { notifySuccess, notifyError } from "@/utils/toast";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const AuthLogin = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [resetEmailSent, setResetEmailSent] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>("");
  const [resetError, setResetError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in");
      } else {
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const submitForm = async (values: FormData) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      notifySuccess("User logged in successfully!");
      reset();
      router.push("/dashboard");
    } catch (e) {
      // Type assertion for Firebase error
      const error = e as { message: string };
      console.error("Firebase Error:", error.message);
      notifyError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmailSent(true);
      setResetError(null);
    } catch (e) {
      // Type assertion for Firebase error
      const error = e as { message: string };
      console.error("Error sending password reset email:", error.message);
      setResetError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Email*</label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="Youremail@gmail.com"
              />
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-20">
              <label>Password*</label>
              <input
                type={`${showPass ? "text" : "password"}`}
                {...register("password")}
                id="password"
                placeholder="Enter Password"
                className="pass_log_id"
              />
              <span
                className="placeholder_icon"
                onClick={() => setShowPass(!showPass)}
              >
                <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                  <Image src={icon} alt="pass-icon" />
                </span>
              </span>
              <ErrorMsg msg={errors.password?.message!} />
            </div>
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#ForgotModal"
                className=""
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-four w-100 tran3s d-block mt-20"
            >
              Login
            </button>
          </div>
        </div>
      </form>

      <div
        className="modal fade"
        id="ForgotModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered mb-10 mt-10">
          <div className="container d-flex align-items-center justify-content-center">
            <div
              className="user-data-form modal-content p-5"
              style={{ boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className=" text-center">Forgot Password?</h3>
              <p className=" text-center">Please enter your email address to reset your password.</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleForgotPassword();
                  }}
                >
                  <div className="input-group-meta position-relative mb-20">
                    <label htmlFor="resetEmail" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="resetEmail"
                      className="form-control"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Your email address"
                    />
                  </div>
                  <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
                    Send Reset Link
                  </button>
                  {resetEmailSent && (
                    <p className="text-success mt-3">
                      Password reset email sent! Please check your inbox.
                    </p>
                  )}
                  {resetError && (
                    <p className="text-danger mt-3">{resetError}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
