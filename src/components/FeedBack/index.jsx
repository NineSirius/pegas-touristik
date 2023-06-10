import Image from "next/image";
import styles from "./feedback.module.sass";

const FeedbackCards = () => {
  return (
    <>
      <div className={styles.info_customer_feedback}>
        <h3 className={styles.feedBack_title}>Отзывы наших клиентов</h3>
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
                Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices nisl
                mattis id aliquet sagittis nulla. Tempus urna pharetra amet odio
                pellentesque. Aliquam eget bibendum vel turpis mauris dui eu
                lobortis id.{" "}
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
                Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices nisl
                mattis id aliquet sagittis nulla. Tempus urna pharetra amet odio
                pellentesque. Aliquam eget bibendum vel turpis mauris dui eu
                lobortis id.{" "}
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
                Lorem ipsum dolor sit amet consectetur. Quis arcu ultrices nisl
                mattis id aliquet sagittis nulla. Tempus urna pharetra amet odio
                pellentesque. Aliquam eget bibendum vel turpis mauris dui eu
                lobortis id.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCards;
