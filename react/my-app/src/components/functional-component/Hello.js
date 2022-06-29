import React from 'react'

const Hello = ({ text, children }) => (
    <>
        <h1>{text}</h1> 
        {children}
    </>
)

export default Hello