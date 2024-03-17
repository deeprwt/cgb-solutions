"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db } from "@/database/firebase"; // Import Firestore instance
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions

// ... existing imports

import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions


type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
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

  const onSubmit = async (data: FormData) => {
    try {
      // Add data to Firestore collection
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, data);
      notifySuccess("Message sent successfully!"); // Use notifySuccess
      reset(); // Clear the form
    } catch (error) {
      console.error("Error adding document: ", error);
      notifyError("Error sending message, please try again."); // Use notifyError
    }
  };

  return (
    <>
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
            <div className="input-group-meta form-group mb-40">
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
            <button type="submit" className="btn-four tran3s w-100 d-block">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
