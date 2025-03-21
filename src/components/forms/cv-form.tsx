"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db, storage } from "@/database/firebase"; // Import Firestore & Storage
import { notifySuccess, notifyError } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  updateMetadata,
} from "firebase/storage"; // Firebase Storage functions

// Define form data type
type FormData = {
  name: string;
  email: string;
  number: string;
  role: string; // Add role field
  cv?: FileList; // Use undefined instead of null
};

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  role: yup.string().required("Role is required"), // Validate role field
  cv: yup
    .mixed<FileList>() // Explicitly specify the type as FileList
    .test("fileRequired", "CV is required", (value) => {
      return value instanceof FileList && value.length > 0;
    }) // Ensure at least one file is uploaded
    .test("fileType", "Only PDF, DOC, and DOCX files are allowed", (value) => {
      if (!value || value.length === 0) return true; // Skip if no file is uploaded
      const file = value[0];
      return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
    }),
});

const CVForm = () => {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!data.cv || data.cv.length === 0) {
      notifyError("Please upload your CV.");
      return;
    }

    setUploading(true);
    try {
      const file = data.cv[0]; // Get the uploaded file
      // const storageRef = ref(storage, `cvs/${file.name}-${Date.now()}`);
      // file name will remain same and extension only unique will save on before the file name
      const storageRef = ref(storage, `cvs/${Date.now()}-${file.name}`);

      // Upload CV to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Set metadata to prevent forced downloads
      await updateMetadata(snapshot.ref, {
        contentDisposition: "inline",
      });

      // Save form data along with CV URL & timestamp to Firestore
      const contactRef = collection(db, "cv");
      await addDoc(contactRef, {
        name: data.name,
        email: data.email,
        number: data.number,
        role: data.role, // Save role
        cvUrl: downloadURL,
        submittedAt: new Date().toISOString(), // Save submission time
      });

      reset();
      router.push("/thank-you");
      notifySuccess("CV submitted successfully!");
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
            <input
              className="form-control"
              type="text"
              placeholder="Your Name*"
              {...register("name")}
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="input-group-meta form-group mb-30">
            <label>Email*</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email Address*"
              {...register("email")}
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Phone Number*</label>
            <input
              className="form-control"
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

        {/* Role Dropdown */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Role*</label>
            <select className="form-select" {...register("role")}>
              <option value="">Select a role</option>
              <option value="Executive Assistant">Executive Assistant</option>
              <option value="Technical Lead">Technical Lead</option>
              <option value="Cloud Engineer - Identity">
                Cloud Engineer - Identity
              </option>
              <option value="Cloud Engineer - Operating Systems">
                Cloud Engineer - Operating Systems
              </option>
              <option value="Integration Software Engineer">
                Integration Software Engineer
              </option>
              <option value="Senior Integration Software Engineer">
                Senior Integration Software Engineer
              </option>
            </select>
            <ErrorMsg msg={errors.role?.message!} />
          </div>
        </div>

        {/* CV Upload Section */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label>Upload CV* (PDF, DOC, DOCX)</label>
            <input type="file" {...register("cv")} accept=".pdf,.doc,.docx" />
            <ErrorMsg msg={errors.cv?.message!} />
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn-four tran3s w-100 d-block"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CVForm;
