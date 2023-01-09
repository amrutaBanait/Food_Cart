import React from "react";
import { categories } from "../Data/data";

function Category(){
    return (
        <div>
          <h1>
       TopRated Food Items
         </h1>        
         {/*Mapping of Items*/}

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gray-100 cursor-pointer p-4 flex  items-center 
              border shadow-lg justify-between rounded-lg  hover:scale-105 duration-300"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img
                className="w-20 h-20 object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
          )
        }
        )
        }
      </div>
        </div>

    )
}



export default Category;