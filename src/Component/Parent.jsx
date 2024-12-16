import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
  const [parentState, setParentState] = useState("Initial Parent State");

  const handleChildData = (data) => {
    setParentState(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100vh"}}>
      <h1>Parent Component</h1>
      <div className="d-flex justify-content-center flex-column">
      <p>Parent State: <span className="text-danger fw-bold">{parentState}</span></p>
      <Child updateParentState={handleChildData} />
      </div>
      
    </div>
  );
};

export default Parent;