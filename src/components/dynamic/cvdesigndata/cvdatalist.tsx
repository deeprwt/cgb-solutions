"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DatePicker from "react-datepicker"; // For date filtering
import "react-datepicker/dist/react-datepicker.css"; // Date picker styles
import JSZip from "jszip";
import { saveAs } from "file-saver";

type CVData = {
  id?: string;
  name: string;
  email: string;
  number: string;
  role: string; // Role field
  cvUrl: string; // URL of the uploaded CV
  submittedAt: string; // Timestamp of submission
};

const CVList = () => {
  const [cvData, setCVData] = useState<CVData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [roleFilter, setRoleFilter] = useState<string>(""); // Role filter state
  const [nameFilter, setNameFilter] = useState<string>(""); // Name filter state
  const [startDate, setStartDate] = useState<Date | null>(null); // Start date for date range
  const [endDate, setEndDate] = useState<Date | null>(null); // End date for date range

  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const cvSnapshot = await getDocs(collection(db, "cv")); // Fetch data from the "cv" collection
        const cvData = cvSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as CVData)
        );
        // Sort data by 'submittedAt' in descending order (newest first)
        cvData.sort(
          (a, b) =>
            new Date(b.submittedAt).getTime() -
            new Date(a.submittedAt).getTime()
        );
        setCVData(cvData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching CV data:", error);
      }
    };

    fetchCVData();
  }, []);

  // Filtering logic
  const filteredData = cvData.filter((cv) => {
    // Filter by role
    if (roleFilter && cv.role !== roleFilter) return false;

    // Filter by name
    if (nameFilter && !cv.name.toLowerCase().includes(nameFilter.toLowerCase()))
      return false;

    // Filter by date range
    if (startDate && endDate) {
      const submittedDate = new Date(cv.submittedAt);
      if (submittedDate < startDate || submittedDate > endDate) return false;
    }

    return true;
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<CVData>(
    filteredData,
    9
  );

   // Function to get count of filtered CVs
   const getFilteredCVCount = () => {
    return cvData.filter((cv) => {
      const submittedDate = new Date(cv.submittedAt);
      if (startDate && submittedDate < startDate) return false;
      if (endDate && submittedDate > endDate) return false;
      return true;
    }).length;
  };

  // Function to download all CVs
  const downloadAllCVs = async () => {
    if (cvData.length === 0) return;
    const zip = new JSZip();
    const folder = zip.folder("CVs");

    if (!folder) return;

    try {
      await Promise.all(
        cvData.map(async (cv) => {
          const response = await fetch(cv.cvUrl);
          const blob = await response.blob();
          folder.file(`${cv.name.replace(/\s+/g, "_")}.pdf`, blob);
        })
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "CVs.zip");
    } catch (error) {
      console.error("Error downloading files:", error);
    }
  };

  // Function to download date-filtered CVs
  const downloadFilteredCVs = async () => {
    const zip = new JSZip();
    const folder = zip.folder("Filtered_CVs");

    if (!folder) return;

    const filteredCVs = cvData.filter((cv) => {
      const submittedDate = new Date(cv.submittedAt);
      if (startDate && submittedDate < startDate) return false;
      if (endDate && submittedDate > endDate) return false;
      return true;
    });

    if (filteredCVs.length === 0) {
      alert("No CVs found in the selected date range.");
      return;
    }

    try {
      await Promise.all(
        filteredCVs.map(async (cv) => {
          const response = await fetch(cv.cvUrl);
          const blob = await response.blob();
          folder.file(`${cv.name.replace(/\s+/g, "_")}.pdf`, blob);
        })
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "Filtered_CVs.zip");
    } catch (error) {
      console.error("Error downloading files:", error);
    }
  };


  return (
    <div className="cv-section position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container form-style-one">
        {/* Filters Section */}
        <div className="row mb-4 form-style-one">
          <div className="col-md-3 d-flex flex-column">
            <label htmlFor="roleFilter" className="form-label">
              Filter by Role
            </label>
            <select
              id="roleFilter"
              className="form-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="">All Roles</option>
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
          </div>

          <div className="col-md-3  d-flex flex-column">
            <label htmlFor="nameFilter" className="form-label">
              Filter by Name
            </label>
            <input
              type="text"
              id="nameFilter"
              className="form-control"
              placeholder="Search by name"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>

          <div className="col-md-3  d-flex flex-column">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="form-control"
              placeholderText="Select start date"
            />
          </div>

          <div className="col-md-3  d-flex flex-column">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || undefined} // Convert null to undefined
              className="form-control"
              placeholderText="Select end date"
            />
          </div>
        </div>

          {/* Download Buttons */}
          <div className="mb-4">
          <button className="btn btn-primary me-3" onClick={downloadAllCVs}>
            Download All CVs
          </button>
          <button className="btn btn-success" onClick={downloadFilteredCVs}>
            Download Filtered CVs ({getFilteredCVCount()})
          </button>
        </div>

        {/* CV List Section */}
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {loading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="col-md-4 mb-5">
                    <Skeleton height={250} />
                    <Skeleton count={3} />
                  </div>
                ))
              : currentItems.map((cv) => (
                  <div key={cv.id} className="col-md-4 mb-5">
                    <div className="card cv-card">
                      <div className="card-body">
                        <h5 className="card-title">{cv.name}</h5>
                        <p className="card-text">
                          <strong>Email:</strong> {cv.email}
                        </p>
                        <p className="card-text">
                          <strong>Phone:</strong> {cv.number}
                        </p>
                        <p className="card-text">
                          <strong>Role:</strong> {cv.role}
                        </p>
                        <p className="card-text">
                          <strong>Submitted At:</strong>{" "}
                          {new Date(cv.submittedAt).toLocaleString()}
                        </p>
                        <div className="cv-preview">
                          <a
                            href={cv.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            View CV
                          </a>
                          <iframe
                            src={cv.cvUrl}
                            width="100%"
                            height="300px"
                            style={{ marginTop: "10px", border: "none" }}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className="pagination-one mt-20">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVList;
