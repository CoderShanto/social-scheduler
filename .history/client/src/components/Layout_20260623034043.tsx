import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

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

        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 xl:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout