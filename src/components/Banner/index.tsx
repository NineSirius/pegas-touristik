import React from "react";
import styles from "./style.module.sass";
interface props {
  title: string;
  desc: string;
}
const Banner: React.FC<props> = ({ title, desc }) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Banner;
