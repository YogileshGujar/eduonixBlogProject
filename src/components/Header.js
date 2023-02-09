import React from 'react'
import { Navbar,NavbarBrand,Input } from 'reactstrap'

export default function Header() {
  let auth=localStorage.getItem('userEmailId');
  console.log(auth)
  return (
    <>
    {
    auth ?
    <Navbar className="my-0" dark  sticky="top">
    <NavbarBrand href="/">
      
      BlogsWorld
    </NavbarBrand>
    <Input  className="search"style={{ width: "40%" }}
     placeholder="Search Posts"
    //  onChange={data=(e)=>e.target.value}
  />
  </Navbar>
   :
    
    <Navbar className="my-0" dark>
    <NavbarBrand >
     {/* <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      /> */}
      BlogsForWorld
    </NavbarBrand>
  </Navbar>
  
     }
     </>
  )
}
