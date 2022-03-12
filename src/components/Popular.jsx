import React, { useEffect, useRef } from "react";

function Popular(props) {
  
  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    console.log(data);
  }

  return <div>Popular</div>;
}

export default Popular;
