"use client";
import { Dog } from '@/interfaces'
import Image from 'next/image';
import React from 'react'
import styles from "./dog-card.module.css";
import { useRouter } from 'next/navigation';

interface DogCardProps {
    dog: Dog;
}

export default function DogCard({dog}: DogCardProps) {
  const router = useRouter();
  const goToDogPage = () => {
    // navigera till /[id]
    router.push(`/dogs/${dog.id}`);
  };

  return (
    <article onClick={goToDogPage} className={dog.present ? styles.present : styles.absent}>
        <Image
            src={dog.img ? dog.img : "/cooldog.png"}
            alt="Profilbild"
            height={100}
            width={100}
        />
        <h3>{dog.name}</h3>
    </article>
  )
}
