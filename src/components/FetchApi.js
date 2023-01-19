import React, { useEffect, useState } from 'react'
import axios from "axios"

function FetchApi() {
    const [meals, setMeals] = useState([])
    const [selectedMeal, setSelectedMeals] = useState('')

    async function getMeals() {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response) => {
                console.log(response.data)
                setMeals(response.data.meals)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getMeals()
    }, [])

    const deleteMeal = (mealId) => {
        const filteredMeal = meals.filter((meal) => {
            return meal.idMeal !== mealId
        })
        setMeals(filteredMeal)
    }

    const clickedItem = (meal) => {
        setSelectedMeals(meal)
    }


    return (
        <div className='parent'>
            <div className='container'>
                {
                    meals.map((meal, index) => {
                        return (
                            <div key={index} className="item">
                                <img src={meal.strMealThumb} alt={meal.strMeal} width={200} onClick={() => { clickedItem(meal) }} />
                                <div className='details'>
                                    <h5>{meal.idMeal}</h5>
                                    <h4>{meal.strMeal}</h4><br />
                                    <button onClick={() => deleteMeal(meal.idMeal)}>Delete Meal</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='sidebar'>
                {selectedMeal.strMealThumb ? <div><img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} /> <h5 className='view-msg'> <big style={{ color: "rgb(254,76,47)" }}>{selectedMeal.strMeal}</big> <i>Seafood is any form of sea life regarded as food by humans, prominently including fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms.</i></h5></div> : <h4 style={{ textAlign: "center", marginTop: "200px" }}>Select An Item To View</h4>}

            </div>
        </div>
    )
}

export default FetchApi