import React from 'react'
import carType from '../services/carType'
import CarCard from './CarCard'

type props = {
    cars: carType[]
}

export default function CarCardList({ cars }: props) {
    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
            }}>
                {cars.map((car) => (
                    <CarCard car={car} key={car.name} />
                ))}
            </div>
        </div>
    )
}
