import IngredientList from './components/IngredientsList';
import BurgerStack from './components/BurgerStack';
import { useState } from "react";
import './App.css';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (newIngredient) => {
    setStack((prevStack) => ([...prevStack, newIngredient]));
  }

  const removeFromBurger = (ingredient) => {
    const index =stack.indexOf(ingredient);
    const newStack = [...stack];
    newStack.splice(index, 1);
    setStack(newStack);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger} />
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
