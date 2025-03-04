import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>VÄLKOMMEN TILL DOGGY DAYCARE</h1>
      <Link href="/dogs">VÅRA HUNDAR</Link>
      <Image
        src="/cooldog.png"
        alt="golden retriever med solglasögon"
        width={300}
        height={450}
      />
    </main>
  )
}