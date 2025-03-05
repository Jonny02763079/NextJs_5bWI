import Link from 'next/link'
import React from 'react'

export default function NavigationHeader() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: '2em', backgroundColor: "royalblue", height: '4em', alignItems: 'center', padding: '1em', fontWeight: 'bold' }}>
                <Link href="/"><h1>Home</h1></Link>
                <Link href="/cars"><h1>Cars</h1></Link>
                <Link href="/trucks"><h1>Trucks</h1></Link>
            </div>
        </div>
    )
}
