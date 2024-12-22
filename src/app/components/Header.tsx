'use client'
import { useState } from 'react';


import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
function Header() {
  var prova="";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage]=useState(prova);

    const handleClick = (page:string, event: React.MouseEvent<HTMLAnchorElement>) => {
    //event.preventDefault(); // Evita il refresh della pagina
    setActivePage(page); // Imposta la pagina attiva
    //window.history.pushState({}, '', page);
  };
  return (
    <header className="bg-black ">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-green-500 font-bold'>LOGO HERE</h1>
            </a>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="/about" className={`text-sm/6 font-semibold  item-menu ${activePage==='about' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("about", e)}}>About</a> 
            <a href="/portfolio" className={`text-sm/6 font-semibold  item-menu ${activePage==='portfolio' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("portfolio", e)}}>Portfolio</a> 
            <a href="/product" className={`text-sm/6 font-semibold  item-menu ${activePage==='product' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("product", e)}}>Product</a> 
            <a href="/expertise" className={`text-sm/6 font-semibold  item-menu ${activePage==='expertise' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("expertise", e)}}>Expertise</a> 
            <a href="/contact" className={`text-sm/6 font-semibold  item-menu ${activePage==='contact' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("contact", e)}}>Contact</a> 
            <a href="/blog" className={`text-sm/6 font-semibold  item-menu ${activePage==='blog' ? 'text-green-500':'text-white'}`} onClick={(e)=>{handleClick("blog", e)}}>Blog</a> 

            </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-green-500 font-bold'>LOGO HERE</h1>
                </a>
                <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-6">
                    <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    About
                    </a>
                    <a
                    href="/portfolio"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Portfolio
                    </a>
                    <a
                    href="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Product
                    </a>
                    <a
                    href="/expertise"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Expertise
                    </a>
                    <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Contact
                    </a>
                    <a
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Blog
                    </a>
                </div>
                </div>
            </div>
            </DialogPanel>
        </Dialog>

    </header>
  )
}

export default Header;