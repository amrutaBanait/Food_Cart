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
      
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
        
          
      </div>


        </div>
    )
}

export default Food;

