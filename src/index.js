import React, { useState } from "react"
import ReactDOM from "react-dom/client";

function CreateResponse({ content }) {
    return <h3>Chosen color: {content}</h3>
}

function Comp() {
    const [chosenColor, setChosenColor] = useState("red");
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setChosenColor(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <select value={chosenColor} onChange={handleChange}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
                <input type="submit" />
            </form>
            {submitted && <CreateResponse content={chosenColor} />}
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Comp />)