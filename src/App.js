import React from "react";
import MealsList from "./components/MealsList";
import MealsProvider from "./providers/MealsProvider";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import "./App.css";

function App() {
   
   // FRUITS PROVIDERS
   const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'banana', id: 2},
      {fruitName: 'plum', id: 3},
   ]);

   return (
      <>
      <div className="meal-providers">
         <MealsProvider>
            <MealsList/>
            <Counter/>
         </MealsProvider>
      </div>
      <section className="fruit-providers">
         <div className="fruit-providers">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits} />
            <FruitsCounter fruits={fruits} />
         </div>
      </section>
      </>
   )
}

export default App;