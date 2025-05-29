import React from 'react';

const Sidebar = ({ menuItems, selectedItem, onSelectItem }) => {
  return (
    <aside className="bg-surface-dark text-text-light w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Konténer a tartalomhoz */}
        <div className="relative flex flex-col sm:flex-row items-center py-4 border-b border-white/10 gap-4">
          {/* Cím rész - bal oldalon */}
          <div className="flex-shrink-0 mr-auto"> {/* mr-auto küldi balra */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Tanuljreactot
            </h1>
            <p className="text-sm text-text-light/60">
              Programozási segédlet
            </p>
          </div>

          {/* Navigáció - középen */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 sm:mx-auto">
            <ul className="flex space-x-2">
              {menuItems.map((item, index) => (
                <li key={index} className="animate-fadeIn flex-shrink-0" style={{ animationDelay: `${index * 50}ms` }}>
                  <button
                    onClick={() => onSelectItem(item)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm whitespace-nowrap
                      ${selectedItem === item 
                        ? 'bg-secondary text-white shadow-soft' 
                        : 'text-text-light/80 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Üres elem a jobb oldali tér kitöltéséhez */}
          <div className="flex-shrink-0 ml-auto sm:invisible sm:w-0"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;