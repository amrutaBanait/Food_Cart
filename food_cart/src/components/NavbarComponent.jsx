import React from 'react';
import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";


function NavbarComponent () {
  const [nav, setNav] = useState(false)
  return (
    <div>
{/* left side of navigation bar */}
<div>
  <div>
    <AiOutlineMenu size={30} />
  </div>
</div>
    </div>
  )
}


export default NavbarComponent ;
