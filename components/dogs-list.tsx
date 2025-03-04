"use client"
import { Dog } from '@/interfaces'
import React from 'react'
import DogCard from './dog-card';

interface DogsListProps {
    dogs: Dog[]
}

export default function DogsList({ dogs }: DogsListProps) {
    localStorage.setItem("dogs", JSON.stringify(dogs));

    return (
        <section>
            {/* rendera hundar från vårt api */}
            <p>dog list</p>
            {dogs.map((dog) => <DogCard key={dog.id} dog={dog} />)}
        </section>
    )
}
