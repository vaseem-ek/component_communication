
import React, { useState } from "react";

const Child = ({ updateParentState }) => {
  const [childState, setChildState] = useState("");

  const handleInputChange = (e) => {
    setChildState(e.target.value);
  };

  const sendDataToParent = () => {
    updateParentState(childState);
    setChildState("")
  };

  return (
    <div className="d-flex">
      <input
      className="form-control p-2"
        type="text"
        value={childState}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button className="btn btn-success ms-1" onClick={sendDataToParent}>Update</button>
    </div>
  );
};

export default Child;
