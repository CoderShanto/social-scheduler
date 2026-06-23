import React from 'react'

const Sidebar = () => {

  const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) => {
    return (
      <div className={`flex flex-col w-64 bg-white border-r border-slate-200 p-4 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
       
        {/* Logo */}
        <div>
          
        </div>
      </div>
    )
  }
}
export default Sidebar