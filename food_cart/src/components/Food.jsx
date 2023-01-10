import React from "react";
import  {useState} from "react";
import {data} from "../Data/data";

const Food = () => {
    //console.log(data);

    const [foods, setFoods] = useState(data)
    
    
  //   Filter Type burgers/pizza/etc

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

     //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  
    return(
        <div>
            <h1>
        Top Rated Menu Items
      </h1>
        </div>
    )
}

export default Food;

