import React from 'react';
import pic from "../assets/images/avatar-jessica.jpeg"

export default function Card() {
  return (
    <div className='p-[2rem] bg-[#1f1f1f] rounded-[0.7rem]'>
      <div className="inside  flex flex-col justigy-center items-center w-[20rem] h-[30rem] ">
        <img src={pic} alt="pic" className='w-[6rem] h-[6rem] rounded-full'/>
        <p>Jessica Randall</p>
  <p>London, United Kingdom</p>
  <p>"Front-end developer and avid reader."</p> 

  <button className='bg-[#333333] hover:bg-[#c5f82a] transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] '>GitHub</button>
  <button className='bg-[#333333] hover:bg-[#c5f82a] transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] '>Frontend Mentor</button>
  <button className='bg-[#333333] hover:bg-[#c5f82a] transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] '>LinkedIn</button>
  <button className='bg-[#333333] hover:bg-[#c5f82a] transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] '>Twitter</button>
  <button className='bg-[#333333] hover:bg-[#c5f82a] transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] '>Instagram</button>
      </div>
    </div>
  )
}
