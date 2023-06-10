import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import styles from "./News_cards.module.sass";

const CardNews = () => {
  return (
    <>
      <h3 className={styles.post_title}>Новости компании</h3>
      <div className={styles.post_cards}>
        <div className={styles.card}>
          <Image
            src="/images/news1.png"
            width={614}
            height={250}
            alt="Picture of post-card"
            className={styles.card_images}
          />
          <div className={styles.post_descriptions}>
            <h4 className={styles.subTitle}>Обновление сайта</h4>
            <p className={styles.text}>
              Мы постоянно развиваемся и рады предстваить Вам новую версию
              нашего <br /> сайта. У него мощная техническая начинка, которая
              позволяет за несколько <br /> секунд находить сотни туров, от
              крупнейших туроператоров.
            </p>
          </div>
          <div className={styles.post_button}>
            <a href="#" className={styles.linkMore}>
              Подробнее
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/news1.png"
            width={614}
            height={250}
            alt="Picture of post-card"
            className={styles.card_images}
          />
          <div className={styles.post_descriptions}>
            <h4 className={styles.subTitle}>Адаптивный сайт</h4>
            <p className={styles.text}>
              Мы постоянно развиваемся и рады предстваить Вам новую версию
              нашего <br /> сайта. У него мощная техническая начинка, которая
              позволяет за несколько <br /> секунд находить сотни туров, от
              крупнейших туроператоров.
            </p>
          </div>
          <div className={styles.post_button}>
            <a href="#" className={styles.linkMore}>
              Подробнее
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
