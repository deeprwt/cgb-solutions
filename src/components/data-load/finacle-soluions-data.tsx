"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import { fincale_solutions_data } from "@/data/random-component-data";

const DataLoader = () => {
  const [itemsToShow, setItemsToShow] = useState(6); // Number of items to show initially
  const [showButton, setShowButton] = useState(true); // Whether to show the "Load More" button
  const service_items = fincale_solutions_data
    .filter((s) => s.page === "oracle")
    .slice(0, itemsToShow);

  const loadMoreItems = () => {
    // Increment the number of items to show by 6
    setItemsToShow(itemsToShow + 6);
    // If all items are fetched, hide the button
    if (
      itemsToShow + 6 >=
      fincale_solutions_data.filter((s) => s.page === "oracle").length
    ) {
      setShowButton(false);
    }
  };
  return (
    <>
      {service_items.map((item, i) => (
        <div
          key={item.id}
          className="col-md-4 d-flex wow fadeInUp"
          data-wow-delay={`0.${i}s`}
        >
          <div
            className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
            style={{ padding: "20px 15px 10px;" }}
          >
            <div className="icon d-flex align-self-center">
              <Image src={item.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="fw-bold mt-30 mb-30 text-center text-capitalize" style={{color:"#012d50"}}>{item.title}</h4>
            <p className="text-center">{item.desc}</p>
            {/* <Link href="/service-details" className="stretched-link"></Link> */}
          </div>
        </div>
      ))}
      {/* Button to load more items */}
      {showButton && (
        <div className="d-flex justify-content-center mt-4">
          <button className="btn-four mt-15 me-4" onClick={loadMoreItems}>
            Load More
          </button>
        </div>
      )}
      {/* Your existing code */}
    </>
  );
};

export default DataLoader;
