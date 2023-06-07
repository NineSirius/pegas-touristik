import Image from "next/image";
import styles from "./Down.module.sass";
import { BsArrowRight } from "react-icons/bs";

const Down = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
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
        <div className={styles.main_block}>
          <div>
            <h3 className={styles.main_block_title}>Не нашли нужный тур?</h3>
            <p className={styles.text_main}>
              Разместите заявку и наши специалисты сами подберут для Вас
              подходящее предложение
            </p>
          </div>
          <div className={styles.main_btn}>
            <button className={styles.btn}>Разместить</button>
          </div>
        </div>

        <div className={styles.info_customer_feedback}>
          <h3 className={styles.feedBack_title}>Отзывы наших клиентов</h3>
          {/* <Image
            src="/public/images/arrow_left.png"
            width={11}
            height={6}
            alt="arrow"
          /> */}
          <div className={styles.feedback_cards}>
            <div className={styles.card_feedback}>
              <div className={styles.info_user_feedback}>
                <div className={styles.profile_img_user}>
                  <Image
                    src="/images/user_image.png"
                    width={50}
                    height={50}
                    alt="user-image"
                  />
                </div>
                <div className={styles.feedback_info_user}>
                  <h5 className={styles.name_user}>Courtney Henry</h5>
                  <span className={styles.span}>Gillette</span>
                </div>
              </div>
              <div className={styles.description}>
                <p className={styles.feedback}>
                  Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices
                  nisl mattis id aliquet sagittis nulla. Tempus urna pharetra
                  amet odio pellentesque. Aliquam eget bibendum vel turpis
                  mauris dui eu lobortis id.{" "}
                </p>
              </div>
            </div>
            <div className={styles.card_feedback}>
              <div className={styles.info_user_feedback}>
                <div className={styles.profile_img_user}>
                  <Image
                    src="/images/user_image2.png"
                    width={50}
                    height={50}
                    alt="user-image"
                  />
                </div>
                <div className={styles.feedback_info_user}>
                  <h5 className={styles.name_user}>Devon Lane</h5>
                  <span className={styles.span}>Nintendo</span>
                </div>
              </div>
              <div className={styles.description}>
                <p className={styles.feedback}>
                  Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices
                  nisl mattis id aliquet sagittis nulla. Tempus urna pharetra
                  amet odio pellentesque. Aliquam eget bibendum vel turpis
                  mauris dui eu lobortis id.{" "}
                </p>
              </div>
            </div>
            <div className={styles.card_feedback}>
              <div className={styles.info_user_feedback}>
                <div className={styles.profile_img_user}>
                  <Image
                    src="/images/user_image3.png"
                    width={50}
                    height={50}
                    alt="user-image"
                  />
                </div>
                <div className={styles.feedback_info_user}>
                  <h5 className={styles.name_user}>Kathryn Murphy</h5>
                  <span className={styles.span}>The Walt Disney Company</span>
                </div>
              </div>
              <div className={styles.description}>
                <p className={styles.feedback}>
                  Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices
                  nisl mattis id aliquet sagittis nulla. Tempus urna pharetra
                  amet odio pellentesque. Aliquam eget bibendum vel turpis
                  mauris dui eu lobortis id.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down;
