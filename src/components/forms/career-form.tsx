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

const CareerForm = () => {
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
    <>
      <div className="contact-us-section pt-80 lg-pt-80">
        <div className="container">
          <div className="position-relative">
            <div className="bg-wrapper light-bg mt-80 lg-mt-40">
              <div className="row">
                {/* <div className="col-lg-5">
                  <div className="d-flex flex-column flex-lg-column-reverse">
                    <div className="row">
                      <div className="col-md-8 col-6 me-auto ms-auto">
                        <Image
                          src={icon_4}
                          alt="icon"
                          className="lazy-img me-auto ms-auto"
                        />
                      </div>
                    </div>
                    <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                      <h2>Have inquiry? Reach to out us via message...</h2>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-7">
                  <div className="form-style-one ps-xl-5">
                    {/* form start */}
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="messages"></div>
                      <div className="row controls">
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-30">
                            <label htmlFor="">Name*</label>
                            <input
                              type="text"
                              placeholder="Your Name*"
                              {...register("name")}
                              id="name"
                              name="name"
                            />
                            <div className="help-block with-errors">
                              <ErrorMsg msg={errors.name?.message!} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-30">
                            <label htmlFor="">Email*</label>
                            <input
                              type="email"
                              placeholder="Email Address*"
                              {...register("email")}
                              id="email"
                              name="email"
                            />
                            <div className="help-block with-errors">
                              <ErrorMsg msg={errors.email?.message!} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-30">
                            <label htmlFor="">Website Url*</label>
                            <input
                              type="text"
                              placeholder="Website Url*"
                              {...register("websiteurl")}
                              id="websiteurl"
                              name="websiteurl"
                            />
                            <div className="help-block with-errors">
                              <ErrorMsg msg={errors.websiteurl?.message!} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-40">
                            <label htmlFor="">Company Name*</label>
                            <input
                              type="text"
                              placeholder="Company Name*"
                              {...register("companyname")}
                              id="companyname"
                              name="companyname"
                            />
                            <div className="help-block with-errors">
                              <ErrorMsg msg={errors.companyname?.message!} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-35">
                            <textarea
                              placeholder="Your message*"
                              {...register("message")}
                              id="message"
                              name="message"
                            ></textarea>
                            <div className="help-block with-errors">
                              <ErrorMsg msg={errors.message?.message!} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn-four tran3s w-100 d-block"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* form end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
