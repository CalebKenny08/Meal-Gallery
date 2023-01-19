import React, { useState } from 'react'

function Tinker() {
    const bestFood = 'eba'

    function deleteFood(food) {
        alert(food) 
    }

    return (
        <div>
            <h1>Tinker App</h1>

            <button onClick={() => deleteFood(bestFood)}>testing</button>
        </div>
    )
}

export default Tinker