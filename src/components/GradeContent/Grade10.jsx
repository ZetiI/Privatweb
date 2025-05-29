import React, { useState } from 'react';
import { FaCode, FaJs, FaLaptopCode, FaCheckCircle, FaLightbulb, FaQuestionCircle, FaPlay } from 'react-icons/fa';

const Grade10 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    jsAlapok: true,
    domManipulacio: false,
    esemenykezeles: false
  });
  const [codeExample, setCodeExample] = useState(0);
  const [counterValue, setCounterValue] = useState(0);
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const codeExamples = [
    {
      title: "Változók és adattípusok",
      code: `// Változók deklarálása
let nev = "Anna";
const kor = 16;
var isStudent = true;

// Adattípusok
console.log(typeof nev);    // "string"
console.log(typeof kor);    // "number"
console.log(typeof isStudent); // "boolean"

// Tömbök
const jegyek = [5, 4, 3, 5];
console.log(jegyek[0]);     // 5

// Objektumok
const diak = {
  nev: "Péter",
  osztaly: "10.A",
  atlag: 4.2
};
console.log(diak.nev);      // "Péter"`
    },
    {
      title: "Függvények",
      code: `// Függvény definíció
function udvozol(nev) {
  return "Üdv, " + nev + "!";
}

// Függvény hívása
const uzenet = udvozol("Kati");
console.log(uzenet);        // "Üdv, Kati!"

// Nyílfüggvény
const osszead = (a, b) => a + b;
console.log(osszead(3, 5)); // 8

// Callback függvény
const szamok = [1, 2, 3];
const duplazott = szamok.map(szam => szam * 2);
console.log(duplazott);     // [2, 4, 6]`
    },
    {
      title: "Feltételek és ciklusok",
      code: `// If-else
const jegy = 4;
if (jegy >= 4) {
  console.log("Átment!");
} else {
  console.log("Megbukott!");
}

// Switch
const nap = "kedd";
switch(nap) {
  case "hétfő":
    console.log("Hét eleje");
    break;
  case "kedd":
    console.log("Még csak kedd van");
    break;
  default:
    console.log("Valami más nap");
}

// For ciklus
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// While ciklus
let szamlalo = 3;
while (szamlalo > 0) {
  console.log(szamlalo--); // 3, 2, 1
}`
    }
  ];

  const handleCounter = (operation) => {
    if (operation === 'increment') {
      setCounterValue(prev => prev + 1);
    } else if (operation === 'decrement') {
      setCounterValue(prev => prev - 1);
    } else {
      setCounterValue(0);
    }
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <FaJs className="text-yellow-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">JavaScript Alapok</h1>
            <p className="text-indigo-600 font-medium">10. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a JavaScript programozás alapjainak tanfolyamán! Ebben a kurzusban megismerkedünk 
          a világ legnépszerűbb programozási nyelvével, amely lehetővé teszi weboldalaink interaktívvá tételét.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCode className="text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold">Tananyag</h3>
            </div>
            <p className="text-gray-600">
              JavaScript alapok, DOM manipuláció, eseménykezelés és gyakorlati példák.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Feladatok</h3>
            </div>
            <p className="text-gray-600">
              Interaktív gyakorlatok és projektfeladatok a tanultak begyakorlásához.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaLightbulb className="text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">Kódolj velünk!</h3>
            </div>
            <p className="text-gray-600">
              Élő kódpéldák és mini alkalmazások, amiket közösen fejlesztünk.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab('tananyag')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'tananyag'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tananyag
        </button>
        <button
          onClick={() => setActiveTab('feladatok')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'feladatok'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Feladatok
        </button>
        <button
          onClick={() => setActiveTab('megoldasok')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'megoldasok'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Megoldások
        </button>
        <button
          onClick={() => setActiveTab('gyakorlas')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'gyakorlas'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Gyakorlás
        </button>
      </div>

      {activeTab === 'tananyag' && (
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-indigo-50"
              onClick={() => toggleSection('jsAlapok')}
            >
              <h3 className="text-2xl font-bold text-gray-800">JavaScript alapok</h3>
              <span className="text-gray-500">
                {expandedSections.jsAlapok ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.jsAlapok && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>JavaScript</strong> egy magas szintű, értelmezett programozási nyelv, 
                    amelyet főként weboldalak interaktívvá tételére használnak. A JavaScript kódot 
                    a böngésző értelmezi és végrehajtja.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Fontos tudnivaló</h4>
                        <p className="text-gray-700">
                          A JavaScript nem ugyanaz, mint a Java! A JavaScriptet Brendan Eich fejlesztette ki 1995-ben,
                          és a nevét marketing okokból változtatták meg JavaScript-re, bár a nyelvnek nincs köze a Java-hoz.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Kódpéldák</h4>
                  
                  <div className="flex space-x-4 mb-4">
                    {codeExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setCodeExample(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          codeExample === index
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {example.title}
                      </button>
                    ))}
                  </div>
                  
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                    {codeExamples[codeExample].code}
                  </pre>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">JavaScript alapfogalmak</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Változók</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>let</code> - újrafelhasználható változó</li>
                        <li><code>const</code> - konstans (nem módosítható)</li>
                        <li><code>var</code> - régi változó deklaráció</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Adattípusok</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>String</code> - szöveg</li>
                        <li><code>Number</code> - szám</li>
                        <li><code>Boolean</code> - logikai érték</li>
                        <li><code>Array</code> - tömb</li>
                        <li><code>Object</code> - objektum</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Operátorok</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>+ - * /</code> - matematikai</li>
                        <li><code>=== !==</code> - összehasonlító</li>
                        <li><code>&& || !</code> - logikai</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-indigo-50"
              onClick={() => toggleSection('domManipulacio')}
            >
              <h3 className="text-2xl font-bold text-gray-800">DOM manipuláció</h3>
              <span className="text-gray-500">
                {expandedSections.domManipulacio ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.domManipulacio && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>DOM (Document Object Model)</strong> a weboldal programozási felülete, 
                    amely lehetővé teszi, hogy JavaScript segítségével módosítsuk a weboldal tartalmát, 
                    szerkezetét és stílusát.
                  </p>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">DOM elemek kiválasztása</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`// Egy elem kiválasztása
const fejlec = document.querySelector('h1');

// Több elem kiválasztása
const paragrafusok = document.querySelectorAll('p');

// ID alapján
const gomb = document.getElementById('gomb');

// Osztály alapján
const menuElemek = document.getElementsByClassName('menu');`}
                      </pre>
                    </div>
                    <div>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`// Elem tartalmának módosítása
fejlec.textContent = "Új cím";
fejlec.innerHTML = "<em>Dőlt</em> cím";

// Attribútumok kezelése
gomb.setAttribute('disabled', 'true');
const href = link.getAttribute('href');

// Stílus módosítása
fejlec.style.color = "blue";
fejlec.style.fontSize = "24px";`}
                      </pre>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">DOM elemek létrehozása és módosítása</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
                    {`// Új elem létrehozása
const ujElem = document.createElement('div');
ujElem.textContent = "Ez egy új elem";
ujElem.classList.add('uj-osztaly');

// Elem beszúrása
const szuloElem = document.querySelector('.container');
szuloElem.appendChild(ujElem);

// Elem törlése
const torlendoElem = document.querySelector('.torlendo');
torlendoElem.remove();

// Elemek szűrése
const listaElemek = document.querySelectorAll('li');
listaElemek.forEach(elem => {
  if (elem.textContent.includes('fontos')) {
    elem.style.fontWeight = 'bold';
  }
});`}
                  </pre>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Gyakorlati tipp</h4>
                        <p className="text-gray-700">
                          A <code>document.querySelector</code> a CSS szelektorokkal működik, így bármilyen 
                          CSS szelektort használhatsz elemek kiválasztásához (pl. <code>'.osztaly'</code>, 
                          <code>'#azonosito'</code>, <code>'div p'</code> stb.).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-indigo-50"
              onClick={() => toggleSection('esemenykezeles')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Eseménykezelés</h3>
              <span className="text-gray-500">
                {expandedSections.esemenykezeles ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.esemenykezeles && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Az <strong>eseménykezelés</strong> lehetővé teszi, hogy reagáljunk a felhasználói 
                    interakciókra (gombnyomás, egérmozgatás, billentyűleütés stb.) és más eseményekre 
                    (oldal betöltés, időzítők stb.).
                  </p>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Alapvető eseménykezelés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">HTML attribútummal</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`<button onclick="alert('Kattintottál!')">
  Kattints ide
</button>`}
                      </pre>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">JavaScripttel</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`const gomb = document.querySelector('button');
gomb.addEventListener('click', function() {
  console.log('Kattintottál!');
});`}
                      </pre>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Gyakori események</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Egér események</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>click</code> - kattintás</li>
                        <li><code>dblclick</code> - dupla kattintás</li>
                        <li><code>mouseover</code> - egér föléhúzás</li>
                        <li><code>mouseout</code> - egér elhúzása</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Billentyűzet</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>keydown</code> - billentyű lenyomva</li>
                        <li><code>keyup</code> - billentyű felengedve</li>
                        <li><code>keypress</code> - billentyű lenyomva tartva</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-indigo-600 mb-2">Egyéb</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>load</code> - oldal betöltve</li>
                        <li><code>submit</code> - űrlap elküldve</li>
                        <li><code>change</code> - beviteli mező változás</li>
                        <li><code>scroll</code> - görgetés</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Eseményobjektum</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                    {`document.addEventListener('click', function(event) {
  console.log('Kattintás pozíciója:', event.clientX, event.clientY);
  console.log('Megnyomott gomb:', event.button);
  console.log('Cél elem:', event.target);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(event) {
  console.log('Megnyomott billentyű:', event.key);
  if (event.key === 'Enter') {
    console.log('Enter billentyű lenyomva!');
  }
});`}
                  </pre>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Gyakorlati feladatok</h3>
            
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Számláló alkalmazás</h4>
                    <p className="text-gray-600 mt-1">Készíts egy számláló alkalmazást a következő funkciókkal:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Növelő és csökkentő gombok</li>
                  <li>Nullázó gomb</li>
                  <li>Aktuális érték megjelenítése</li>
                  <li>Ha az érték eléri a 10-et, piros színű legyen a szám</li>
                  <li>Ha negatív, sárga színű legyen</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Segítség
                  </h5>
                  <p className="text-blue-700 text-sm">
                    Használd a <code>textContent</code> tulajdonságot az érték megjelenítéséhez, és a 
                    <code>style.color</code> tulajdonságot a szín módosításához. Ne felejts el eseményfigyelőket 
                    (<code>addEventListener</code>) regisztrálni a gombokhoz!
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">TODO lista</h4>
                    <p className="text-gray-600 mt-1">Készíts egy egyszerű TODO listát:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Beviteli mező új feladat hozzáadásához</li>
                  <li>Gomb a feladat hozzáadásához</li>
                  <li>Feladatok listája</li>
                  <li>Kattintással lehessen átjelölni a feladatot (kész/nem kész)</li>
                  <li>Feladat törlése gombbal</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                    <FaLightbulb className="mr-2" /> Tipp
                  </h5>
                  <p className="text-yellow-700 text-sm">
                    Használj tömböt a feladatok tárolására, és a <code>map</code> metódust a lista megjelenítéséhez. 
                    Az átjelöléshez módosítsd a feladat állapotát a tömbben, majd frissítsd a megjelenítést.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Feladatok megoldása</h3>
            
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h4 className="text-lg font-semibold">1. Számláló alkalmazás megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Számláló</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        
        .counter-container {
            text-align: center;
        }
        
        .counter-value {
            font-size: 72px;
            margin: 20px 0;
            transition: color 0.3s;
        }
        
        .buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
        }
        
        button:hover {
            opacity: 0.8;
        }
        
        .reset {
            background-color: #f44336;
        }
    </style>
</head>
<body>
    <div class="counter-container">
        <h1>Számláló</h1>
        <div class="counter-value" id="counter">0</div>
        <div class="buttons">
            <button id="decrement">-</button>
            <button id="reset" class="reset">0</button>
            <button id="increment">+</button>
        </div>
    </div>

    <script>
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const resetBtn = document.getElementById('reset');
        
        let count = 0;
        
        function updateCounter() {
            counterElement.textContent = count;
            
            if (count >= 10) {
                counterElement.style.color = 'red';
            } else if (count < 0) {
                counterElement.style.color = 'yellow';
            } else {
                counterElement.style.color = 'black';
            }
        }
        
        incrementBtn.addEventListener('click', () => {
            count++;
            updateCounter();
        });
        
        decrementBtn.addEventListener('click', () => {
            count--;
            updateCounter();
        });
        
        resetBtn.addEventListener('click', () => {
            count = 0;
            updateCounter();
        });
        
        updateCounter();
    </script>
</body>
</html>`}
                  </pre>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h4 className="text-lg font-semibold">2. TODO lista megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO lista</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            color: #333;
        }
        
        .input-container {
            display: flex;
            margin-bottom: 20px;
        }
        
        #todo-input {
            flex-grow: 1;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px 0 0 4px;
        }
        
        #add-btn {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
        }
        
        #add-btn:hover {
            background-color: #45a049;
        }
        
        #todo-list {
            list-style-type: none;
            padding: 0;
        }
        
        .todo-item {
            display: flex;
            align-items: center;
            padding: 10px;
            border: 1px solid #ddd;
            margin-bottom: 5px;
            border-radius: 4px;
        }
        
        .todo-text {
            flex-grow: 1;
            margin: 0 10px;
        }
        
        .completed {
            text-decoration: line-through;
            color: #888;
        }
        
        .delete-btn {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>TODO lista</h1>
    
    <div class="input-container">
        <input type="text" id="todo-input" placeholder="Új feladat...">
        <button id="add-btn">Hozzáad</button>
    </div>
    
    <ul id="todo-list"></ul>

    <script>
        const todoInput = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');
        
        let todos = [];
        
        function renderTodos() {
            todoList.innerHTML = '';
            
            todos.forEach((todo, index) => {
                const li = document.createElement('li');
                li.className = 'todo-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;
                checkbox.addEventListener('change', () => {
                    todos[index].completed = !todos[index].completed;
                    renderTodos();
                });
                
                const span = document.createElement('span');
                span.className = 'todo-text';
                span.textContent = todo.text;
                if (todo.completed) {
                    span.classList.add('completed');
                }
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Törlés';
                deleteBtn.addEventListener('click', () => {
                    todos.splice(index, 1);
                    renderTodos();
                });
                
                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(deleteBtn);
                
                todoList.appendChild(li);
            });
        }
        
        addBtn.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text) {
                todos.push({
                    text: text,
                    completed: false
                });
                todoInput.value = '';
                renderTodos();
            }
        });
        
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addBtn.click();
            }
        });
    </script>
</body>
</html>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'gyakorlas' && (
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Gyakorlás</h3>
          <p className="text-gray-600 mb-8">Próbáld ki az alábbi interaktív gyakorlatokat!</p>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaPlay className="text-indigo-600 mr-2" /> Számláló gyakorlása
              </h4>
              
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold my-6" style={{
                  color: counterValue >= 10 ? 'red' : counterValue < 0 ? 'yellow' : 'black'
                }}>
                  {counterValue}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleCounter('decrement')}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Csökkent
                  </button>
                  <button 
                    onClick={() => handleCounter('reset')}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Nulláz
                  </button>
                  <button 
                    onClick={() => handleCounter('increment')}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Növel
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaPlay className="text-indigo-600 mr-2" /> TODO lista gyakorlása
              </h4>
              
              <form onSubmit={handleTodoSubmit} className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    placeholder="Írj be egy feladatot..."
                    className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-r-lg transition-colors"
                  >
                    Hozzáad
                  </button>
                </div>
              </form>
              
              <ul className="space-y-2">
                {todos.map((todo, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center p-3 border rounded-lg ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(index)}
                      className="mr-3 h-5 w-5"
                    />
                    <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                      {todo.text}
                    </span>
                    <button
                      onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      Törlés
                    </button>
                  </li>
                ))}
              </ul>
              
              {todos.length === 0 && (
                <p className="text-gray-500 text-center py-4">Nincsenek feladatok. Adj hozzá újat!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade10;