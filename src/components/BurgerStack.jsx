const BurgerStack = (props) => {

    const handleClick = (ingredient) => {
        props.removeFromBurger(ingredient);
    }

    return <ul>{props.stack.map( (ingredient, index) => (
        <li style={{backgroundColor: ingredient.color}}key={index}>
            {ingredient.name}
            <button style={{color: "white"}}
            onClick={()=> handleClick(ingredient)}
            >X</button>
        </li>
    ))}</ul>
}

export default BurgerStack;