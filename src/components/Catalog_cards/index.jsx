"use client";

import Image from "next/image";
import styles from "./catalog.module.sass";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Navigation } from "swiper";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

const Catalogs = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      "<div className={styles.swiper-slide}>Slide " +
        --prependNumber +
        "</div>",
      "<div className={styles.swiper-slide}>Slide " +
        --prependNumber +
        "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      "<div class={styles.swiper-slide}>Slide " + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      "<div class={styles.swiper-slide}>Slide " + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      "<div class={styles.swiper-slide}>Slide " + ++appendNumber + "</div>",
      "<div class={styles.swiper-slide}>Slide " + ++appendNumber + "</div>",
    ]);
  };
  return (
    <>
      <h3 className={styles.post_title_catalog}>Каталог стран и отелей</h3>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog1.png"
              width={290}
              height={250}
              alt="img_catlog"
              className={styles.card__image}
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
                  <span className={styles.icon_number}>+ 30</span>
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
                  <span className={styles.icon_number}>26 %</span>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog2.png"
              width={290}
              height={250}
              alt="img_catlog"
              className={styles.card__image}
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
                  <span className={styles.icon_number}>+ 36</span>
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
                  <span className={styles.icon_number}>27 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>Турция</h4>
              <h4 className={styles.catalog_title}>18 244₽</h4>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog3.png"
              width={290}
              height={250}
              alt="img_catlog"
              className={styles.card__image}
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
                  <span className={styles.icon_number}>+ 32</span>
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
                  <span className={styles.icon_number}>27 %</span>
                </div>
              </div>
            </div>
            <div className={styles.catalog_titles}>
              <h4 className={styles.catalog_title}>Тайланд</h4>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.catalog_card}>
            <Image
              src="/images/img_catalog4.png"
              width={290}
              height={250}
              alt="img_catlog"
              className={styles.card__image}
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
        </SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
};

export default Catalogs;
