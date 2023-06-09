import Image from "next/image";
import styles from "./catalog.module.sass";
import { BsArrowRight } from "react-icons/bs";

const Catalogs = () => {
  return (
    <>
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
              Египет — страна с длинной и захватывающей историей. Большая часть
              ее территории покрыта пустыней, вся жизнь....
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
              Египет — страна с длинной и захватывающей историей. Большая часть
              ее территории покрыта пустыней, вся жизнь....
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
              Египет — страна с длинной и захватывающей историей. Большая часть
              ее территории покрыта пустыней, вся жизнь....
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
              Египет — страна с длинной и захватывающей историей. Большая часть
              ее территории покрыта пустыней, вся жизнь....
            </span>
            <a href="#" className={styles.link_catalog}>
              Подробнее
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogs;
