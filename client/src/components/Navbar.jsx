import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { ImExit } from "react-icons/im";
import { BiSolidHome } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiFillWechat } from "react-icons/ai";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("Home"); // Initialize with the default active item

  const handleSidebarItemClick = (text) => {
    setActiveItem(text);
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#121212] border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, activeItem }}>
          <ul className="flex-1 px-3">
            {/* Use SidebarItem components with icons and text here */}
            <SidebarItem icon={<BiSolidHome />} text="Home" onItemClick={handleSidebarItemClick} />
            <SidebarItem icon={<BsSearch />} text="Browse" onItemClick={handleSidebarItemClick} />
            <SidebarItem icon={<AiFillWechat />} text="Chats" alert={true} onItemClick={handleSidebarItemClick} />
            <SidebarItem icon={<ImExit />} text="Exit" onItemClick={handleSidebarItemClick} />
            {/* Add more SidebarItem components as needed */}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, onItemClick }) {
  const { expanded, activeItem } = useContext(SidebarContext);
  const isActive = activeItem === text;

  const handleClick = () => {
    onItemClick(text);
  };

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-[#0073e6] text-[#121212] text-shadow: 0 0 10px rgba(0, 115, 230, 0.9);"
            : "bg-[#121212] text-[#ff2e63] hover:bg-[#0073e6] text-shadow: 0 0 10px rgba(255, 46, 99, 0.9);"
        }
    `}
      onClick={handleClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 hover:bg-[#121212] rounded bg-[#ff2e63] ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#121212] text-[#ff2e63] text-shadow: 0 0 10px rgba(255, 46, 99, 0.9); text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
