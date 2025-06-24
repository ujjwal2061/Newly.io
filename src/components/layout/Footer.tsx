import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="">
      <div className=" px-4 sm:px-6 lg:px-8 py-16">
        <div className=" relative max-w-5xl mx-auto text-center">
         <div className='absolute bottom-0 left-[30%] bg-white w-72 h-40 opacity-15 blur-3xl'></div>
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Seamless Collaboration
            </h2>
            <p className="text-zinc-400  text-md md:text-lg mb-8 max-w-2xl mx-auto">
              Choose a pricing plan that fits your needs. Scalable options for 
              businesses of all sizes with flexible features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors">
                Started For Free
              </button>
              <button className="bg-zinc-700 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-600 transition-colors border border-zinc-600">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-zinc-800 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Newly.io</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Newly.io Streamlines Knowledge, Integrates Data, And Boosts Team Collaboration With AI.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Account</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Login</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Free trial</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Newsroom</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of service</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Search & knowledge</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Integrations</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Security</a></li>
              </ul>
            </div>
              <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">ActionQuery</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Enterprise Intelligence</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Help center</a></li>
              </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-zinc-800 px-4 sm:px-6 lg:px-8 py-6">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/20 via-zinc-900/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent blur-2xl"></div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 sm:mb-0">
            © Newly.io 2025&nbsp;&nbsp;&nbsp;All Right Reserved
          </p>
          <div className="flex space-x-4 ">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors rounded-full bg-zinc-800  shadow-2xl px-2 py-2">
              <Facebook className="w-5 h-5 "  fill='blue' />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-800  shadow-2xl px-2 py-2 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-800  shadow-2xl px-2 py-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors bg-zinc-800  shadow-2xl px-2 py-2 rounded-full">
              <Linkedin className="w-5 h-5" fill="blue" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;