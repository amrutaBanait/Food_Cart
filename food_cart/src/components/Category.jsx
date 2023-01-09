import React from "react";
import { categories } from "../Data/data";

function Category(){
    return (
        <div>
          <h1>
       TopRated Food Items
         </h1>        
         {/*Mapping of Items*/}

       <div>
        {categories.map((item) => {
          return (
            <div
              key={item.id}
            >
              <h2>{item.name}</h2>
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
          );
        })}
      </div>
        </div>

    )
}



export default Category;