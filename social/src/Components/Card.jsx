import React from "react";
import pic from "../assets/images/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="p-[2rem] bg-[#1f1f1f] rounded-[0.7rem] m-[1rem]">
      <div className="inside  flex flex-col justigy-center items-center sm:w-[20rem] sm:h-[35rem] ">
        <img src={pic} alt="pic" className="w-[6rem] h-[6rem] rounded-full mb-[1rem]" />
        <p className="text-[#ffffff] text-[1.8rem] font-semibold text-center">Jessica Randall</p>
        <p className="text-[#c5f82a] font-semibold mb-[1.5rem] text-center">London, United Kingdom</p>
        <p className="text-[#ffffff] font-semibold mb-[1rem] text-center">"Front-end developer and avid reader."</p>

        <button className="bg-[#333333] hover:bg-[#c5f82a]  hover:text-[#141414] font-bold transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] text-[#ffffff]">
          GitHub
        </button>
        <button className="bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414] font-bold transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] text-[#ffffff]">
          Frontend Mentor
        </button>
        <button className="bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414] font-bold transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] text-[#ffffff]">
          LinkedIn
        </button>
        <button className="bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414] font-bold transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] text-[#ffffff]">
          Twitter
        </button>
        <button className="bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414] font-bold transition-all duration-300 ease-linear m-[0.5rem] w-[100%] text-center h-[3rem] rounded-[0.5rem] text-[#ffffff]">
          Instagram
        </button>
      </div>
    </div>
  );
}
