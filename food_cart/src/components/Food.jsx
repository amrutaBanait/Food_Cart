import React from "react";
import  {useState} from "react";
import {data} from "../Data/data";

function Food(){
    const [foods, setFoods] = useState(data)
    return (
        <div>Food</div>
    )
}

export default Food;