import React from "react";

const ChargeInput = props => (
  <div>
    <input 
      type="text"
      onChange={props.handleInputChange}
      name="charge"
      value={props.charge}
      placeholder="Charge"
      className="span2">    
  </input>
</div>
)
export default ChargeInput;