"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db } from "@/database/firebase"; // Import Firestore instance
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import Image from "next/image";
import icon_4 from "@/assets/images/assets/ils_07.svg";

// ... existing imports

import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions

type FormData = {
  name: string;
  email: string;
  websiteurl: string;
  companyname: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  websiteurl: yup.string().required().label("Website Url"),
  companyname: yup.string().required().label("Company Name"),
  message: yup.string().required().min(10).label("Message"),
});

const CareerJobForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // const onSubmit = handleSubmit((data) => {
  //   alert(JSON.stringify(data));
  //   reset();
  // });

  // Define form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      // Add data to Firestore collection (conditionally executed only in the client-side)
      if (typeof window !== "undefined") {
        // Check if window is defined (browser environment)
        const { db } = await import("@/database/firebase");
        const contactRef = collection(db, "newcontact");
        await addDoc(contactRef, data);
        notifySuccess("Message sent successfully!"); // Use notifySuccess
        reset(); // Clear the form
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      notifyError("Error sending message, please try again."); // Use notifyError
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Apply for*</label>
            <input
              type="text"
              placeholder="Job Title - Apply for*"
              {...register("name")}
              id="name"
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Name*</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Phone Number*</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="YourEmail@gmail.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Linkdin Profile url*</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="YourEmail@gmail.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Designation*</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="YourEmail@gmail.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Year of Experience*</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="YourEmail@gmail.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>State*</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>City*</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Remark*</label>
            <textarea
              placeholder="Your message*"
              {...register("message")}
              id="message"
              name="message"
            ></textarea>
            <ErrorMsg msg={errors.message?.message!} />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
            Apply Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerJobForm;
