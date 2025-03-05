import React from 'react'
import carType from '../services/carType'
import TruckCard from '../components/TruckCard'
import TruckCardList from '../components/TruckCardList'

export default function page() {

    const testTrucks: carType[] = [
        { brand: "Mercedes-Benz", name: "Actros", color: "Blue", engine: { hp: 530, serialNumber: 701 }, trail: "Tanker" },
        { brand: "Scania", name: "R 730", color: "Red", engine: { hp: 730, serialNumber: 802 }, trail: "Flatbed" },
        { brand: "Volvo", name: "FH16", color: "Silver", engine: { hp: 750, serialNumber: 903 }, trail: "Refrigerated" },
        { brand: "MAN", name: "TGX", color: "Black", engine: { hp: 640, serialNumber: 187 }, trail: "gmoand" },
    ]

    return (
        <div>
            <TruckCardList trucks={testTrucks}></TruckCardList>
        </div>
    )
}
