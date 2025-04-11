import { use, useState } from "react";

const IngredientList = (props) => {

    const handleClick = (ingredient) => {
        props.addToBurger({
            name: ingredient.name, 
            color: ingredient.color,
        });
    }

    return (
    <>
    <ul>{props.availableIngredients.map ((ingredient, index) => (
    <li style={{backgroundColor: ingredient.color}} key={index}>
        {ingredient.name}     
        <button 
        style={{color: "white"}} 
        onClick={() => handleClick(ingredient)}
        >+</button></li>
    ))}
    </ul>
    </>
    )
}

export default IngredientList;