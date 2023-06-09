import styles from "./Blue.module.sass";

const MainBlueBlog = () => {
  return (
    <>
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
    </>
  );
};

export default MainBlueBlog;
