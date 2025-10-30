import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCompass, FaLightbulb, FaMessage, FaMicrophone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { MdAddPhotoAlternate, MdSportsCricket } from "react-icons/md";
import { Context } from "../context/Context";
import { Input } from "postcss";
import GeminiLogo from "../component/logogemini.png"
const Main =() =>{


   const{
      input,
      setInput,
      recentprompt,
      setRecentprompt,
      prevprompt,
      setPrevprompt,
      showResult,
      loading,
      resultData,
      onSent
   }=useContext(Context)

 return (
    <div className="flex-1 min-h-screen pb-[15vh]  relative">
       <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p>Gemini</p>
        <FaUserCircle/>
      </div>


      <div className="max-w-[900px] mx-auto">
        { !showResult ? (
        <>
        <div className="my-12 text-[56px]  text-slate-500 font-semibold p-5">
                     <p>
                        <span className="bg-gradient-to-r from-[#0d60ac] to-[#ff5546] bg-clip-text text-transparent">Hello, Rohit </span>
                     </p>
                     <p className="text-slate-400"> How Can I Help You Today  ?</p>
         </div>
         <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <div className="h-[150px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                    Suggest Top 10 Webseries
                </p>
                 <FaCompass className="text-3xl p-1 absolute bottom-2 right-2"/>
              </div>

              <div className="h-[150px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                    What is Hooks In React?
                </p>
                 <FaLightbulb className="text-3xl p-1 absolute bottom-2 right-2"/>
              </div>

              <div className="h-[150px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                    Mahendra Singh Dhoni
                </p>
                 <MdSportsCricket  className="text-3xl p-1 absolute bottom-2 right-2"/>
              </div>


              <div className="h-[150px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                     Who is Known as Father of History
                </p>
                 <FaMessage className="text-3xl p-1 absolute bottom-2 right-2"/>
              </div>
         </div> 
         
         </>
          ) : 
         (
            <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
               <div className="my-10 mx-0 flex items-center gap-5"> 
                  <FaUserCircle className="text-3xl"/>
                  <p className="text-lg font-[400] leading[1.8]">{recentprompt}</p>
               </div>
               <div className="flex items-start gap-5"> 
                  <img src={GeminiLogo} alt="" className="w-8 rounded-[50%]"/>
                  {
                     loading ? (
                   <div className="w-full flex flex-col gap-2">
                       
                        <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" /> 

                        <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" /> 

                        <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" /> 
                    
                   </div>

                          )
                  
                 :(

                  <p
                   dangerouslySetInnerHTML={{__html: resultData}} 
                   className="text-lg font-[400] leading-[1.8]">
                   </p>
                     
                   )
                   
                  }
               </div>
            </div>
         )
          }

<div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
  <div className="flex items-center justify-between gap-4 sm:gap-2 bg-gray-800 py-2 px-5 rounded-full flex-wrap">
    <input
      type="text"
      placeholder="Enter a Prompt here...."
      className="flex-1 bg-transparent border-none outline-none p-2 text-lg text-white min-w-[200px]"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />

    <div className="flex gap-3 sm:gap-2 items-center justify-end">
      <MdAddPhotoAlternate className="text-2xl cursor-pointer text-white" />
      <FaMicrophone className="text-2xl cursor-pointer text-white" />
      <IoMdSend onClick={() => onSent()} className="text-2xl cursor-pointer text-white" />
    </div>
  </div>

  <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
    Gemini May Display Inaccurate info, Including about people, Double check its Response.
  </p>
</div>

</div>
</div>
 )

}
export default Main;