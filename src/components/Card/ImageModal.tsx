import Image from "next/image";
import React, { useEffect } from "react";
import st from "./GridBlocks.module.sass";
interface ImageModalProps {
  imageUrl: any;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={st.overlay} onClick={onClose}>
      <div className={st.modal} onClick={(event) => event.stopPropagation()}>
        <button className={st.modal_btn} onClick={onClose}>
          &times;
        </button>
        <Image src={imageUrl} width={400} height={400} alt="Modal Image" />
      </div>
    </div>
  );
};

export default ImageModal;
