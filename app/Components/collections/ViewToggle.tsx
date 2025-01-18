"use client"
import { useState } from 'react';
import { Bars3Icon, TableCellsIcon, Squares2X2Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { ViewOption} from '@/types/collection';


interface ViewConfig {
  icon: typeof Bars3Icon;
  label: string;
}

// Props type for the component
interface ViewProps {
    currentView: ViewOption;
    setCurrentView: React.Dispatch<React.SetStateAction<ViewOption>>;
  }

const VIEW_OPTIONS: Record<ViewOption, ViewConfig> = {
  list: { icon: Bars3Icon, label: 'List' },
  grid: { icon: Squares2X2Icon, label: 'Grid' },
  table: { icon: TableCellsIcon, label: 'Table' }
};

export default function ViewToggle({currentView,setCurrentView} : ViewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const CurrentIcon = VIEW_OPTIONS[currentView].icon;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex flex-row items-center text-gray-600 font-light"
      >
        <CurrentIcon className="h-5 w-5"/>
        <h3 className="text-xs ml-1 text-black">{VIEW_OPTIONS[currentView].label}</h3>
        <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-1 w-32">
          {(Object.entries(VIEW_OPTIONS) as [ViewOption, ViewConfig][]).map(([key, { icon: Icon, label }]) => (
            key !== currentView && (
              <button
                key={key}
                onClick={() => {
                  setCurrentView(key);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100"
              >
                <Icon className="h-5 w-5 mr-2" />
                <span className="text-xs">{label}</span>
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
}
