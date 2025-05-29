import React from 'react';
import Grade9 from '../GradeContent/Grade9';
import Grade10 from '../GradeContent/Grade10';
import Grade11 from '../GradeContent/Grade11';
import Grade12 from '../GradeContent/Grade12';
import Grade13 from '../GradeContent/Grade13';
import AgazatiVizsga from '../GradeContent/AgazatiVizsga';
import SzakmaiVizsga from '../GradeContent/SzakmaiVizsga';

const Content = ({ selectedItem }) => {
  const contentMap = {
    '9. osztály programozás': {
      title: '9. osztály programozás',
      content: <Grade9 />
    },
    '10. osztály programozás': {
      title: '10. osztály programozás',
      content: <Grade10 />
    },
    '11. osztály programozás': {
      title: '11. osztály programozás',
      content: <Grade11 />
    },
    '12. osztály programozás': {
      title: '12. osztály programozás',
      content: <Grade12 />
    },
    '13. osztály programozás': {
      title: '13. osztály programozás',
      content: <Grade13 />
    },
    'Ágazati vizsga felkészítő tananyag': {
      title: 'Ágazati vizsga felkészítő tananyag',
      content: <AgazatiVizsga />
    },
    'Szakmai vizsga tananyag': {
      title: 'Szakmai vizsga tananyag',
      content: <SzakmaiVizsga />
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {selectedItem ? (
        <div className="animate-fadeIn">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="text-text-primary">
                {contentMap[selectedItem].content}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center animate-fadeIn">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-6">
              Üdvözöljük az Infojegyzettár oldalon!
            </h2>
            <p className="text-xl text-text-secondary">
              Válasszon a bal oldali menüből a kívánt tananyagot.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="animate-pulse text-secondary">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content; 