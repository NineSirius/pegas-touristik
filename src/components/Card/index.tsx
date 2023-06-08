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
            className={styles.img}
            width={220}
            height={350}
            alt="Изображение"
          />
        </div>
        <div className={styles.flexItem_wrap}>
          <div className={styles.item}>
            <div
              className={styles.flexItem2}
              onClick={() => handleImageClick("/img2.png")}
            >
              <Image
                className={styles.img}
                src="/img2.png"
                width={220}
                height={170}
                alt="Изображение"
              />
            </div>
            <div
              className={styles.flexItem2}
              onClick={() => handleImageClick("/img3.png")}
            >
              <Image
                className={styles.img}
                src="/img3.png"
                width={220}
                height={170}
                alt="Изображение"
              />
            </div>
          </div>
          <div className={styles.item2}>
            <div
              className={styles.flexItem2}
              onClick={() => handleImageClick("/img4.png")}
            >
              <Image
                className={styles.img}
                src="/img4.png"
                width={220}
                height={170}
                alt="Изображение"
              />
            </div>
            <div
              className={styles.flexItem2}
              onClick={() => handleImageClick("/img5.png")}
            >
              <Image
                className={styles.img}
                src="/img5.png"
                width={220}
                height={170}
                alt="Изображение"
              />
            </div>
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
