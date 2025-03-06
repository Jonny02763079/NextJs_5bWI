"use client"
import React, { useState } from 'react'
import carType from '../services/carType'

type props = {
    car: carType
}

export default function CarCard({ car }: props) {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div
            style={{
                margin: '2em',
                borderStyle: 'solid',
                padding: '2em',
                backgroundColor: isActive ? 'lightcoral' : 'aliceblue',
                cursor: 'pointer'
            }}
            onClick={() => setIsActive(!isActive)}
        >
            <h1>{car.name}</h1>
            <div>{car.brand}</div>
            <div>{car.color}</div>
            <div>{car.engine.hp}</div>
            <div>{car.engine.serialNumber}</div>
        </div>
    )
}
