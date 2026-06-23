import React from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200
      flex flex-col h-full transform transition-transform duration-200 ease-in-out
      md:relative md:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-slate-800 flex items-center gap-1.5">
          <img
            src="/logo.svg"
            alt="logo"
            className="size-6"
          />
          <span>Scheduler</span>
        </div>
      </div>
      {/* Navigation label */}
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase px-6">Menu</span>
      </div>

    </div>
  );
};

export default Sidebar;