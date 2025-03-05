import React from 'react'
import CarCard from '../components/CarCard';
import carType from '../services/carType';

export default function page() {

    const testCars: carType[] = [
        { brand: "BMW", name: "M4", color: "Blue", engine: { hp: 503, serialNumber: 101 } },
        { brand: "Audi", name: "RS7", color: "Red", engine: { hp: 591, serialNumber: 202 } },
        { brand: "Porsche", name: "911 Turbo S", color: "Silver", engine: { hp: 640, serialNumber: 303 } },
        { brand: "Lamborghini", name: "Huracán", color: "Green", engine: { hp: 631, serialNumber: 404 } },
        { brand: "Ferrari", name: "F8 Tributo", color: "Yellow", engine: { hp: 710, serialNumber: 505 } },
        { brand: "Rolls-Royce", name: "Cullinan", color: "White", engine: { hp: 563, serialNumber: 606 } }
    ];

    return (
        <div>
            <div>
                {testCars.map((car) => (
                    <CarCard car={car} key={car.name} />
                ))}
            </div>
        </div>
    )
}
