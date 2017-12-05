import React from "react";

const SubmitButton = props => (
    <div>
        <button id="searchformbtn" onClick={props.handleFormSubmit}>Submit</button>
    </div>
)
export default SubmitButton;