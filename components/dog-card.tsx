"use client";
import { Dog } from '@/interfaces'
import Image from 'next/image';
import React from 'react'
import styles from "./dog-card.module.css";

interface DogCardProps {
    dog: Dog;
}

export default function DogCard({dog}: DogCardProps) {
  return (
    <article className={dog.present ? styles.present : styles.absent}>
        <Image
            src={dog.img}
            alt="Profilbild"
            height={100}
            width={100}
        />
        <h3>{dog.name}</h3>
    </article>
  )
}
