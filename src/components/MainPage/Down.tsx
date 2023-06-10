import Image from "next/image";
import styles from "./Down.module.sass";
import Catalogs from "../Catalog_cards";
import CardNews from "../News_cards";
import MainBlueBlog from "../Main_order_blue";
import FeedbackCards from "../FeedBack";

const Down = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <Catalogs />
        <CardNews />
        <MainBlueBlog />
        <FeedbackCards />
      </div>
    </div>
  );
};

export default Down;
