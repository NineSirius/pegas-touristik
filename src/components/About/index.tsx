import styles from "./About.module.sass";
import {} from "../../../public/background-about.png";
import MainBlueBlog from "../Main_order_blue";
const About = () => {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.card}>
          <span className={styles.title}>
            Туристическое Агентство «КАМ АНД ФЛАЙ» - PEGAS Touristik
          </span>
          <p className={styles.text}>
            Официальное представительство PEGAS Touristik Туристическое
            Агентство «КАМ <br /> АНД ФЛАЙ», работаем с 2008 года как
            официальная точка продаж туристических <br /> услуг. Ежегодно мы
            входим в ТОП 10 агентств по продажам туристических услуг, являемся{" "}
            <br /> лидерами продаж, а соответственно лидерами самых низких цен и
            самого <br />
            качественного отдыха. <br /> Мы предлагаем отдых в самых красивых
            местах: Турции, России, Египта, Туниса, <br /> Индии, Таиланда,
            Индонезии, Иордании, Израиля, Кипра, Кубы, ОАЭ, Вьетнама, <br />
            Мексики, Болгарии, Мальдив, Грузии, Азербайджана, Армении,
            Узбекистана, <br /> Казахстана, Танзании, Венесуэлы и Ямайки.
          </p>
        </div>
        <div className={styles.card}>
          <span className={styles.title}>
            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ КАМ АНД ФЛАЙ(сокращенное
            наименование ООО КАМ АНД ФЛАЙ)
          </span>
          <p className={styles.text}>
            ИНН 7706692500КПП: 770501001Юридический адрес:115114 г. Москва,
            Кожевническая ул. д. 7, стр1Фактический адрес: 115114 г. Москва,
            Кожевническая ул. д. 7, стр1Р/С № 40702810938000000137в ПАО Сбербанк
            г. МоскваК/С № 30101810400000000225БИК 044525225ОГРН:
            1087746758450ОКПО: 86577708ОКВЭД: 79.1ОКАТО:45286596000
          </p>
          <div className={styles.wrapper}>
            <div className={styles.our_tel}>
              <span>Телефон/факс: тел.:</span>
              <a className={styles.link} href="tel:+74956415138">
                +7 (495) 641-51-38
              </a>

              <a className={styles.link} href="tel:+79013844303">
                +7 (901) 384-43-03
              </a>
            </div>
            <div className={styles.our_mail}>
              <span>Наша почта:</span>
              <a className={styles.link} href="mailto:come-fly@mail.ru">
                come-fly@mail.ru
              </a>
              <a className={styles.link} href="mailto:kukrus.pegas@mail.ru ">
                kukrus.pegas@mail.ru
              </a>
              <a className={styles.link} href="mailto:kukrus.pegas@yandex.ru">
                kukrus.pegas@yandex.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blueBlog}>
        <MainBlueBlog />
      </div>
    </>
  );
};

export default About;
