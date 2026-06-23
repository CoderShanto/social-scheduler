import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';



const Layout = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='flex h-screen bg-slate-50'>
      
      {/* Mobile Overlay */}

      {isMobileMenuOpen && <div className='fixed inset-0 bg-slate-900/50 z-40 md:hidden'
       onClick={() => setIsMobileMenuOpen(false)}   />}


      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Top Bar */}
        <header className='flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2 sm:px-6 lg:px-8'>

        
            <button className='text-slate-500 hover:text-slate-600 md:hidden' onClick={() => setIsMobileMenuOpen(true)}>
              <MenuIcon className="size-6" />
          </button>
          <div>
            <h1 className='text-lg font-semibold text-slate-900'>Dashboard</h1>
            <p className='text-sm font-medium text-slate-500'>Manage and automate your social presence</p>
          </div>

        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 xl:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout