import React from "react"
import { Button } from "../ui/button";
import { CircleCheck,Crown,Zap,ShieldCheck  } from 'lucide-react';

const Price=()=>{
    interface Props{
        title:string,
        period:string,
        price:string,
       description:string
,        buttonText:string,
       features:string[],
        icons:React.ReactNode
        
    }
     const plans:Props[] = [
    {
      title: "Pro",
      price: "15",
      period: "mo per user",
      description: "For scaling teams that need instant access to accurate and up-to-date information",
      buttonText: "Start Your Trial 14 Days",
      features: [
        "Unlimited improved search",
        "Unlimited AI-powered queries",
        "30+ app connections",
        "Unlimited team members",
        "Priority monthly contact",
        "Upgrade or cancel anytime"
      ],
      icons:<ShieldCheck size={20}  />
    },
    {
      title: "Pro-plus",
      price: "25",
      period: "mo per user",
      description: "For enterprises needing advanced features, customization, and full control",
      buttonText: "Book a Demo",
      features: [
        "Audit logs, query controls",
        "Analytics & feedback data",
        "Priority support",
        "Dedicated success manager",
        "Personalized onboarding",
        "Service level agreement",
        "Unlimited integration requests"
      ],
       icons:<Crown size={20} />
    },
    {
      title: "Enterprise",
      price: "35",
      period: "mo 2 user",
      description: "For established organizations in need of extra flexibility and control",
      buttonText: "Book a Demo",
      features: [
        "Audit logs, query controls",
        "Analytics & feedback data",
        "Priority support",
        "Dedicated success manager",
        "Personalized onboarding",
        "Service level agreement",
        "Prioritized integration requests"
      ],
       icons:<Zap  size={20}/>
    }
  ];
    return (
        <div className=" w-full  md:px-24  px-8  py-6">
            <div className="w-full  px-8    gap-2 flex justify-between  py-2 items-center">
               <h1 className="text-start  font-medium sm:text-[28px] text-xl  ">Flexible Pricing Plans for Every <br />
                Team and Business Size
               </h1>
               <p className="text-zinc-300  hidden sm:block md:text-[16px]  text-[14px]">Choose the paln that fits your needs,from startups<br/>
               enterpires,wiith scalable,affordable options
               </p>
            </div>
            <div className="w-full md:px-20 px-6 py-10  ">
                <div className="grid  gap-5  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
                  {plans.map((item,idx)=>(
                      <div key={idx} className="px-5 py-1.5 shadow-2xl flex flex-col p-1 rounded-2xl bg-zinc-950 border border-zinc-900">
                    <div className="flex   items-center justify-between px-1">
                          <div className="w-10 h-10  shadow-3xl bg-zinc-900 border border-zinc-900  flex justify-center items-center  rounded-full  p-1">
                            {item.icons}
                       </div>
                       <span className="flex items-end font-medium">{item.price}/
                        <p className="text-[12px] text-zinc-500">
                        {item.period}
                        </p>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-zinc-400 text-[12px]">
                            {item.description}
                        </p>
                        <Button  variant="secondary" className="rounded-2xl text-center">{item.buttonText}</Button>
                    </div>
                    <div className="flex flex-col text-start">
                        <h3 className="text-base text-zinc-300 mt-1">includes:</h3>
                        <div className="flex  flex-col items-start py-2 px-1 gap-2 text-start ">
                            {item.features.map((text,idx)=>(
                                <p key={idx} className="flex  text-[10px] sm:text-[16px] items-center gap-2 text-start"><CircleCheck className="text-black" fill="white" />
                                 {text}
                                </p>
                            ))}
                        </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Price;