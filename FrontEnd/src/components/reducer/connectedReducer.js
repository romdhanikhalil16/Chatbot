import React from "react";

const connectedReducer = (state = false, action) => {
  if (action.type === "CONNECT") {
    return action.payload;
  }
  return 0;
};

export default connectedReducer;
