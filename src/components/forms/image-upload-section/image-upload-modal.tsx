import React, { useState, useEffect } from "react";
import { db, storage } from "@/database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"; // Ensure uploadBytes is imported

interface ImageUploadModalProps {
  onImageSelect: (url: string) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  onImageSelect,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>("articleimages");
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  useEffect(() => {
    fetchImages(selectedFolder);
  }, [selectedFolder]);

  const fetchImages = async (folder: string) => {
    const folderRef = ref(storage, folder);
    const imagesList = await listAll(folderRef);
    const urls = await Promise.all(
      imagesList.items.map((item) => getDownloadURL(item))
    );
    setImages(urls);
  };

  const handleImageUpload = async () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `${selectedFolder}/${imageUpload.name}`);
    await uploadBytes(imageRef, imageUpload);
    setImageUpload(null);
    fetchImages(selectedFolder); // Refresh images after upload
  };

  return (
    <>
      <div
        className="modal fade"
        id="UploadImageModalid"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered mb-10 mt-10">
          <div className="container d-flex align-items-center justify-content-center">
            <div
              className="user-data-form modal-content p-5"
              style={{ boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className=" text-center">Select or Upload Image</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                  <div className="input-group-meta position-relative mb-20">
                    <label htmlFor="folderSelect" className="form-label">
                      Select Folder
                    </label>
                    <select
                      id="folderSelect"
                      className="form-control"
                      value={selectedFolder}
                      onChange={(e) => setSelectedFolder(e.target.value)}
                    >
                      <option value="articleimages">Article Images</option>
                      <option value="blogimages">Blog Images</option>
                      <option value="newsimages">News Images</option>
                    </select>
                  </div>
                  <div className="input-group-meta position-relative mb-20">
                    <label htmlFor="imageUpload" className="form-label">
                      Upload New Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="imageUpload"
                      onChange={(e) =>
                        setImageUpload(e.target.files?.[0] || null)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-four w-100 tran3s d-block mt-20"
                    onClick={handleImageUpload}
                  >
                    Upload Image
                  </button>
                  <div className="row">
                    {images.map((url) => (
                      <div key={url} className="col-md-4">
                        <img
                          src={url}
                          alt="Image"
                          className="img-fluid"
                          onClick={() => {
                            onImageSelect(url);
                            (
                              document.querySelector(
                                "#imageUploadModal .btn-close"
                              ) as HTMLElement
                            )?.click();
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ))}
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="modal fade"
        id="imageUploadModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered mb-10 mt-10">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select or Upload Image</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="folderSelect" className="form-label">
                  Select Folder
                </label>
                <select
                  id="folderSelect"
                  className="form-select"
                  value={selectedFolder}
                  onChange={(e) => setSelectedFolder(e.target.value)}
                >
                  <option value="articleimages">Article Images</option>
                  <option value="blogimages">Blog Images</option>
                  <option value="newsimages">News Images</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="imageUpload" className="form-label">
                  Upload New Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={handleImageUpload}
                >
                  Upload Image
                </button>
              </div>
              <div className="row">
                {images.map((url) => (
                  <div key={url} className="col-md-4">
                    <img
                      src={url}
                      alt="Image"
                      className="img-fluid"
                      onClick={() => {
                        onImageSelect(url);
                        (
                          document.querySelector(
                            "#imageUploadModal .btn-close"
                          ) as HTMLElement
                        )?.click();
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ImageUploadModal;
