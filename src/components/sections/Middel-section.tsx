import React from "react";
import { Snowflake ,Github,Table , Boxes,Cloud  ,Users,SquareArrowOutUpRight} from 'lucide-react';
const Middel=()=>{

    interface Props{
        name:string,
        icons1:React.ReactNode
        icons2:React.ReactNode
        desc:string
    }

   const Items:Props[]=[
    {
    name:"snowflake.com",
    icons1:<Snowflake   className="text-blue-400 bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9 " fill="blue"/>,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9 shadow-2xl  " />,
    desc:"Snowflake is cloud data platform enabling secure,scalable,and fast data analytics."
   },
       {
    name:"tableau.com",
    icons1:<Table  className="text-pink-500  bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9" fill="pink"/>,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9 shadow-2xl  " />,
    desc:"Tableau helps people visualize ,analyze,share data through interactive dashbords."
   },
       {
    name:"cloud.google.com",
    icons1:<Cloud className="text-cyan-500  bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9 " />,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9 shadow-2xl  " />,
    desc:"BigQury is Google serverless data waehouse for fast,scalable,secure analytics."
   },
     {
    name:"dropbox.com",
    icons1:<Boxes className="text-blue-600  bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9" />,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9 shadow-2xl  " />,
    desc:"Dropbox is  cloud storage service for tile sharing annd collaboration across devices."
   },
       {
    name:"github.com",
    icons1:<Github   fill="black" className=" text-black bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9" />,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9  shadow-2xl  " />,
    desc:"GitHub is a plaform for version control and collbarative software devlopment ."
   },
       {
    name:"miscrosoft.com",
    icons1:<Users className="text-purple-500  bg-zinc-700  rounded-full px-2 py-1 shadow-2xl size-9" />,
    icons2:<SquareArrowOutUpRight className="bg-zinc-700 rounded-full px-2 py-2 size-9 shadow-2xl  " />,
    desc:"Microsoft Team enables communication, meetings,collaboration acroos organizations."
   },
]

    return (
        <div  className="w-full  py-8">
            <div className="flex  flex-col md:px-22  px-12 ">
                <div className="w-full flex justify-between px-3 ">
                    <h1 className="sm:text-2xl text-xl font-medium text-start">Connect & Manage Your <br />
                    Key Data Sources</h1>
                    <p className= " hidden sm:block text-zinc-300 md:text-[16px] text-[14px] font-light text-start">Newly.io connect to data sources,<br />
                    translating requests into with secure <br />
                    permssion-based access to inforamtion
                    </p>
                </div>
               <div className="w-full py-16 flex justify-center items-center bg-black">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
    {Items.map((item, idx) => (
      <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl">{item.icons1}</span>
          <span className="text-2xl">{item.icons2}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-zinc-400">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
        </div>
    )
}
export default Middel;