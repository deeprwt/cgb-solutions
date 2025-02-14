"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db, storage } from "@/database/firebase";
import { notifySuccess, notifyError } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Define form data type
type FormData = {
  name: string;
  email: string;
  number: string;
  companyname: string;
  message: string;
  cv?: File; // CV is optional but validated manually
};

// Yup validation for text fields only (No validation for CV)
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  companyname: yup.string().required("Company Name is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const CVForm = () => {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [cvError, setCvError] = useState<string | null>(null); // For manual file validation error

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Resolver now only validates name, email, etc.
  });

  const validateFile = (file: File) => {
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      setCvError("Only PDF, DOC, and DOCX files are allowed.");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setCvError("File size must be less than 5MB.");
      return false;
    }
    setCvError(null); // No errors
    return true;
  };

  const onSubmit = async (data: FormData) => {
    setUploading(true);
    try {
      let cvUrl = "";

      // Upload file if provided
      if (data.cv) {
        if (!validateFile(data.cv)) {
          setUploading(false);
          return;
        }

        const file = data.cv;
        const storageRef = ref(storage, `cvs/${file.name}-${Date.now()}`);
        const snapshot = await uploadBytes(storageRef, file);
        cvUrl = await getDownloadURL(snapshot.ref);
      }

      // Save form data along with CV URL (if uploaded) & timestamp to Firestore
      const contactRef = collection(db, "cv");
      await addDoc(contactRef, {
        name: data.name,
        email: data.email,
        number: data.number,
        companyname: data.companyname,
        message: data.message,
        cvUrl: cvUrl, // Save empty string if no file was uploaded
        submittedAt: new Date().toISOString(),
      });

      router.push("/thank-you");
      notifySuccess("Message submitted successfully!");
    } catch (error) {
      console.error("Error uploading CV:", error);
      notifyError("Error submitting form, please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form id="cv-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12 col-md-6">
          <div className="input-group-meta form-group mb-30">
            <label>Name*</label>
            <input type="text" placeholder="Your Name*" {...register("name")} />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="input-group-meta form-group mb-30">
            <label>Email*</label>
            <input type="email" placeholder="Email Address*" {...register("email")} />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Phone Number*</label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              {...register("number")}
              maxLength={10}
              onInput={(e) => {
                if (e.currentTarget.value.length > 10) {
                  e.currentTarget.value = e.currentTarget.value.slice(0, 10);
                }
              }}
            />
            <ErrorMsg msg={errors.number?.message!} />
          </div>
        </div>

        {/* <div className="col-12 col-md-6">
          <div className="input-group-meta form-group mb-40">
            <label>Company Name*</label>
            <input type="text" placeholder="Company Name*" {...register("companyname")} />
            <ErrorMsg msg={errors.companyname?.message!} />
          </div>
        </div> */}
                {/* CV Upload Section (Manual Validation) */}
                <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label>Upload CV (Optional) - PDF, DOC, DOCX (Max: 5MB)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const file = e.target.files[0];
                  if (validateFile(file)) {
                    setValue("cv", file);
                  } else {
                    setValue("cv", undefined);
                  }
                }
              }}
            />
            {cvError && <ErrorMsg msg={cvError} />}
          </div>
        </div>

        {/* <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label>Service Required*</label>
            <textarea placeholder="Message" {...register("message")}></textarea>
            <ErrorMsg msg={errors.message?.message!} />
          </div>
        </div> */}



        <div className="col-12">
          <button type="submit" className="btn-four tran3s w-100 d-block" disabled={uploading}>
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CVForm;
