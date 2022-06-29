import React, { useState, useEffect } from 'react'

export default function Fapp() {
    const [name, setName] = useState(undefined)

    useEffect(
        () => {
            if (name === undefined) {
                setName(sessionStorage.getItem('name') || '')
            } else {
                sessionStorage.setItem('name', name)
            }
        },
        [name]
    )

    return (
        <>
            Name: <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            Olá {name}
        </>
    )
}
