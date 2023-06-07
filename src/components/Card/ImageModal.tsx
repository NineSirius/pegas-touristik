import Image from "next/image";
import React from "react";
import { createPortal } from "react-dom";

interface ImageModalProps {
  imageUrl: any;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <Image src={imageUrl} width={400} height={400} alt="Modal Image" />
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default ImageModal;
