import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({recipeFromAI}) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>The Chef Recommends:</h2>
            <ReactMarkdown children={recipeFromAI} />
        </section>
    )
}

