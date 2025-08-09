import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = useState(false)


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function showRecipe(){
        setRecipeShown(prev => !prev)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 ? 
            <IngredientsList 
                ingredients={ingredients}
                showRecipe={showRecipe}
            /> : null }

            {recipeShown ? <ClaudeRecipe /> : null}
            
        </main>
    )
}