import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({recipeFromAI, recipeSection}) {
    return (
        <section className="suggested-recipe-container" aria-live="polite" ref={recipeSection}>
            <h2>The Chef Recommends:</h2>
            <ReactMarkdown children={recipeFromAI} />
        </section>
    )
}

