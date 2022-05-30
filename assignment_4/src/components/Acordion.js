import React from 'react'

const Acordion = ({ titile, active, setActive}) => {
    return (
        <div className='acordion'>
        <div className='container'>
            <p>{title}</p>
            <span onClick={() => setActive(title)}>
                {active === titile}
                </span>
        </div>
        </div>
    )
}
export default Acordion

    

