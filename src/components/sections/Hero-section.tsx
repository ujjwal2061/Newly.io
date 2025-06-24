"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { SquareChevronLeft,SquareChevronRight ,Plus,Search,FolderUp ,SendIcon  , GitGraph ,UserPlus, GithubIcon} from 'lucide-react';
import { Spotlight } from "../ui/spotlight";
import { Snowflake ,Github,Slack,BadgeDollarSign  ,Users,Gem} from 'lucide-react';

const Hero=()=>{
    const [IsOpen ,setIsOpen]=useState(false)

    // object
    interface Props{
        icons:React.ReactNode
        name:string
    }
    const groups:Props[]=[
        {
       
        icons:<Snowflake className=" text-blue-500"  fill="blue"/>,
        name:"Snowflake AI"
        },
        {
       
        icons:<BadgeDollarSign className="text-orange-300" />,
        name:"Google Ads"
        },
        {
        icons:<Users   className="text-purple-700"/>,
        name:"Team"
        },
         {
        icons:<Gem fill="blue" className="text-blue-400" />,
        name:"Asana"
        },
        {
       icons:<GithubIcon fill="black" className="text-black" />,
        name:"Github"
        },
        {
          icons:<Slack fill="rose" className="text-rose-400" />,
        name:"Slack"
        },
        
]
return(
<div className="relative">
<div className="flex flex-col py-10 ">
  <div className=" flex flex-col justify-center items-center gap-5  py-4   px-8 ">
    <h1 className="sm:text-4xl md:text-5xl text-xl font-medium text-center">AI Powerd Soluation Designed <br /> Specifically for Your Data</h1>
    <div>
    <Spotlight  className="-top-75 left-20  sm:-top-65 sm:-left-10 md:-top-40 md:left-40"
        fill="white"
      />
   <p className="text-[#5b5a5a] text-center">Effortlessly Connect Your Apps,Document,abd Database to <br />
     Streamaline Processes and Unlock Greater Efficiency</p>
    </div>
    <div className="flex gap-2 mt-2 ">
    <Button  variant="secondary" className="rounded-full cursor-pointer">Started For Free</Button>
     <Button  className="rounded-full font-sans cursor-pointer bg-[#1e1f1e]" >Book a Demo</Button>
    </div>
  </div>
</div>
<div className="md:px-32 sm:px-20 px-6 py-0">
  <div className="min-h-screen   bg-black text-white font-sans ">
      <div className="flex h-screen relative overflow-hidden">
         {IsOpen && (
          <aside className={` absolute sm:relative   w-44 sm:w-64 h-full bg-zinc-900 border-r border-zinc-800 p-4  flex flex-col rounded-l-2xl
              transform transition-transform duration-500 ease-in-out
              ${IsOpen ? 'translate-x-0' : '-translate-x-full sm:-translate-x-full'}
            `}>
          <h2 className="text-xl font-bold mb-4">Newly.io</h2>
          <input type="text"   placeholder="Search..."  className="mb-4 px-3 py-2 rounded bg-zinc-800 text-sm border border-zinc-700 focus:outline-none"  />
          <nav className="flex-1">
            <ul className="space-y-2">
              <li className="text-zinc-400 text-sm">Today</li>
              <li className="text-white">Newly.io</li>
            </ul>
          </nav>
          <div className="mt-auto text-xs bg-neutral-800 rounded-xl p-2">
            <span className="text-white">Upgrade plan</span>
            <p className="text-zinc-300">Acess more models</p>
            </div>
        </aside>
        )}
           <main className={`  relative flex-1 flex items-center justify-center p-6 
              bg-zinc-950 rounded-r-2xl
              transition-all duration-500 ease-in-out
              ${IsOpen ? 'sm:ml-0' : 'ml-0'}
            `}>
           <button  onClick={()=>setIsOpen(!IsOpen)}
            className=" hidden md:block absolute left-1 top-1  hover:bg-zinc-600/30 p-1  hover:bg-opacity-20  cursor-pointer rounded-full ">
              {IsOpen ? (
                  <SquareChevronLeft />
                ):(       
                  <SquareChevronRight  /> 
              )}
            </button>
          <div className="max-w-2xl mx-auto  mt-24  px-2">
            <h1 className="text-xl sm:text-3xl font-semibold mb-6">How can I help?</h1>
            <div className="bg-zinc-900 rounded-lg p-4 mb-8">
                <label  className="flex flex-col gap-5">
              <input  type="text"placeholder="Ask anything"
                className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-sm"
                />
                <div className="flex  px-2 py-1.5 w-full    gap-2  justify-between">
                    <div className="flex items-center  gap-2 ">    
                    <Plus   className="bg-zinc-700  cursor-pointer size-8  shadow-2xl px-2 py-2  rounded-full"/>
                    <Search  size={32} className="bg-zinc-700 cursor-pointer shadow-2xl px-2 py-2  rounded-full" />
                    <FolderUp  size={30} className="bg-zinc-700 cursor-pointer  shadow-2xl px-1.5 py-1.5   rounded-full" />
                    </div>
                    <div>
                        <SendIcon size={32} className="bg-zinc-700 shadow-2xl px-1.5 py-1.5  cursor-pointer rounded-full" />
                    </div>
                    </div>
                </label>
            </div>
            <div className=" mt-10  md:mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Add a connection", desc: "Securely connect, unify all your data sources.",icons:<GitGraph  size={32} className="rounded-full  shadow-2xl  bg-zinc-700 px-1.5 py-1.5" /> },
                { title: "Explore Search", desc: "Discover how Newly.io helps you find answers instantly." ,icons:<SendIcon  size={32} className="rounded-full  shadow-2xl  bg-zinc-700 px-1.5 py-1.5"  />},
                { title: "Invite your team", desc: "Give your team instant access to Newly.io." ,icons:<UserPlus   size={32} className="rounded-full  shadow-2xl  bg-zinc-700 px-1.5 py-1.5" />},
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 shadow-2xl">
                 <div className="flex flex-col gap-2 ">
                 <div>{item.icons}</div>
                <div className="flex flex-col ">
                   <h2 className="font-medium text-white mb-1 text-sm">{item.title}</h2>
                   <p className="text-zinc-500 text-xs">{item.desc}</p>
                 </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
     <div className="flex  flex-col w-full  mt-2  md:px-32 px-14  py-12 ">
        <div className="flex  w-full justify-between px-2 py-8  items-center ">
          <h1 className="text-start text-2xl font-medium">Connect Your <br />
            Knowledge
            </h1>
           <p className="text-zinc-400  hidden sm:block ">Newly.io connect Your data ecosystem,<br />
             integrating emails,files,apps in one place
            </p>
         </div>
      <div className="w-full flex  justify-center ">
        <div className=" grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-6  gap-4 ">
            {groups.map((item ,idx)=>(
                <div key={idx} className="h-52 w-42 bg-zinc-900 border m-2 border-zinc-800 rounded-3xl flex flex-col  justify-center gap-10  items-center">
                  <div className="w-20 h-20  shadow-3xl bg-zinc-900 border border-zinc-800 flex justify-center items-center  rounded-full  p-1">
                    <div className="w-16 h-16   shadow-2xl  bg-zinc-900  border-zinc-800 flex justify-center items-center  rounded-full border p-1">
                        <div className="w-10 h-10  shadow-2xl bg-zinc-900 border border-zinc-800  flex justify-center items-center  rounded-full  p-1">
                            {item.icons}
                        </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                </div>
            ))}
        </div>
      </div> 
   </div>
</div>
    )
}
export default Hero;