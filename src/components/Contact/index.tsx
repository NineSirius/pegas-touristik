import style from "./style.module.sass";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <span className={style.card__title}>
          «КАМ АНД ФЛАЙ» - PEGAS Touristik
        </span>
        <div className={style.contact}>
          <div className={style.contact__data}>
            <p className={style.contact__data__title}>
              Телефон/факс: тел.:
              <span className={style.contact__data__span}>
                Офис метро Павелецкая:
              </span>
            </p>
            <div className={style.contact__data__tel}>
              <a
                className={style.contact__data__tel__link}
                href="tel:+7 (499)325-57-88"
              >
                +7 (499)325-57-88
              </a>
              <a
                className={style.contact__data__tel__link}
                href="tel:+7 (909)119-35-65"
              >
                +7 (909)119-35-65
              </a>
            </div>
            <div className={style.contact__data__tel}>
              <p className={style.contact__data__title}>Наша почта:</p>
              <a
                className={style.contact__data__tel__link}
                href="mailto:kukrus.pegas@mail.ru"
              >
                kukrus.pegas@mail.ru
              </a>
              <a
                className={style.contact__data__tel__link}
                href="mailto:kukrus.pegas@yandex.ru"
              >
                kukrus.pegas@yandex.ru
              </a>
            </div>
          </div>
          <div className={style.contact__data}>
            <p className={style.contact__data__title}>
              Телефон/факс: тел.:
              <span className={style.contact__data__span}>
                Офис метро раменки:
              </span>
            </p>
            <div className={style.contact__data__tel}>
              <a
                className={style.contact__data__tel__link}
                href="tel:+7 (495)641-51-38"
              >
                +7 (495)641-51-38
              </a>
              <a
                className={style.contact__data__tel__link}
                href="tel:+7 (926)535-52-96"
              >
                +7 (926)535-52-96
              </a>
            </div>
            <div className={style.contact__data__tel}>
              <p className={style.contact__data__title}>Наша почта:</p>
              <a
                className={style.contact__data__tel__link}
                href=" mailto:come-fly@mail.ru"
              >
                mailto:come-fly@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className={style.container__map}
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11701.382479784783!2d74.55804495!3d42.84443485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sru!2skg!4v1686035319458!5m2!1sru!2skg"
        height={692}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
