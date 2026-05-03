import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import Image from 'next/image';
import logo from "@/assets/suncart.png";

const Navbar = () => {
    return (
        <div className='bg-[#F9F7F2] shadow-sm'>
            <div className="md:w-10/12 mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Navlink href={'/'}>Home</Navlink></li>
        <li>
         <Navlink href={'/products'}>Products</Navlink>
        </li>
        <li> <Navlink href={'/my-profile'}>My Profile</Navlink></li>
      </ul>
    </div>
   <Image 
  src={logo} 
  alt="logo" 
  width={400} 
  height={100}
  className="h-14 w-auto object-contain"
/>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <h2 className='text-[#FF9F1C] text-3xl font-bold hidden lg:flex'>SunCart</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Navlink href={'/'}>Home</Navlink></li>
      <li>
         <Navlink href={'/products'}>Products</Navlink>
      </li>
      <li><Navlink href={'/my-profile'}>My Profile</Navlink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='btn bg-[#FF9F1C] text-white rounded-full'>
        <Link href={'/login'}>Login</Link>
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;