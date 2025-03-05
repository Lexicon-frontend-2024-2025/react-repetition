"use client"; // gör om till en client component
import { Metadata } from 'next';
import { Dog } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { title } from 'process';

// export function generateMetaData(): Metadata {
//     const params = useParams();
//     const dogID = params.id; // id - den kommer från URL:en
//     return {
//         title: `Hund ${dogID}`,
//         description: `Info om hunden ${dogID}`
//     }
// }

export default function DogPage() {
    const [dog, setDog] = useState<Dog | null>(null);
    const [dogs, setDogs] = useState<Dog[] | null>(null);
    const params = useParams();
    const dogID = params.id; // id - den kommer från URL:en
    // hämta korrekt hund från localstorage
    useEffect(() => {
        const lsDogs = localStorage.getItem("dogs");
        if (lsDogs) {
            setDogs(JSON.parse(lsDogs));
            const dogs: Dog[] = JSON.parse(lsDogs);
            const foundDog = dogs.find((d) => d.id.toString() === dogID);
            console.log(foundDog);
            setDog(foundDog || null);
        }
    }, [dogID]);

    const prevDogURL = () => {
        const currentId = { ...dog }.id;
        let prevId = 0;
        if (currentId) {
            prevId = currentId - 1;
        }
        if (currentId && prevId < 0) {
            prevId = 0;
            console.log("kan inte bli mindre än 0");
        }

        let idString = prevId.toString()
        let url = "/dogs/" + idString;
        console.log(url);
        
        return url;
    };


    const nextDogURL = () => {
        const currentId = { ...dog }.id;
        let nextId = 0;
        // vi vill ha ett maxtak för vår next-knapp
        const dogsAmount = dogs?.length;
        if (currentId) {
            nextId = currentId + 1
        }
        if (dogsAmount && nextId === dogsAmount) {
            nextId = dogsAmount - 1;
        }
        return `/dogs/${nextId}`;
    };

    return (
        <section>
            <Image
                src={dog?.img ? dog?.img : "/cooldog.png"}
                alt='profilbild på hunden'
                width={300}
                height={300}
            />
            <article>
                <h1>{dog?.name}</h1>
            </article>
            <section>
                <Link href={prevDogURL()}>PREV</Link>
                <Link href={nextDogURL()}>NEXT</Link>
            </section>
        </section>
    )
}
