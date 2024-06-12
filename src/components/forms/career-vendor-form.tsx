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
  title: string;
  name: string;
  number: number;
  email: string;
  designation: string;
  experience: number;
  websiteurl: string;
  message: string;
};

const schema = yup.object().shape({
  title: yup.string().required().label("Title"),
  name: yup.string().required().label("Name"),
  number: yup.number()    .typeError("Number must be a valid number")
  .required("Number is a required field").label("Number"),
  email: yup.string().required().email().label("Email"),
  designation: yup.string().required().label("Designation"),
  experience: yup.number()    .typeError("Experience must be a valid number")
  .required("Experience is a required field").label("Experience"),
  websiteurl: yup.string().required().label("Website Url"),
  message: yup.string().required().min(10).label("Message"),
});

const CareerVendorForm = () => {
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
        const contactRef = collection(db, "vendorform");
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
    <form id="vendor-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Apply for*</label>
            <input
              type="text"
              placeholder="Job Title - Apply for*"
              {...register("title")}
              id="title"
              name="title"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.title?.message!} />
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
              type="number"
              {...register("number")}
              id="number"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.number?.message!} />
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
            <label>Designation*</label>
            <input
              type="text"
              {...register("designation")}
              id="designation"
              placeholder="Your Designation In Company"
            />
            <ErrorMsg msg={errors.designation?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Year of Experience*</label>
            <input
              type="number"
              {...register("experience")}
              id="experience"
              placeholder="Enter Number of Experience"
            />
            <ErrorMsg msg={errors.experience?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>website url*</label>
            <input
              type="text"
              {...register("websiteurl")}
              id="websiteurl"
              placeholder="websiteurl"
            />
            <ErrorMsg msg={errors.websiteurl?.message!} />
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

export default CareerVendorForm;
