import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    '9. osztály programozás',
    '10. osztály programozás',
    '11. osztály programozás',
    '12. osztály programozás',
    '13. osztály programozás',
    'Ágazati vizsga felkészítő tananyag',
    'Szakmai vizsga tananyag'
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar 
        menuItems={menuItems}
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
      />
      <main className="relative">
        <div className="sticky top-0 z-10 bg-surface/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-text-primary">
              {selectedItem || 'Válassz egy témát'}
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Content selectedItem={selectedItem} />
        </div>
      </main>
    </div>
  );
}

export default App;
