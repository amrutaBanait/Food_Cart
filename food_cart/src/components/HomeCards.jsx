import React from "react";

function HomeCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
              {/* Card */}
      <div className="rounded-xl relative">
         {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out,Food</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white rounded-xl p-1 rounded text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img  className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">Pizza Bites</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white rounded-xl p-1 rounded text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
         src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/pizza-bread-with-tomatoes-and-rocket-sliced-on-a-wooden-board-ludger-rose.jpg" alt="" />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 
        rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">Burger Fav's</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white rounded-xl p-1 rounded text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
         src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/chicken-burger-with-chips-garlick-ian.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomeCards;