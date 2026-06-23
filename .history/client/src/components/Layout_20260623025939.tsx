import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Layout = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='flex h-screen bg-slate-50'>
      
      {/* Mobile Overlay */}

      {isMobileMenuOpen && <div className='fixed inset-0 bg-slate-900/50 z-40 md:hidden'
       onClick={() => setIsMobileMenuOpen(false)}   />}


      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <div>
        {/* Top Bar */}
        
      </div>
    </div>
  )
}

export default Layout