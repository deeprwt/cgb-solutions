'use client'
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "@/database/firebase";
import { notifySuccess, notifyError } from "@/utils/toast";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import Wrapper from "@/layout/wrapper";
import FooterOne from "@/layout/footer/footer-one";
import Sidebar from "@/layout/admin/sidebar";
import withAuth from "@/components/hoc/withAuth";

const ImageGallery = () => {
  const [images, setImages] = useState<{ id: string, url: string }[]>([]);
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [folder, setFolder] = useState("articleimages");

  const fetchImages = async (folder: string) => {
    try {
      const listRef = ref(storage, `${folder}/`);
      const res = await listAll(listRef);
      const imageUrls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { id: itemRef.name, url };
        })
      );
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages(folder);
  }, [folder]);

  const handleImageUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!imageUpload) return;

    const imageRef = ref(storage, `${folder}/${imageUpload.name}_${Date.now()}`);
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const downloadURL = await getDownloadURL(snapshot.ref);
      const newImage = { url: downloadURL };

      await addDoc(collection(db, folder), newImage);
      setImages([...images, { id: snapshot.ref.name, url: downloadURL }]);
      notifySuccess("Image uploaded successfully!");
      setImageUpload(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      notifyError("Failed to upload image");
    }
  };

  const handleImageDelete = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this image?");
    if (!isConfirmed) return;
    try {
      await deleteDoc(doc(db, folder, id));
      setImages(images.filter(image => image.id !== id));
      notifySuccess("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      notifyError("Failed to delete image");
    }
  };

  const copyLinkToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
      .then(() => notifySuccess("Link copied to clipboard!"))
      .catch(() => notifyError("Failed to copy link"));
  };

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Sidebar />
        <main>
          <div className="pt-120 lg-pt-80 pb-120 lg-pb-80">
            <div className="container">
              <div className="bg-wrapper">
                <h2 className="name fw-bold m-0">Image Gallery</h2>
                <form onSubmit={handleImageUpload}>
                  <div className="mb-3">
                    <label htmlFor="folderSelect" className="form-label">Select Folder</label>
                    <select
                      id="folderSelect"
                      className="form-control"
                      value={folder}
                      onChange={(e) => setFolder(e.target.value)}
                    >
                      <option value="articleimages">Article Images</option>
                      <option value="blogimages">Blog Images</option>
                      <option value="newsimages">News Images</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageUpload" className="form-label">Upload Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="imageUpload"
                      onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add Image</button>
                </form>
                <hr />
                <div className="row gx-xxl-5">
                  {images.map(image => (
                    <div key={image.id} className="col-md-4">
                      <div className="card">
                        <img src={image.url} className="card-img-top" alt="Image" />
                        <div className="card-body">
                          <button className="btn btn-danger" onClick={() => handleImageDelete(image.id)}>Delete</button>
                          <button className="btn btn-secondary" onClick={() => copyLinkToClipboard(image.url)}>Copy Link</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default withAuth(ImageGallery);
