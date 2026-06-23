import React from 'react'

const Sidebar = () => {

  const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) => {
    return (
      <div className={`flex flex-col w-64 bg-white border-r border-slate-200 p-4 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
       
        {/* Logo */}
        <div className="p-6 pb-4">
          <div className="text-2xl font-bold text-slate-900">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

        </div>
      </div>
    )
  }
}
export default Sidebar