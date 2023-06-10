"use client";

import styles from "./up.module.sass";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarFill } from "react-icons/bs";
import { useState } from "react";
import Banner from "../Banner";

const Up = () => {
  const [country, setCountry] = useState<any>([
    {
      title: "Бишкек",
    },
    {
      title: "Токмок",
    },
    {
      title: "Ош",
    },
  ]);

  return (
    <>
      <Banner
        title="Туристическое Агентство «КАМ АНД ФЛАЙ» - PEGAS Touristik"
        desc="Официальное представительство PEGAS Touristik (Туристическое Агентство «КАМ АНД ФЛАЙ», работаем с 2008 года как официальная точка продаж туристических услуг."
      />
      <div className={styles["select"]}>
        <div className={styles["select--title"]}>
          <div>
            <h3>Выбирите свой отдых</h3>
            <p>Подбери оптимальный тур в одной из стран.</p>
          </div>
          <button className={styles.active}>Подбор тура</button>
          <button> Туры по россии</button>
          <button>Бронироование отелей</button>
        </div>
        <div className={styles["select--search"]}>
          <div className={styles["select--input"]}>
            <ImLocation2 />
            <input
              autoComplete="on"
              list="xz"
              placeholder="Выбирите место"
              type="text"
            />
          </div>
          <datalist id="xz">
            {country.map((data: any) => {
              return <option value={data.title} key={Math.random()}></option>;
            })}
          </datalist>
          <div>
            <div className={styles["select--input"]}>
              <BsFillCalendarFill />
              <label htmlFor="to">
                Заезд {""}
                <input type="date" id="to" />
              </label>
            </div>
            <hr />
            <div className={styles["select--input"]}>
              <BsFillCalendarFill />
              <label htmlFor="end">
                Отъезд {""}
                <input type="date" id="end" />
              </label>
            </div>
            <button>Проверить номер</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Up;
