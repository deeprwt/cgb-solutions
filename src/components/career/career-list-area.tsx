'use client'
import React, { useState, useEffect } from "react";
import career_data from "@/data/career-data";
import usePagination from "@/hooks/use-pagination";
import { ICareer } from "@/types/career-d-t";
import Pagination from "@/ui/pagination";
import CareerListItem from "./career-list-item";

const CareerListArea = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      const newSuggestions = career_data
        .map(item => item.title)
        .filter(title => title.toLowerCase().includes(searchQuery.toLowerCase()));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  // Filter the career data based on the search query
  const filteredCareerItems = career_data
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  const { currentItems, handlePageClick, pageCount } = usePagination<ICareer>(filteredCareerItems, 6);

  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
             
          {/* Search Input */}
          <div className="search-bar blog-sidebar md-mt-60  mb-4">
        
            <div className="sidebar-search">
            <input
              type="text"
              placeholder="Search by Job Name...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              list="suggestions"
              className="form-control"
            />
            <datalist id="suggestions">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
            </div>
          </div>

          {filteredCareerItems.length === 0 ? (
            <div className="no-data-message">
              No data found.
            </div>
          ) : (
            <>
              <div className="row gx-xxl-5">
                {currentItems?.map((item, index) => (
                  <div key={index} className="col-md-4">
                    <CareerListItem blog={item} />
                  </div>
                ))}
              </div>
              <div className="pagination-one mt-20">
                <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerListArea;
