import React from "react";

const SentenceRender = props => (
    <div>
        <p>_____________</p>
        <h4>Your story</h4>
        <p>{ props.nameInterpreter(props.defendant) } of { props.cityInterpreter(props.uninterpretedCity) } was arrested on charges of { props.chargesInterpreter(props.chargeOne) } on { props.weekDayInterpreter(props.uninterpretedDate) }, according to booking logs.</p>
       
    </div>
)
export default SentenceRender;