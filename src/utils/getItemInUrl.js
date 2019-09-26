import React from "react";

export const getIdInUrl = ({ location }) => {
  const regex = /[0-9]*$/g;
  let id;
  let errorId;
  if (location.search !== "") {
    [id] = regex.exec(location.search);
  } else {
    errorId = <>une erreur c'est produite</>;
  }

  console.log(id)
  return id;
};

export const getNameInUrl = ({ location }) => {
    const regex = /(?<=\=).*/;
    let name;
    let errorId;
    console.log(location)
    if (location.search !== "") {
        
      [name] = regex.exec(location.search);
     
    } else {
      errorId = <>une erreur c'est produite</>;
    }
    return name;
  };
