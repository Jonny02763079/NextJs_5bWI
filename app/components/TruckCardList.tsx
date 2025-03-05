import React from 'react'
import type carType from '../services/carType'
import TruckCard from './TruckCard';

type Props = {
    trucks: carType[];
}

export default function TruckCardList({ trucks }: Props) {
    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
            }}>
                {trucks.map((truck) => (
                    <TruckCard truck={truck} key={truck.name} />
                ))}
            </div>
        </div>
    )
}
