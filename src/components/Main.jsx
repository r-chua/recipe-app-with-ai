import { useEffect, useRef, useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])
    const [showRecipe, setShowRecipe] = useState(false)
    const [recipeFromAI, setRecipeFromAI] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipeFromAI !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipeFromAI]) 

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipeFromAI(recipeMarkdown)
        setShowRecipe(prev => !prev)
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
                getRecipe={getRecipe}
                
            /> : null }
            
            {showRecipe ? <ClaudeRecipe
                recipeFromAI={recipeFromAI}
                ref={recipeSection}
            /> : null}
            
        </main>
    )
}