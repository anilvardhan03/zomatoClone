import { useState } from "react";

export default function ImageGalleryWithModal({ images, count }) {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = count;
  const visibleImages = showAll ? images : images.slice(0, visibleCount);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="pt-4">
        <div style={{ display: "flex" }}>
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "300px", cursor: "pointer" }}
              onClick={() => openModal(index)}
              className="rounded-3 m-2"
            />
          ))}
        </div>
        {images.length > visibleCount && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-link p-0"
            style={{ cursor: "pointer" }}
          >
            Few more...
          </button>
        )}
      </div>

      {modalOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={closeModal}
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-danger text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title">
                  Image {currentIndex + 1} of {images.length}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "70vh" }}
                />
              </div>
              <div className="modal-footer justify-content-between border-0">
                <button className="btn btn-outline-light" onClick={prevImage}>
                  &laquo; Prev
                </button>
                <button className="btn btn-outline-light" onClick={nextImage}>
                  Next &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
