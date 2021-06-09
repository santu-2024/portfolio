import React, { useState } from 'react';


const Tempapp = () => {
    const [city, setCity]= useState('pune');
    return (
        <div>
            <div className="box">
                <div className='inputdata'>
                    <input
                    type='search'
                    className='inputfield'
                    onChange={(e)=>{

                    }}/>
                </div>
            </div>
            <div className='info'>
                <h2 className='location'>
                    {city}
                </h2>
                <h1 className='temp'>

                </h1>
            </div>
        </div>
    )
}

export default Tempapp
