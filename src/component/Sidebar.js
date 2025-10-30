import React from 'react'
import { FaHistory, FaPlus, FaQuestion } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { IoMenu, IoSettings } from 'react-icons/io5'
import { Context } from '../context/Context'
 
const Sidebar = () =>{

const [extended, setExtended]=React.useState(false)

const {onSent, prevprompt, setRecentprompt, newChat } = React.useContext(Context)

const loadPrompt = async(prompt)=>{
  setRecentprompt (prompt)
  await onSent(prompt)
}

 return(
    <div className="min-h-screen inline-flex flex-col justify-between bg py-1 px-4 bg-gray-200">
        <div>
            <IoMenu 
            onClick={()=>setExtended(!extended)}
            className="text-2xl block cursor-pointer"
            />

            <div onClick={()=>newChat()} className="mt-2.5 inline-flex items-center gap-2.5 py-2.5 px-4 text-4px text-black-500 cursor-pointer bg-gray-500 rounded-full">
            
                <FaPlus/>
              {extended && <p>New Chat</p> }
           </div>
          
          {extended && (<div className="flex flex-col">
            <p className='mt-7 mb-5'> Recent</p>
            
            {prevprompt ?.map((item, index)=>{

              return(
               <div onClick={()=>loadPrompt(item)}className="flex items-center gap-2 p-2 pr-10 rounded-xl text-slate-6 00 cursor-pointer hover:bg-gray-300">
                <FaMessage className="text-2xl"/>
                <p>{item.slice(0,15)}....</p>
             </div>
              )

            })}
          </div>

          )}


      
           
       </div>

       <div className="flex flex-col">

           <div className="flex items-center gap-2 p-2 pr-10 rounded-xl text-slate-700 cursor-pointer hover:bg-gray-300"> 
             <FaQuestion className="text-2xl"/> {extended && <p> Help </p>}
            </div>

            <div className="flex items-center gap-2 p-2 pr-10 rounded-xl text-slate-700 cursor-pointer hover:bg-gray-300"> 
             <FaHistory className="text-2xl"/> {extended && <p> History </p>}
            </div>

            <div className="flex items-center gap-2 p-2 pr-10 rounded-xl text-slate-700 cursor-pointer hover:bg-gray-300"> 
             <IoSettings className="text-2xl"/> {extended && <p> Settings </p>}
             </div>
           
       </div>
    </div>

 )

}

export default Sidebar