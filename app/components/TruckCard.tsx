import React, { useState } from 'react'
import carType from '../services/carType'

type props = {
    truck: carType
}

export default function truckCard({ truck }: props) {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div style={{ margin: '2em', borderStyle: 'solid', padding: '2em', backgroundColor: 'aliceblue' }}>
            <h1>{truck.name}</h1>
            <div>{truck.brand}</div>
            <div>{truck.color}</div>
            <div>{truck.engine.hp}</div>
            <div>{truck.engine.serialNumber}</div>
            <div>{truck.trail}</div>
        </div>
    )
}
