import Image from "next/image";
import styles from "./Down.module.sass";
import { BsArrowRight } from "react-icons/bs";

const Down = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <h3 className={styles.post_title_catalog}>Каталог стран и отелей</h3>
        <div className={styles.catalog_cards}>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog1.png"
              width={290}
              height={250}
              alt="img_catlog"
            />
            <div className={styles.weather_blog}>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/sun.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>+ 25</span>
                </div>
              </div>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/icon2.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>20 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>Египет</h4>
              <h4 className={styles.catalog_title}>27 328₽</h4>
            </div>
            <div className={styles.catalog_desc}>
              <span className={styles.card_span}>
                Египет — страна с длинной и захватывающей историей. Большая
                часть ее территории покрыта пустыней, вся жизнь....
              </span>
              <a href="#" className={styles.link_catalog}>
                Подробнее
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog2.png"
              width={290}
              height={250}
              alt="img_catlog"
            />
            <div className={styles.weather_blog}>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/sun.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>+ 25</span>
                </div>
              </div>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/icon2.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>20 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>Турция</h4>
              <h4 className={styles.catalog_title}>21 444₽</h4>
            </div>
            <div className={styles.catalog_desc}>
              <span className={styles.card_span}>
                Египет — страна с длинной и захватывающей историей. Большая
                часть ее территории покрыта пустыней, вся жизнь....
              </span>
              <a href="#" className={styles.link_catalog}>
                Подробнее
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog3.png"
              width={290}
              height={250}
              alt="img_catlog"
            />
            <div className={styles.weather_blog}>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/sun.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>+ 25</span>
                </div>
              </div>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/icon2.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>20 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>ОАЭ</h4>
              <h4 className={styles.catalog_title}>21 444₽</h4>
            </div>
            <div className={styles.catalog_desc}>
              <span className={styles.card_span}>
                Египет — страна с длинной и захватывающей историей. Большая
                часть ее территории покрыта пустыней, вся жизнь....
              </span>
              <a href="#" className={styles.link_catalog}>
                Подробнее
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog4.png"
              width={290}
              height={250}
              alt="img_catlog"
            />
            <div className={styles.weather_blog}>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/sun.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>+ 25</span>
                </div>
              </div>
              <div className={styles.sun_blog}>
                <div>
                  <Image
                    src="/images/icon2.png"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
                <div>
                  <span className={styles.icon_number}>20 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>Тайланд</h4>
              <h4 className={styles.catalog_title}>21 444₽</h4>
            </div>
            <div className={styles.catalog_desc}>
              <span className={styles.card_span}>
                Египет — страна с длинной и захватывающей историей. Большая
                часть ее территории покрыта пустыней, вся жизнь....
              </span>
              <a href="#" className={styles.link_catalog}>
                Подробнее
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
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
