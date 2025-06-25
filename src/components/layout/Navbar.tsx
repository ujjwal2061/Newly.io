"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { AlignJustify, X ,} from 'lucide-react';
import {motion} from "motion/react"
import { useTheme } from "next-themes";


interface NavLink {
    label: string,
    href: string
}

const links: NavLink[] = [
    { label: "Product", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" }
];

const Navbara = () => {
    const {setTheme}=useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className=" dark:text-white flex items-center border-b-[1px] shadow-2xl border-gray-800/50 px-10 py-4 relative z-50">
                <div className="w-full flex items-center gap-2 justify-between px-1">
                    <motion.div 
                     initial={{ opacity:0,x:-5 }}
                     animate={{opacity:1, x:0 }}
                     transition={{ duration:0.3, delay:0.3}}
                    className="flex   gap-1 items-center">
                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                         <div className="w-4 h-4 bg-black rounded-sm"></div>
                    </div>
                        <h1 className="text-accent font-semibold">Newly.io</h1>
                    </motion.div>
                    <div className="hidden md:flex items-center font-semibold">
                        <div className="flex px-10 justify-between gap-12">
                            {links.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    className="hover:text-accent transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                 
                    <motion.div 
                     initial={{ opacity:0,x:5 }}
                     animate={{opacity:1, x:0 }}
                     transition={{ duration:0.3, delay:0.3}}
                    className="hidden md:flex items-center gap-4 p-0">
                        <span className="font-semibold cursor-pointer hover:text-accent transition-colors duration-200">
                            Login
                        </span>
                        <Button variant="secondary" className="hover:bg-gray-400    cursor-pointer rounded-full transition-transform duration-200">
                            Get Started
                        </Button>
                    </motion.div>
                    <button className="md:hidden cursor-pointer hover:bg-zinc-600/40 duration-300 transition-all ease-out rounded-full px-1 py-1" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu" >
                        <div className="relative w-6 h-6">
                            <AlignJustify  size={24} className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}/>
                            <X  size={24} className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0' } cursor-pointer`} />
                        </div>
                    </button>
                </div>
            </nav>
            {/*Moblie  Section start */ }
            <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none' }`} onClick={() => setIsOpen(false)} />
              <div  className={`fixed top-0  bg-black  right-0 h-full w-80  shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full' }`}  >
                <div className="flex flex-col h-full pt-20 px-6">
                    <div className="flex flex-col gap-6 mb-8">
                        {links.map((link, index) => (
                            <a
                                key={link.href} 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-semibold py-3 px-4 rounded-lg hover:bg-neutral-900 transition-all duration-300 transform ${
                                    isOpen 
                                        ? 'translate-x-0 opacity-100' 
                                        : 'translate-x-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 mt-auto mb-8">
                        <button 
                            className={`text-lg font-semibold py-3 px-4 rounded-lg hover:bg-neutral-900 transition-all duration-300 text-left transform ${
                                isOpen 
                                    ? 'translate-x-0 opacity-100' 
                                    : 'translate-x-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isOpen ? '200ms' : '0ms'
                            }}
                            onClick={() => setIsOpen(false)}   >Login
                        </button>
                        <Button variant="secondary"  
                        className={`w-full transition-all duration-300 transform hover:scale-105 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{
                                transitionDelay: isOpen ? '250ms' : '0ms'
                            }}
                            onClick={() => setIsOpen(false)}  >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbara;