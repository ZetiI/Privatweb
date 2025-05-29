import React from 'react';

const Sidebar = ({ menuItems, selectedItem, onSelectItem }) => {
  return (
    <aside className="bg-surface-dark text-text-light w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              info.fejlessz.hu
            </h1>
            <p className="text-sm text-text-light/60">
              Programozási segédlet
            </p>
          </div>
          <nav>
            <ul className="flex space-x-2">
              {menuItems.map((item, index) => (
                <li key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 50}ms` }}>
                  <button
                    onClick={() => onSelectItem(item)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm whitespace-nowrap
                      ${selectedItem === item 
                        ? 'bg-secondary text-white shadow-soft' 
                        : 'text-text-light/80 hover:bg-white/5 hover:text-white'
                      }
                      focus:outline-none focus:ring-2 focus:ring-secondary/50`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 