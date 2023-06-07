import Image from "next/image";
import styles from "./GridBlocks.module.sass";
import ImageModal from "./ImageModal";
import { useState } from "react";

const Card = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showImage, setShowImage] = useState<boolean>(false);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
    setShowImage(true);
  };

  const handleModalClose = () => {
    setShowImage(false);
  };

  return (
    <div>
      <div className={styles.flexContainer}>
        <div
          onClick={() => handleImageClick("/img1.png")}
          className={styles.flexItem1}
        >
          <Image
            src="/img1.png"
            width={100}
            height={100}
            alt="Изображение автора"
          />
        </div>
        <div className={styles.flexItem_wrap}>
          <div className={styles.item}>
            <div className={styles.flexItem2}>Блок 2</div>
            <div className={styles.flexItem2}>Блок 3</div>
          </div>
          <div className={styles.item2}>
            <div className={styles.flexItem2}>Блок 4</div>
            <div className={styles.flexItem2}>Блок 5</div>
          </div>
        </div>
      </div>
      {showImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default Card;
