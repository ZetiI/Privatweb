import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    'HTML - CSS', //9. osztály programozás
    'JavaScript', // 10. osztály programozás
    'React', // 11. osztály programozás
    'API', // 12. osztály programozás
    'Frontend', // 13. osztály programozás
    'Frontend - Backend' // Szakmai vizsga tananyag


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
