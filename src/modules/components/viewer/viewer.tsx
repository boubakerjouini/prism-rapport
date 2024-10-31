import Image from "next/image";
import React, { useState, useRef } from "react";
import { HiOutlineArrowsExpand, HiX } from "react-icons/hi";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}> = ({ isOpen, onClose, imageSrc }) => {
  const [zoomed, setZoomed] = useState(false); // State to manage zoom level
  const [position, setPosition] = useState({ x: 0, y: 0 }); // State to manage position
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 }); // To track the initial position
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const imgRef = useRef<HTMLImageElement | null>(null); // Reference to the image element
  const [origin, setOrigin] = useState("top");

  if (!isOpen) return null;

  // Function to toggle zoom
  const toggleZoom = () => {
    setZoomed((prevZoomed) => !prevZoomed);
    setPosition({ x: 0, y: 0 }); // Reset position when zooming
  };

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    setOrigin(calculateOrigin(e));
  };

  const calculateOrigin = (e: React.MouseEvent) => {
    // Calculate the origin based on the cursor position if clicked on the image on top half or center or bottom half
    const { top, height } = imgRef.current?.getBoundingClientRect() as any;
    const { clientY } = e;
    if (clientY < top + height / 3) {
      return "top";
    } else if (clientY > top + (height / 3) * 2) {
      return "bottom";
    } else {
      return "center";
    }
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - initialPosition.x,
      y: e.clientY - initialPosition.y,
    });
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    const modalElement = document.getElementById("modal-image-container");
    if (!modalElement) return;

    if (!document.fullscreenElement) {
      modalElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-auto"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        id="modal-image-container" // Added ID for fullscreen reference
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
        onMouseMove={handleMouseMove} // Handle mouse move for dragging
        onMouseUp={handleMouseUp} // Handle mouse up to stop dragging
        onMouseLeave={handleMouseUp} // Stop dragging when mouse leaves
      >
        {/* Image with zoom and pan functionality */}
        <div
          onClick={toggleZoom}
          className={`cursor-pointer transition-transform duration-300`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) ${
              zoomed ? "scale(2)" : "scale(1)"
            }`,
            transformOrigin: origin,
          }}>
          <Image
            src={imageSrc}
            alt="Full view"
            layout="responsive"
            width={1000} // Adjust width for your needs
            height={800} // Adjust height for your needs
            objectFit="contain" // Fit the image within the modal
            className="max-h-screen max-w-screen py-20" // Ensure the image doesn't exceed screen size
            ref={imgRef} // Reference to the image element
            onMouseDown={handleMouseDown} // Handle mouse down for dragging
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4 flex space-x-2">
        <button
          onClick={toggleFullscreen}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full">
          <HiOutlineArrowsExpand className="text-2xl" />
        </button>
        <button
          onClick={onClose}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full">
          <HiX className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

// Main Viewer component
const Viewer: React.FC<{
  data: any; // Define a more specific type if available
  selectedPage: number;
}> = ({ data, selectedPage }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Get the current page data
  const currentPage = data?.pages[selectedPage - 1];
  console.log("currentPage", currentPage);
  return (
    <div className="flex flex-col items-center justify-center w-2/3 h-full">
      <div className="relative w-[770px] h-[580px] overflow-hidden  rounded-none">
        {/* Title overlay */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-[6px] bg-[#052c52] text-white py-2 px-5 z-10 text-base font-semibold">
          {currentPage.name}
          <p className="text-center text-xs">
            {currentPage.flags.length > 0 &&
              currentPage.flags.map((flag: any, index: number) => (
                <span
                  key={flag.id}
                  className={`text-xs ${
                    flag?.status === "destructive"
                      ? "text-red-500"
                      : flag?.status === "constructive"
                      ? "text-violet-500"
                      : flag?.status === "primary"
                      ? "text-cyan-500"
                      : flag?.status === "benchmark"
                      ? "text-green-500"
                      : ""
                  }`}>
                  {flag?.name}
                  {currentPage.flags.length - 1 === index ? (
                    ""
                  ) : (
                    <span className="text-xs text-white inline-block">/</span>
                  )}
                </span>
              ))}
          </p>
        </div>
        {/* Clickable Image */}
        <div onClick={openModal} className="cursor-pointer">
          <Image
            src={`/assets/foundation/${currentPage.image}`}
            alt="viewer"
            layout="responsive"
            objectFit="cover"
            width={770}
            height={580}
            objectPosition="top"
          />
        </div>
      </div>

      {/* Modal for full-size image */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={`/assets/foundation/${currentPage.image}`} // Full-size image source
      />
    </div>
  );
};

export default Viewer;
