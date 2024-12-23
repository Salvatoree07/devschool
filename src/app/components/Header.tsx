'use client'
import { useState } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage]=useState("");

    const handleClick = (page:string) => {
    //event.preventDefault(); // Evita il refresh della pagina
    setActivePage(page); // Imposta la pagina attiva
    //window.history.pushState({}, '', page);
  };
  return (
    <header className="bg-black ">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-green-500 font-bold'>LOGO HERE</h1>
            </Link>
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
            <Link href="/about" className={`text-sm/6 font-semibold  item-menu ${activePage==='about' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("about")}}>About</Link> 
            <Link href="/portfolio" className={`text-sm/6 font-semibold  item-menu ${activePage==='portfolio' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("portfolio")}}>Portfolio</Link> 
            <Link href="/product" className={`text-sm/6 font-semibold  item-menu ${activePage==='product' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("product")}}>Product</Link> 
            <Link href="/expertise" className={`text-sm/6 font-semibold  item-menu ${activePage==='expertise' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("expertise")}}>Expertise</Link> 
            <Link href="/contact" className={`text-sm/6 font-semibold  item-menu ${activePage==='contact' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("contact")}}>Contact</Link> 
            <Link href="/blog" className={`text-sm/6 font-semibold  item-menu ${activePage==='blog' ? 'text-green-500':'text-white'}`} onClick={()=>{handleClick("blog")}}>Blog</Link> 

            </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-green-500 font-bold'>LOGO HERE</h1>
                </Link>
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
                    <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    About
                    </Link>
                    <Link
                    href="/portfolio"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Portfolio
                    </Link>
                    <Link
                    href="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Product
                    </Link>
                    <Link
                    href="/expertise"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Expertise
                    </Link>
                    <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Contact
                    </Link>
                    <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white item-menu"
                    >
                    Blog
                    </Link>
                </div>
                </div>
            </div>
            </DialogPanel>
        </Dialog>

    </header>
  )
}

export default Header;