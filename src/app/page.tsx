import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1 className={styles.title}>Github Actions</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
