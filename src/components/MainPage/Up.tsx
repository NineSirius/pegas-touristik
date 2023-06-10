"use client";

import styles from "./up.module.sass";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

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
    <div className={styles["select"]}>
      <div className={styles["select--title"]}>
        <div>
          <h3>Выбирите свой отдых</h3>
          <p>Подбери оптимальный тур в одной из стран.</p>
        </div>
        <button>Подбор тура</button>
        <button> Туры по россии</button>
        <button>Бронироование отелей</button>
      </div>
      <div className={styles["select--search"]}>
        <div className={styles["select--input"]}>
          <ImLocation2 />
          <input autoComplete="on" list="xz" type="text" />
        </div>
        <datalist id="xz">
          {country.map((data: any) => {
            return <option value={data.title} key={Math.random()}></option>;
          })}
        </datalist>
        <div>
          <div className={styles["select--input"]}>
            <BsFillCalendarFill />
            <input type="date" />
          </div>
          <hr />
          <div className={styles["select--input"]}>
            <BsFillCalendarFill />
            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Up;
