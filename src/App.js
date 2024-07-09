import React from "react";
import MealsList from "./components/MealsList";
import MealsProvider from "./providers/MealsProvider";
import Counter from "./components/Counter";
import "./App.css";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

function App() {

   //FRUITS PROVIDER
   const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'banana', id: 2},
      {fruitName: 'plum', id: 3},
   ]);

   return (
      <div>
         <MealsProvider>
            <MealsList/>
            <Counter/>
         </MealsProvider>

         <section className="fruit-provider">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits} />
            <FruitsCounter fruits={fruits} />
         </section>

      </div>
   )
}

export default App;