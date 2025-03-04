import DogsList from "@/components/dogs-list";
import styles from "./page.module.css";
import { Dog } from "@/interfaces";

export default async function DogsPage() {
    // Hämta data med fetch från API i page (utan use client, useEffect och useState)
    const res = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data: Dog[] = await res.json();
    // lägga till id för alla hundar
    data.forEach((d:Dog, i:number) => d.id = i);
    
    return (
        <main className={styles.main}>
            <h1>Våra hundar</h1>
            <section className={styles.searchOptions}>
                <button>Sök</button>
                <button>Filter</button>
            </section>
            <DogsList dogs={data} />
        </main>
    )
}
