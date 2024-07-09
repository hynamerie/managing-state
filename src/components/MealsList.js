import { useState } from "react";
import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    // const todayMeals = () => [
    //     { name: "Baked Beans", calories: 200, id: 1 },
    //     { name: "Grilled Veggies", calories: 80, id: 2 },
    //     { name: "Soup", calories: 100, id: 3 }
    // ]
    // const [meals, setMeals] = useState(todayMeals);

    const { meals } = useMealsListContext();
    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
}

export default MealsList;