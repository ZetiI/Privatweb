import React, { useState } from 'react';
import { FaCode, FaDatabase, FaServer, FaCheckCircle, FaLightbulb, FaQuestionCircle, FaPlay, FaDesktop } from 'react-icons/fa';

const Grade13 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    reactKomponensek: true,
    reactHooks: false,
    contextApi: false,
    asztaliAlkalmazasok: false,
    teljesitmeny: false,
    teszteles: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaDesktop className="text-blue-600 text-2xl" />
          </div>
    <div>
            <h1 className="text-4xl font-bold text-gray-800">Frontend és Asztali Alkalmazások</h1>
            <p className="text-green-600 font-medium">13. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a Frontend és Asztali Alkalmazások fejlesztése kurzuson! Ebben a tananyagban 
          a modern webalkalmazások és asztali alkalmazások fejlesztésének technikáit sajátíthatod el, 
          különös tekintettel a React és Electron technológiákra.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCode className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Frontend Fejlesztés</h3>
            </div>
              <p className="text-gray-600">
              React komponensek, hooks, állapotkezelés és modern frontend technológiák.
              </p>
            </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaDesktop className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Asztali Alkalmazások</h3>
            </div>
              <p className="text-gray-600">
              Electron alapú asztali alkalmazások fejlesztése React-tel.
              </p>
            </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCheckCircle className="text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">Tesztelés és Optimalizálás</h3>
            </div>
              <p className="text-gray-600">
              Komponens tesztelés, teljesítmény optimalizálás és best practices.
              </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab('tananyag')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'tananyag'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tananyag
        </button>
        <button
          onClick={() => setActiveTab('feladatok')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'feladatok'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Feladatok
        </button>
        <button
          onClick={() => setActiveTab('megoldasok')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'megoldasok'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Megoldások
        </button>
        <button
          onClick={() => setActiveTab('gyakorlas')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'gyakorlas'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Gyakorlás
        </button>
        <button
          onClick={() => setActiveTab('asztali')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'asztali'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Asztali Alkalmazások
        </button>
      </div>

      {activeTab === 'tananyag' && (
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('reactKomponensek')}
            >
              <h3 className="text-2xl font-bold text-gray-800">React Komponensek</h3>
              <span className="text-gray-500">
                {expandedSections.reactKomponensek ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.reactKomponensek && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A React komponensek a modern webalkalmazások építőkövei. Nézzük meg a legfontosabb 
                    komponens típusokat és azok használatát gyakorlati példákon keresztül.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Komponens Tervezési Tipp</h4>
                        <p className="text-gray-700">
                          Törekedj az újrafelhasználható, egységes felelősségű komponensek írására. 
                          Használj prop-okat a komponensek konfigurálásához és kerüld a belső állapot 
                          túlzott használatát.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">1. Card Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A Card komponens egy újrafelhasználható kártya komponens, amely egy ital adatait jeleníti meg.
                  A komponens props-okon keresztül kapja meg az adatokat, és Tailwind CSS osztályokat használ a stílusozáshoz.
                </p>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                  {`const Card = ({drink}) => {
    return (
        <div className="card bg-base-100 w-64 h-72 shadow-xl">
            <figure>
                <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{drink.strDrink}</h2>
            </div>
        </div>
    )
}

export default Card`}
                </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">2. CardList Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A CardList komponens egy lista komponens, amely több Card komponenst jelenít meg.
                  A komponens egy listát kap props-okon keresztül, és minden elemhez létrehoz egy Card komponenst.
                </p>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                  {`import Card from './Card'

const CardList = ({list}) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>
        {
            list.length > 0 ? 
            list.map(cocktail => (
              <Card key={cocktail.idDrink} drink={cocktail}/>
            )) : 
            "Nincs megjeleníthető elem"
        }
    </div>
  )
}

export default CardList`}
                </pre>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Komponens Típusok</h5>
                      <ul className="text-sm space-y-1">
                        <li>Funkcionális komponensek</li>
                        <li>Osztály komponensek</li>
                        <li>HOC (Higher-Order Components)</li>
                        <li>Render props komponensek</li>
                      </ul>
              </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Props Kezelés</h5>
                      <ul className="text-sm space-y-1">
                        <li>Props validáció</li>
                        <li>Alapértelmezett props</li>
                        <li>Children prop</li>
                        <li>Props drilling elkerülése</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Komponens Életciklus</h5>
                      <ul className="text-sm space-y-1">
                        <li>Mounting</li>
                        <li>Updating</li>
                        <li>Unmounting</li>
                        <li>Error handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('reactHooks')}
            >
              <h3 className="text-2xl font-bold text-gray-800">React Hooks és Állapotkezelés</h3>
              <span className="text-gray-500">
                {expandedSections.reactHooks ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.reactHooks && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A React Hooks bevezetése forradalmasította a React fejlesztést, lehetővé téve 
                    az állapot és életciklus funkciók használatát funkcionális komponensekben.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Alapvető Hooks</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// useState hook példa
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });

// useEffect hook példa
useEffect(() => {
    document.title = \`Count: \${count}\`;
}, [count]);  // Csak count változásakor fut le

// useRef hook példa
const inputRef = useRef(null);
const focusInput = () => {
    inputRef.current.focus();
};

// useCallback hook példa
const memoizedCallback = useCallback(
    () => {
        doSomething(count);
    },
    [count],
);

// useMemo hook példa
const memoizedValue = useMemo(
    () => computeExpensiveValue(count),
    [count],
);`}
                  </pre>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
        <div>
                        <h4 className="font-semibold text-gray-800">Hook Szabályok</h4>
                        <p className="text-gray-700">
                          1. Csak React függvény komponensek tetején használj hook-okat
                          2. Ne használj hook-okat feltételes szerkezetekben
                          3. Mindig add meg a függőségi tömböt useEffect-nél
                        </p>
            </div>
        </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Saját Hook Készítése</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// Egyedi hook a localStorage kezelésére
function useLocalStorage(key, initialValue) {
    // Állapot inicializálása
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Érték beállítása és mentése
    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// Használat
function App() {
    const [name, setName] = useLocalStorage('name', 'Bob');
    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />
    );
}`}
                  </pre>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Állapot Hooks</h5>
                      <ul className="text-sm space-y-1">
                        <li>useState</li>
                        <li>useReducer</li>
                        <li>useContext</li>
                        <li>useRef</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Effekt Hooks</h5>
                      <ul className="text-sm space-y-1">
                        <li>useEffect</li>
                        <li>useLayoutEffect</li>
                        <li>useImperativeHandle</li>
                        <li>useDebugValue</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Teljesítmény Hooks</h5>
                      <ul className="text-sm space-y-1">
                        <li>useMemo</li>
                        <li>useCallback</li>
                        <li>useTransition</li>
                        <li>useDeferredValue</li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('contextApi')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Context API és Állapotkezelés</h3>
              <span className="text-gray-500">
                {expandedSections.contextApi ? '▲' : '▼'}
              </span>
              </div>

            {expandedSections.contextApi && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A Context API lehetővé teszi az adatok globális megosztását a komponensfában, 
                    elkerülve a prop drilling problémát. Nézzük meg a Category komponens példáját 
                    Context API használatával.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Context Létrehozása</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// CocktailContext.js
import { createContext, useState, useEffect } from 'react';

export const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            );
            const data = await response.json();
            setCategories(data.drinks || []);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <CocktailContext.Provider value={{
            categories,
            loading,
            error
        }}>
            {children}
        </CocktailContext.Provider>
    );
};`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Context Használata</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`import { useContext } from "react"
import { CocktailContext } from "../context/CocktailContext";

const Category = () => {
    const { categories, loading, error } = useContext(CocktailContext);
    const [selectedCategory, setSelectedCategory] = useState("Cocktail");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col gap-5 items-center">
            <select 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                className="select select-bordered w-full max-w-xs"
            >
                {categories.map(category => (
                    <option key={category.strCategory} value={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>
            <CardList category={selectedCategory} />
        </div>
    );
};`}
                </pre>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Context Használati Tipp</h4>
                <p className="text-gray-700">
                          A Context API-t használd globális állapotkezelésre, de ne vidd túlzásba. 
                          Lokális állapotokhoz továbbra is a useState hook a megfelelő választás.
                </p>
              </div>
            </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Context Előnyei</h5>
                      <ul className="text-sm space-y-1">
                        <li>Prop drilling elkerülése</li>
                        <li>Globális állapotkezelés</li>
                        <li>Komponensek újrafelhasználhatósága</li>
                        <li>Könnyű integrálás más hook-okkal</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Mikor Használjuk?</h5>
                      <ul className="text-sm space-y-1">
                        <li>Témakezelés (dark/light mode)</li>
                        <li>Felhasználói beállítások</li>
                        <li>Authentikáció</li>
                        <li>Nyelvi beállítások</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">NPM Parancsok és Függőségek</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Vite + React + Tailwind Projekt</h4>
                <p className="text-gray-700 mb-4">
                  Új projekt létrehozása és alapvető függőségek telepítése:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`# Új Vite projekt létrehozása React-tel
npm create vite@latest my-project -- --template react

# Projekt könyvtárba lépés
cd my-project

# Függőségek telepítése
npm install

# Tailwind CSS telepítése
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Gyakran használt további csomagok
npm install react-router-dom    # Routing
npm install axios              # HTTP kérések
npm install @heroicons/react   # Ikonok
npm install daisyui           # UI komponensek
npm install react-query       # Adatkezelés
npm install react-hook-form   # Űrlapkezelés
npm install zod               # Validáció

# Fejlesztői szerver indítása
npm run dev

# Build készítése
npm run build`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. XAMPP Backend</h4>
                <p className="text-gray-700 mb-4">
                  PHP és MySQL alapú backend fejlesztéshez szükséges csomagok:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`# Composer (PHP csomagkezelő) telepítése
# Windows: https://getcomposer.org/Composer-Setup.exe

# Új projekt inicializálása
composer init

# Gyakran használt PHP csomagok
composer require vlucas/phpdotenv    # Környezeti változók
composer require firebase/php-jwt    # JWT autentikáció
composer require phpmailer/phpmailer # Email küldés
composer require monolog/monolog     # Logolás

# XAMPP telepítése
# Windows: https://www.apachefriends.org/download.html

# XAMPP indítása
# Apache és MySQL szolgáltatások indítása a XAMPP Control Panel-ből`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Prisma Backend</h4>
                <p className="text-gray-700 mb-4">
                  Node.js és Prisma alapú backend fejlesztéshez szükséges csomagok:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`# Új Node.js projekt inicializálása
npm init -y

# TypeScript telepítése
npm install -D typescript @types/node ts-node

# Prisma telepítése
npm install prisma
npm install @prisma/client

# Prisma inicializálása
npx prisma init

# Adatbázis migráció létrehozása
npx prisma migrate dev --name init

# Prisma Studio indítása (adatbázis kezelő felület)
npx prisma studio

# Gyakran használt további csomagok
npm install express              # Web szerver
npm install cors                # CORS kezelés
npm install dotenv             # Környezeti változók
npm install jsonwebtoken       # JWT autentikáció
npm install bcryptjs           # Jelszó titkosítás
npm install express-validator  # Validáció
npm install morgan             # Logolás
npm install nodemailer         # Email küldés

# Fejlesztői szerver indítása
npm run dev

# Build készítése
npm run build`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">4. Gyakran Használt NPM Parancsok</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`# Csomagok telepítése
npm install csomagnév
npm install csomagnév --save-dev  # fejlesztői függőségként
npm install csomagnév@verzió     # specifikus verzió

# Csomagok frissítése
npm update
npm update csomagnév

# Csomagok eltávolítása
npm uninstall csomagnév

# Függőségek listázása
npm list
npm list --depth=0              # csak a legfelső szintű függőségek

# Script futtatása
npm run scriptnév

# Globális csomagok
npm install -g csomagnév        # globális telepítés
npm uninstall -g csomagnév      # globális eltávolítás

# package.json frissítése
npm init                        # interaktív inicializálás
npm init -y                     # alapértelmezett értékekkel

# Függőségek tisztítása
npm cache clean --force         # npm cache törlése
rm -rf node_modules            # node_modules mappa törlése
npm install                    # függőségek újratelepítése`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">CSS és Reszponzív Design</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Tailwind CSS Alapok</h4>
                <p className="text-gray-700 mb-4">
                  A Tailwind CSS egy utility-first CSS keretrendszer, amely lehetővé teszi a gyors és egységes stílusozást.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Gyakran használt Tailwind osztályok

// Layout
flex flex-col          // Flexbox oszlop elrendezés
flex flex-row          // Flexbox sor elrendezés
grid grid-cols-3       // Grid 3 oszloppal
gap-4                  // Elemek közötti térköz
p-4                    // Padding minden irányban
px-4 py-2             // Padding X és Y tengelyen
m-4                    // Margin minden irányban
mx-auto               // Középre igazítás

// Színek
text-primary          // Elsődleges szövegszín
bg-white              // Fehér háttér
text-gray-600         // Szürke szöveg
border-gray-200       // Szürke keret

// Tipográfia
text-sm               // Kis szöveg
text-lg               // Nagy szöveg
font-bold             // Félkövér
text-center           // Középre igazított szöveg

// Reszponzív
sm:flex-row           // Small képernyőn sor elrendezés
md:grid-cols-2        // Medium képernyőn 2 oszlop
lg:grid-cols-3        // Large képernyőn 3 oszlop
xl:container          // Extra large képernyőn konténer

// Interaktív
hover:bg-gray-100     // Hover effekt
focus:ring-2          // Fókusz gyűrű
active:scale-95       // Kattintás effekt

// Animációk
transition-all        // Minden tulajdonság animálása
duration-300          // 300ms animáció idő
ease-in-out          // Animáció időzítés
grid: CSS Grid elrendezés

grid-cols-1: 1 oszlop mobil méret alatt

sm:grid-cols-2: 2 oszlop kis képernyőn (640px+)

md:grid-cols-3: 3 oszlop közepes képernyőn (768px+)

lg:grid-cols-4: 4 oszlop nagy képernyőn (1024px+)

gap-4: 1rem (16px) térköz az elemek között

p-4: 1rem (16px) padding a konténeren belül

flex: Flexbox elrendezés

flex-wrap: Többsoros flex elemek

justify-center: Középre igazítás

w-full: Teljes szélesség

sm:w-1/2: 50% szélesség kis képernyőn

md:w-1/3: 33% szélesség közepes képernyőn

lg:w-1/4: 25% szélesség nagy képernyőn

pl: className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
className="flex flex-wrap justify-center gap-4 p-4
-className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
// `}


                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Reszponzív Design</h4>
                <p className="text-gray-700 mb-4">
                  A reszponzív design lehetővé teszi, hogy a weboldal megfelelően jelenjen meg minden képernyőméreten.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Reszponzív breakpointok
sm: 640px    // Small devices
md: 768px    // Medium devices
lg: 1024px   // Large devices
xl: 1280px   // Extra large devices
2xl: 1536px  // 2X Extra large devices

// Reszponzív grid példa
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white p-4">1. elem</div>
  <div className="bg-white p-4">2. elem</div>
  <div className="bg-white p-4">3. elem</div>
</div>

// Reszponzív flex példa
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/2">Bal oldal</div>
  <div className="w-full md:w-1/2">Jobb oldal</div>
</div>

// Reszponzív szöveg
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Reszponzív címsor
</h1>

// Reszponzív padding/margin
<div className="p-4 md:p-6 lg:p-8">
  Tartalom
</div>

// Reszponzív elrejtés/megjelenítés
<div className="hidden md:block">
  Csak medium és nagyobb képernyőkön látható
</div>

// Reszponzív képek
<img 
  className="w-full h-auto object-cover"
  src="kep.jpg"
  alt="Reszponzív kép"
/>`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">SQL Lekérdezések és API Műveletek</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Komplex SQL Lekérdezések</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet összetett SQL lekérdezéseket írni több tábla összekapcsolásával.
                  A példában egy rendelés adatait kérjük le, amely tartalmazza a termék és kategória információkat is.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Egy adott rendelés lekérdezése
app.get("/rendeles/:rendeles_azonosito", (req,res) =>{
    const rendeles_azonosito = req.params.razon
    db.all(
        SELECT rendelesek.rendeles_azonosito, rendelesek.rendelésdátum, rendelesek.termek_azonosito, rendelesek.darabszám, 
                termekek.terméknév as termek_nev, kategoriak.kategoria_nev as kategoria_nev 
         FROM rendelesek, termekek, kategoriak 
         WHERE rendelesek.termek_azonosito = termekek.termek_azonosito 
         AND termekek.katergoiraazonostio = kategoriak.katergoiraazonostio 
         AND rendelesek.rendeles_azonosito = ?,
        [rendeles_azonosito],
        (error, rows) =>{
            if (error){
                res.json({error})
            }else{
                res.json({rows})
            }
        }
    )
})`}
                </pre>
                <p className="text-gray-700">
                  A lekérdezés három táblát kapcsol össze (rendelesek, termekek, kategoriak) és részletes információkat ad vissza
                  egy adott rendelésről. A JOIN műveletek segítségével összekapcsoljuk a kapcsolódó adatokat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. PATCH Művelet Implementálása</h4>
                <p className="text-gray-700 mb-4">
                  A PATCH művelet lehetővé teszi egy erőforrás részleges frissítését. A következő példa bemutatja,
                  hogyan lehet dinamikusan összeállítani egy UPDATE lekérdezést a megadott mezők alapján.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`
});
app.patch("/rendeles/:rendeles_azonosito", (req,res) =>{
    const rendeles_azonosito = req.params.razon
    const {rendelesdatum, termek_azonosito, db} = req.body
    const sql = 'UPDATE rendelesek SET rendelesdatum = ?, termek_azonosito = ?, db = ? WHERE rendeles_azonosito = ?'
    
    db.run(sql, [rendelesdatum, termek_azonosito, db, rendeles_azonosito], (error) =>{
        if (error){
            res.json({error})
            console.log(error)
        }else{
            res.json({message: "Rendelés adatai módosítva!"})
        }
    })
})

app.post("/kategoriak", (req,res) =>{
    const {kategoriakazonostio, kategoria_nev} = req.body
    const sql = (INSERT INTO kategoriak (kategoriakazonostio, kategoria_nev) VALUES (?, ?))

    db.run(sql, [kategoriakazonostio, kategoria_nev], (error) =>{
        if (error){
            res.json({error})
            console.log(error)
        }else{
            res.json({message: "Új kategória hozzáadva!"})
        }
    })
})
`
}
                </pre>
                <p className="text-gray-700">
                  A kód bemutatja a következő fontos koncepciókat:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Dinamikus SQL lekérdezés összeállítása a megadott mezők alapján</li>
                  <li>Paraméterek biztonságos kezelése prepared statements segítségével</li>
                  <li>Hibakezelés és megfelelő HTTP státuszkódok visszaadása</li>
                  <li>Válasz objektum strukturálása</li>
                </ul>
              </div>
            </div>
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
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Koktél Kereső Alkalmazás</h4>
                    <p className="text-gray-600 mt-1">
                      Készíts egy teljes funkcionalitású koktél kereső alkalmazást a következő funkciókkal:
                    </p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Keresés név és kategória szerint</li>
                  <li>Részletes koktél nézet</li>
                  <li>Kedvencek mentése localStorage-ba</li>
                  <li>Kategória szűrés</li>
                  <li>Reszponzív design</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Segítség
                  </h5>
                  <p className="text-blue-700 text-sm">
                    Használd a TheCocktailDB API-t az adatok lekéréséhez. Implementálj 
                    error handling-et és loading állapotokat. A kedvencek kezeléséhez 
                    készíts egyedi hook-ot.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Jegyzetelő Asztali Alkalmazás</h4>
                    <p className="text-gray-600 mt-1">
                      Készíts egy Electron alapú jegyzetelő alkalmazást a következő funkciókkal:
                    </p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Markdown szerkesztő és előnézet</li>
                  <li>Fájl mentés és betöltés</li>
                  <li>Automatikus mentés</li>
                  <li>Kategóriák és címkék kezelése</li>
                  <li>Sötét/világos téma</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                    <FaLightbulb className="mr-2" /> Tipp
                  </h5>
                  <p className="text-yellow-700 text-sm">
                    Használj React-Markdown-ot a markdown rendereléshez, és implementálj 
                    IPC kommunikációt a fájlrendszer műveletekhez. A témakezeléshez 
                    használj Context API-t.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Chat Alkalmazás</h4>
                    <p className="text-gray-600 mt-1">
                      Készíts egy valós idejű chat alkalmazást Socket.IO használatával:
                    </p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Valós idejű üzenetküldés</li>
                  <li>Szobák kezelése</li>
                  <li>Felhasználói státuszok</li>
                  <li>Üzenet előzmények</li>
                  <li>Fájl küldés</li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                    <FaLightbulb className="mr-2" /> Tipp
                  </h5>
                  <p className="text-green-700 text-sm">
                    Használj custom hook-okat a Socket.IO kapcsolat kezeléséhez. 
                    Implementálj error boundary-t a hibakezeléshez és optimistic UI 
                    frissítéseket.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Backend Megoldások</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Feladatkezelő Megoldás</h4>
                
                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Új feladat létrehozása
app.post("/tasks", (req, res) => {
  const { cim, leiras, hatarido } = req.body;
  const sql = \`INSERT INTO tasks (cim, leiras, hatarido) VALUES (?, ?, ?)\`;
  db.run(sql, [cim, leiras, hatarido], function (error) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({
      message: "Feladat sikeresen létrehozva!",
      id: this.lastID
    });
  });
});

// Összes feladat lekérdezése
app.get("/tasks", (req, res) => {
  const sql = \`SELECT * FROM tasks\`;
  db.all(sql, [], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(rows);
  });
});

// Feladat szerkesztése
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { cim, leiras, hatarido } = req.body;
  const sql = \`UPDATE tasks SET cim = ?, leiras = ?, hatarido = ? WHERE id = ?\`;
  const params = [cim, leiras, hatarido, id];

  db.run(sql, params, function (error) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "A feladat nem található." });
    }
    res.json({ message: "Feladat sikeresen frissítve!" });
  });
});

// Feladat törlése


import { useNavigate } from "react-router-dom";

const Kártyatörlés = ({ felhasználó, setRefresh }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE;

  const deletefelhasználó = async (azonosító) => {
    const response = await fetch($"{baseUrl}/végpontnév/id/$"{azonosító}, {
      method: DELETE
    });

    const data = await response.json();
    setRefresh(prev => !prev);
    alert(data.message);
    navigate("/"); // Navigálás főoldalra
  };

  return (
    <div className="bg-green-100 rounded-xl shadow p-4">
      <h2 className="text-xl font-bold">{felhasználó.nev}</h2>
      <p className="text-sm"> azonosító: {felhasználó.azonosító}</p>
      <button
        className="btn btn-error mt-2"
        onClick={() => deletefelhasználó(felhasználó.azonosító)}
      >
        Törlés
      </button>
    </div>
  );
};

export default Kártyatörlés;

ehhez fontos a .env file létrehozása az src-n belül
VITE_API_BASE=http://localhost:8000/


`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Blog Megoldás</h4>

                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// 1. Új bejegyzés létrehozása
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const sql = \`INSERT INTO posts (title, content) VALUES (?, ?)\`;

    db.run(sql, [title, content], function (error) {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ 
            message: "Bejegyzés sikeresen létrehozva!",
            id: this.lastID
        });
    });
});

// 2. Összes bejegyzés lekérdezése
app.get('/posts', (req, res) => {
    const sql = \`SELECT * FROM posts ORDER BY created_at DESC\`;
    db.all(sql, [], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

// 3. Bejegyzés lekérdezése azonosító alapján
app.get('/posts/:id', (req, res) => {
    const sql = \`SELECT * FROM posts WHERE id = ?\`;
    db.get(sql, [req.params.id], (error, post) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (!post) {
            return res.status(404).json({ error: "A bejegyzés nem található." });
        }
        res.json(post);
    });
});

// 4. Bejegyzés törlése azonosító alapján
app.delete('/posts/:id', (req, res) => {
    const sql = \`DELETE FROM posts WHERE id = ?\`;
    db.run(sql, [req.params.id], function (error) {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "A bejegyzés nem található." });
        }
        res.json({ message: "Bejegyzés sikeresen törölve!" });
    });
});`}
                </pre>

                <h5 className="font-semibold mb-2">Alkalmazás indítása:</h5>
                <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// index.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Adatbázis kapcsolat
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Hiba az adatbázis kapcsolódásakor:', err);
  } else {
    console.log('Sikeres kapcsolódás az adatbázishoz');
  }
});

// Végpontok itt...

app.listen(port, () => {
  console.log(\`Szerver fut a http://localhost:\${port} címen\`);
});`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'gyakorlas' && (
        <div className="space-y-8">
          {/* Meglévő gyakorlatok... */}
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <FaCode className="text-blue-600 mr-2" /> Gyakorlati Projekt #13
            </h4>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">1. Környezeti Változók Beállítása</h5>
                <p className="text-gray-600 mb-4">
                  Hozz létre egy .env fájlt a következő tartalommal:
                </p>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// frontend/src/.env
VITE_API_BASE=http://localhost:8000/`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">2. Hero Komponens #27</h5>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`import React from "react";
import kep from "./assets/felveteli.png";

const FelveteliHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-40 px-4 py-40">
      <div className="text-center md:text-left md:max-w-md space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Felvételi <span className="text-green-600">2025</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Tanulói felvételi adatok a{" "}
          <span className="text-green-700">2025–26</span> tanévre
        </p>
      </div>
      <div>
        <img src={kep} alt="Felvételi illusztráció" className="w-56 md:w-72" />
      </div>
    </div>
  );
};

export default FelveteliHero;`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">3. Routing és Navigáció #42</h5>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Books from "../assets/valami.jpg";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tanulok" element={<Tanulok />} />
        <Route path="/tanuloform" element={<TanuloForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const Navbar = () => {
  return (
    <div className="navbar bg-green-600 text-white shadow-sm">
      <div className="flex-1 flex items-center gap-2 ml-2">
        <img src={Books} alt="Logo" className="h-8" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/tanulok">Tanulók</Link></li>
          <li><span>Jelentkezések</span></li>
          <li><Link to="/tanuloform">Új tanuló</Link></li>
        </ul>
      </div>
    </div>
  );
};`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">4. Lista és Kártya Komponensek #56</h5>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Tanulok.jsx
import { useEffect, useState } from "react";
import TanuloCard from "./TanuloCard";

const Tanulok = () => {
  const [tanulok, setTanulok] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(\`\${baseUrl}/tanulok\`);
      const data = await response.json();
      setTanulok(data);
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="p-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {tanulok.length > 0 ? (
          tanulok.map((student) => (
            <TanuloCard key={student.oktazon} student={student} setRefresh={setRefresh} />
          ))
        ) : (
          <p>Nincs adat</p>
        )}
      </div>
    </div>
  );
};

// TanuloCard.jsx
const TanuloCard = ({ student, setRefresh }) => {
  const baseUrl = import.meta.env.VITE_API_BASE;

  const deleteStudent = async (oktazon) => {
    const response = await fetch(\`\${baseUrl}/tanulo/id/\${oktazon}\`, {
      method: "DELETE"
    });

    const data = await response.json();
    alert(data.message);
    setRefresh(prev => !prev);
  };

  return (
    <div className="bg-green-300 w-80 rounded-xl shadow-md p-5 pt-10 relative">
      <div className="absolute -top-5 right-5 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-md overflow-hidden">
        <img src={Studying} alt="Studying" className="w-8 h-8" />
      </div>
      <h2 className="text-lg font-bold mb-3">{student.nev}</h2>
      <p>Oktatási azonosító: <span className="font-semibold">{student.oktazon}</span></p>
      <p>Hozott pont: <span className="font-semibold">{student.hozott}</span></p>
      <p>Központi felvételi magyar: <span className="font-semibold">{student.kpmagy}</span></p>
      <p>Központi felvételi matek: <span className="font-semibold">{student.kpmat}</span></p>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-4 rounded-md text-sm"
          onClick={() => deleteStudent(student.oktazon)}
        >
          Törlés
        </button>
      </div>
    </div>
  );
};`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">5. Űrlap Komponens #71</h5>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TanuloForm = () => {
  const [formData, setFormData] = useState({
    oktazon: "",
    nev: "",
    hozott: "",
    kpmagy: "",
    kpmat: ""
  });

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(\`\${baseUrl}/tanulo\`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    alert(data.message);
    navigate("/");
  };

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-center text-white bg-green-600 py-2 rounded mb-4">
        ÚJ TANULÓ FELVITELE
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="oktazon" placeholder="Oktatási azonosító" className="input input-bordered w-full" onChange={handleChange} required />
        <input type="text" name="nev" placeholder="Név" className="input input-bordered w-full" onChange={handleChange} required />
        <input type="number" name="hozott" placeholder="Hozott pontszám" className="input input-bordered w-full" onChange={handleChange} required />
        <input type="number" name="kpmagy" placeholder="Központi magyarból" className="input input-bordered w-full" onChange={handleChange} required />
        <input type="number" name="kpmat" placeholder="Központi matekból" className="input input-bordered w-full" onChange={handleChange} required />
        <button type="submit" className="btn btn-success w-full">Küldés</button>
      </form>
    </div>
  );
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'asztali' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Asztali alkalmazások fejlesztése</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. WPF (Windows Presentation Foundation)</h4>
                <p className="text-gray-700 mb-4">
                  A WPF egy modern UI keretrendszer a Windows asztali alkalmazások fejlesztéséhez. 
                  XAML alapú felhasználói felületeket lehet vele létrehozni, és erősen integrált a .NET platformmal.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Dron.cs - Adatmodell
    public class Dronok
    {
        // Drón neve,Típus,Gyártási év,Maximális sebesség (km/h),Akkumulátor kapacitás (mAh),Repülési idő (perc)
        public string Dron_nev { get; set; }
        public string Tipus { get; set; }
        public int GyartasiEv { get; set; }
        public int Maxsebesseg { get; set; }
        public int AkkumulatorK { get; set; }
        public int RepulesiIdo { get; set; }

        public Dronok(string sor, char hatarolo)
        {
            var adatok = sor.Split(hatarolo);
            Dron_nev = adatok[0];
            Tipus = adatok[1];
            GyartasiEv = Convert.ToInt32(adatok[2]);
            Maxsebesseg = Convert.ToInt32(adatok[3]);
            AkkumulatorK = Convert.ToInt32(adatok[4]);
            RepulesiIdo = Convert.ToInt32(adatok[5]);
        }
    }
}

// MainWindow.xaml - Felhasználói felület
    <Grid>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="0.5*"/>
            <ColumnDefinition Width="*"/>
            <ColumnDefinition Width="*"/>
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <StackPanel Grid.Column="0" Grid.Row="0" Margin="10">
            <TextBlock Text="Drónok" HorizontalAlignment="Center" FontWeight="Bold" FontSize="20"/>
            <ComboBox x:Name="comboTipusSzuro" Width="100" SelectionChanged="comboTipusSzuro_SelectionChanged"/>
        </StackPanel>

        <Button x:Name="buttonmegnyitas" Height="50" Width="100" Content="Megnyitás" Grid.Column="0" Grid.Row="1" Margin="10" Click="buttonmegnyitas_Click"/>
        <DataGrid x:Name="datagridDronok" Grid.Column="1" Grid.ColumnSpan="2" Grid.RowSpan="2" ColumnWidth="*" Margin="10"/>
    </Grid>
`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód egy drón kezelő alkalmazást mutat be. A Dron osztály az adatmodellt definiálja, 
                  míg a XAML kód a felhasználói felületet. A DataGrid komponens jeleníti meg az adatokat, 
                  és a ComboBox lehetővé teszi a szűrést típus szerint.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Adatkezelés és eseménykezelés</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// MainWindow.xaml.cs - Adatkezelés és eseménykezelés
    public partial class MainWindow : Window
    {
        List<Dronok> dronok = new List<Dronok>();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonmegnyitas_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog fileDialog = new OpenFileDialog();

            if (fileDialog.ShowDialog() == true)
            {
                var sorok = File.ReadAllLines(fileDialog.FileName);
                dronok.Clear();

                for (int i = 1; i < sorok.Length; i++)
                {
                    dronok.Add(new Dronok(sorok[i], ','));
                }

                datagridDronok.ItemsSource = dronok;

                // Típusok ComboBox feltöltése
                var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t).ToList();
                tipusok.Insert(0, "Összes");
                comboTipusSzuro.ItemsSource = tipusok;
                comboTipusSzuro.SelectedIndex = 0;
            }
        }

        private void comboTipusSzuro_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            string kivalasztott = comboTipusSzuro.SelectedItem as string;

            if (kivalasztott == "Összes")
            {
                datagridDronok.ItemsSource = dronok;
            }
            else
            {
                datagridDronok.ItemsSource = dronok.Where(d => d.Tipus == kivalasztott).ToList();
            }
        }
    }
}
`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód bemutatja a fájl betöltését és az adatok kezelését. A Betoltes_Click eseménykezelő 
                  megnyitja a fájl kiválasztó ablakot, beolvassa a CSV fájlt, és feltölti a DataGrid-et. 
                  A TipusComboBox_SelectionChanged eseménykezelő pedig a szűrést végzi a kiválasztott típus szerint.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. OOP - Hadihajók kezelése</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja az objektumorientált programozás alapjait egy hadihajók kezelésére 
                  szolgáló rendszeren keresztül. Az absztrakt osztályok és az öröklődés használatával 
                  különböző típusú hadihajókat modellezünk.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// Hajo.cs - Absztrakt alaposztály
public abstract class Hajo
{
    // Alapvető tulajdonságok
    public string Nev { get; set; }
    public int Hossz { get; set; }
    public int VizKiszoritas { get; set; }
    public double MaxSebesseg { get; set; }
    public string Orszag { get; set; }

    // Konstruktor
    protected Hajo(string nev, int hossz, int vizKiszoritas, double maxSebesseg, string orszag)
    {
        Nev = nev;
        Hossz = hossz;
        VizKiszoritas = vizKiszoritas;
        MaxSebesseg = maxSebesseg;
        Orszag = orszag;
    }

    // Absztrakt metódusok
    public abstract void Tamad();
    public abstract void Vedekezik();

    // ToString metódus felülírása
    public override string ToString()
    {
        return $"Név: {Nev}, Hossz: {Hossz}, Súly: {VizKiszoritas}, " +
               $"Max. sebesség: {MaxSebesseg}, Ország: {Orszag}";
    }
}

// Csatahajo.cs - Csatahajó osztály
public class Csatahajo : Hajo
{
    // Egyedi tulajdonságok
    public int AgyukSzama { get; set; }
    public int PancelVastagsag { get; set; }

    // Konstruktor
    public Csatahajo(string nev, int hossz, int vizKiszoritas, 
                     double maxSebesseg, string orszag, 
                     int agyukSzama, int pancelVastagsag) 
        : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
    {
        AgyukSzama = agyukSzama;
        PancelVastagsag = pancelVastagsag;
    }

    // Absztrakt metódusok implementálása
    public override void Tamad()
    {
        Console.WriteLine("A csatahajó ágyúkkal támad");
    }

    public override void Vedekezik()
    {
        Console.WriteLine("A csatahajót megvédi a páncélja");
    }
}

// RepulogepHordozo.cs - Repülőgép-hordozó osztály
public class RepulogepHordozo : Hajo
{
    // Egyedi tulajdonságok
    public int RepulogepekSzama { get; set; }
    public int KifutoHossz { get; set; }

    // Konstruktor
    public RepulogepHordozo(string nev, int hossz, int vizKiszoritas, 
                           double maxSebesseg, string orszag, 
                           int repulogepekSzama, int kifutoHossz) 
        : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
    {
        RepulogepekSzama = repulogepekSzama;
        KifutoHossz = kifutoHossz;
    }

    // Absztrakt metódusok implementálása
    public override void Tamad()
    {
        Console.WriteLine("A rep. hordozó repülőgépei támadnak");
    }

    public override void Vedekezik()
    {
        Console.WriteLine("A rep. hordozót megvédi a védelmi rakétarendszer");
    }

    // Egyedi metódusok
    public void Felszallas()
    {
        Console.WriteLine("Repülőgépek felszállnak");
    }

    public void Leszallas()
    {
        Console.WriteLine("Repülőgépek leszállnak");
    }
}

// Tengeralattjaro.cs - Tengeralattjáró osztály
public class Tengeralattjaro : Hajo
    {
        public int MerulesiMelyseg { get; set; }
        public int TorpedokSzama { get; set; }
        public Tengeralattjaro(string nev, int hossz, int vizKiszoritas, int maxSebesseg, string orszag, int merulesiMelyseg, int torpedokSzama) : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
        {
            MerulesiMelyseg = merulesiMelyseg;
            TorpedokSzama = torpedokSzama;
        }

        public override void Tamad()
        {
            Console.WriteLine("A tengeralattjaró torpedókkal támad");
        }

        public override void Vedekezik()
        {
            Console.WriteLine("A tengeralattjáró elrejtőzik a mélységbe");
        }

        public void Merules()
        {
            Console.WriteLine("A tengeralattjaró merül");
        }
        public void Felszin()
        {
            Console.WriteLine("A tengeralattjaró a felszínre jön");
        }

        public override string ToString()
        {
            return base.ToString() + $", Merülési mélység: {MerulesiMelyseg}m, Torpedók száma: {TorpedokSzama}";
        }
    }

// Program.cs - Példa használat
class Program
{
    static void Main(string[] args)
    {
        // Különböző típusú hajók létrehozása
        List<Hajo> hajok = new List<Hajo>();
        
        hajok.Add(new Csatahajo("Missouri", 270, 45000, 33, "USA", 9, 430));
        hajok.Add(new RepulogepHordozo("Nimitz", 333, 97000, 30, "USA", 90, 300));
        hajok.Add(new Tengeralattjaro("Typhoon", 175, 48000, 27, "Oroszország", 400, 20));

        // Hajók kezelése
        foreach (var hajo in hajok)
        {
            Console.WriteLine(hajo.ToString());
            hajo.Tamad();
            hajo.Vedekezik();
            Console.WriteLine();
        }
    }
}`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód bemutatja az objektumorientált programozás alapelveit:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Absztrakció: A Hajo absztrakt osztály definiálja az alapvető tulajdonságokat és működéseket</li>
                  <li>Öröklődés: A konkrét hajó típusok (Csatahajo, RepulogepHordozo, Tengeralattjaro) öröklik a Hajo osztály tulajdonságait</li>
                  <li>Polimorfizmus: A különböző hajó típusok saját implementációt adnak a Tamad() és Vedekezik() metódusokhoz</li>
                  <li>Kapszulázás: A tulajdonságok és metódusok megfelelően el vannak rejtve és védve</li>
                </ul>
                <p className="text-gray-700">
                  A program fő előnyei:
                </p>
                <ul className="list-disc pl-6">
                  <li>Könnyű bővíthetőség új hajó típusokkal</li>
                  <li>Kód újrafelhasználhatóság</li>
                  <li>Tisztább és karbantarthatóbb kód</li>
                  <li>Egységes interfész a különböző hajó típusok kezeléséhez</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Asztali Alkalmazások</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. WPF Adatbetöltés</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet adatokat betölteni és kezelni egy WPF alkalmazásban.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`// MainWindow.xaml.cs
    public partial class MainWindow : Window
    {
        List<Dronok> dronok = new List<Dronok>();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonmegnyitas_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog fileDialog = new OpenFileDialog();

            if (fileDialog.ShowDialog() == true)
            {
                var sorok = File.ReadAllLines(fileDialog.FileName);
                dronok.Clear();

                for (int i = 1; i < sorok.Length; i++)
                {
                    dronok.Add(new Dronok(sorok[i], ','));
                }

                datagridDronok.ItemsSource = dronok;

                // Típusok ComboBox feltöltése
                var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t).ToList();
                tipusok.Insert(0, "Összes");
                comboTipusSzuro.ItemsSource = tipusok;
                comboTipusSzuro.SelectedIndex = 0;
            }
        }

        private void comboTipusSzuro_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            string kivalasztott = comboTipusSzuro.SelectedItem as string;

            if (kivalasztott == "Összes")
            {
                datagridDronok.ItemsSource = dronok;
            }
            else
            {
                datagridDronok.ItemsSource = dronok.Where(d => d.Tipus == kivalasztott).ToList();
            }
        }
    }
}
`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Konzolos Adatbetöltés</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet adatokat betölteni és kezelni egy konzol alkalmazásban.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                  {`using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Drón Adatkezelő Rendszer");
        Console.WriteLine("=======================");

        List<Dron> dronok = new List<Dron>();
        bool fut = true;

        while (fut)
        {
            Console.WriteLine("\nVálassz műveletet:");
            Console.WriteLine("1. Adatok betöltése fájlból");
            Console.WriteLine("2. Adatok megjelenítése");
            Console.WriteLine("3. Szűrés típus szerint");
            Console.WriteLine("4. Kilépés");
            Console.Write("\nVálasztás (1-4): ");

            string valasztas = Console.ReadLine();

            switch (valasztas)
            {
                case "1":
                    BetoltesFajlbol(dronok);
                    break;
                case "2":
                    Megjelenites(dronok);
                    break;
                case "3":
                    SzuresTipusSzerint(dronok);
                    break;
                case "4":
                    fut = false;
                    break;
                default:
                    Console.WriteLine("Érvénytelen választás!");
                    break;
            }
        }
    }

    static void BetoltesFajlbol(List<Dron> dronok)
    {
        Console.Write("Adja meg a fájl elérési útját: ");
        string fajlUt = Console.ReadLine();

        try
        {
            string[] sorok = File.ReadAllLines(fajlUt);
            dronok.Clear();

            foreach (string sor in sorok.Skip(1))
            {
                string[] adatok = sor.Split('\t');
                if (adatok.Length >= 6)
                {
                    dronok.Add(new Dron
                    {
                        DroneNeve = adatok[0],
                        Tipus = adatok[1],
                        GyartasiEv = int.Parse(adatok[2]),
                        MaxSebesseg = int.Parse(adatok[3]),
                        AkkumulatorKapacitas = int.Parse(adatok[4]),
                        RepulesiIdo = int.Parse(adatok[5])
                    });
                }
            }
            Console.WriteLine($"Sikeres betöltés: {dronok.Count} drón adata.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Hiba történt: {ex.Message}");
        }
    }

    static void Megjelenites(List<Dron> dronok)
    {
        if (dronok.Count == 0)
        {
            Console.WriteLine("Nincsenek betöltött adatok!");
            return;
        }

        Console.WriteLine("\nDrónok listája:");
        Console.WriteLine("===============");
        foreach (var dron in dronok)
        {
            Console.WriteLine($"Név: {dron.DroneNeve}");
            Console.WriteLine($"Típus: {dron.Tipus}");
            Console.WriteLine($"Gyártási év: {dron.GyartasiEv}");
            Console.WriteLine($"Max. sebesség: {dron.MaxSebesseg} km/h");
            Console.WriteLine($"Akkumulátor: {dron.AkkumulatorKapacitas} mAh");
            Console.WriteLine($"Repülési idő: {dron.RepulesiIdo} perc");
            Console.WriteLine("---------------");
        }
    }

    static void SzuresTipusSzerint(List<Dron> dronok)
    {
        if (dronok.Count == 0)
        {
            Console.WriteLine("Nincsenek betöltött adatok!");
            return;
        }

        var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t);
        Console.WriteLine("\nElérhető típusok:");
        int index = 1;
        foreach (var tipus in tipusok)
        {
            Console.WriteLine($"{index}. {tipus}");
            index++;
        }

        Console.Write("\nVálassz típust (szám): ");
        if (int.TryParse(Console.ReadLine(), out int valasztottIndex) && 
            valasztottIndex > 0 && valasztottIndex <= tipusok.Count())
        {
            string kivalasztottTipus = tipusok.ElementAt(valasztottIndex - 1);
            var szurtDronok = dronok.Where(d => d.Tipus == kivalasztottTipus);
            
            Console.WriteLine($"\n{kivalasztottTipus} típusú drónok:");
            Console.WriteLine("===============");
            foreach (var dron in szurtDronok)
            {
                Console.WriteLine($"Név: {dron.DroneNeve}");
                Console.WriteLine($"Gyártási év: {dron.GyartasiEv}");
                Console.WriteLine($"Max. sebesség: {dron.MaxSebesseg} km/h");
                Console.WriteLine("---------------");
            }
        }
        else
        {
            Console.WriteLine("Érvénytelen választás!");
        }
    }
}`}
                </pre>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('asztaliAlkalmazasok')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Asztali Alkalmazások Electron-nal</h3>
              <span className="text-gray-500">
                {expandedSections.asztaliAlkalmazasok ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.asztaliAlkalmazasok && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Az Electron lehetővé teszi webes technológiák használatát asztali alkalmazások 
                    fejlesztéséhez. A React és Electron kombinációja különösen hatékony megoldást nyújt.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Electron Alapok</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// main.js - Electron főfolyamat
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // React alkalmazás betöltése
    win.loadURL(
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : \`file://$\{path.join(__dirname, '../build/index.html')}\`
    );

    // DevTools megnyitása fejlesztési módban
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">IPC Kommunikáció</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// preload.js - IPC kommunikáció beállítása
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    sendMessage: (message) => ipcRenderer.send('message', message),
    onResponse: (callback) => ipcRenderer.on('response', callback)
});

// React komponens
function App() {
    useEffect(() => {
        // Üzenet küldése a főfolyamatnak
        window.electron.sendMessage('Hello from React!');

        // Válasz fogadása
        window.electron.onResponse((event, response) => {
            console.log('Response from main:', response);
        });
    }, []);

    return (
        <div>
            <h1>Electron + React App</h1>
        </div>
    );
}`}
                  </pre>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Electron Biztonsági Tipp</h4>
                        <p className="text-gray-700">
                          Mindig használj contextIsolation-t és preload szkripteket a biztonságos 
                          IPC kommunikációhoz. Ne engedélyezd a nodeIntegration-t közvetlenül.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Natív Funkciók Használata</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// Fájlrendszer műveletek
const fs = require('fs');
const { dialog } = require('electron');

ipcMain.handle('save-file', async (event, content) => {
    try {
        const { filePath } = await dialog.showSaveDialog({
            defaultPath: 'document.txt'
        });

        if (filePath) {
            await fs.promises.writeFile(filePath, content);
            return { success: true };
        }
    } catch (error) {
        console.error('File save error:', error);
        return { success: false, error: error.message };
    }
});

// React komponensben
const saveFile = async () => {
    try {
        const result = await window.electron.invoke('save-file', 'Hello World');
        if (result.success) {
            console.log('File saved successfully');
        }
    } catch (error) {
        console.error('Save failed:', error);
    }
};`}
                  </pre>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Electron Folyamatok</h5>
                      <ul className="text-sm space-y-1">
                        <li>Main Process</li>
                        <li>Renderer Process</li>
                        <li>IPC Communication</li>
                        <li>Preload Scripts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Natív Funkciók</h5>
                      <ul className="text-sm space-y-1">
                        <li>Fájlrendszer műveletek</li>
                        <li>Rendszer értesítések</li>
                        <li>Menük és tálcaikonok</li>
                        <li>Automatikus frissítés</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Biztonság</h5>
                      <ul className="text-sm space-y-1">
                        <li>Context Isolation</li>
                        <li>Content Security Policy</li>
                        <li>Sandbox beállítások</li>
                        <li>ASAR csomagolás</li>
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
      )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('teszteles')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Tesztelés és Minőségbiztosítás</h3>
              <span className="text-gray-500">
                {expandedSections.teszteles ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.teszteles && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A megfelelő tesztelés elengedhetetlen a minőségi szoftverek fejlesztéséhez. 
                    Ismerjük meg a React alkalmazások tesztelésének különböző módszereit.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Komponens Tesztelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// Card.test.js
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    const mockDrink = {
        strDrink: 'Mojito',
        strDrinkThumb: 'mojito.jpg'
    };

    test('renders drink name and image', () => {
        render(<Card drink={mockDrink} />);
        
        expect(screen.getByText('Mojito')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'mojito.jpg');
    });

    test('applies correct styles', () => {
        render(<Card drink={mockDrink} />);
        
        const card = screen.getByRole('article');
        expect(card).toHaveClass('card', 'bg-base-100');
    });
});`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Hook Tesztelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// useLocalStorage.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage Hook', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should initialize with default value', () => {
        const { result } = renderHook(() => 
            useLocalStorage('testKey', 'default')
        );
        
        expect(result.current[0]).toBe('default');
    });

    test('should update value', () => {
        const { result } = renderHook(() => 
            useLocalStorage('testKey', 'default')
        );
        
        act(() => {
            result.current[1]('new value');
        });
        
        expect(result.current[0]).toBe('new value');
        expect(localStorage.getItem('testKey')).toBe('"new value"');
    });
});`}
                  </pre>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Tesztelési Best Practices</h4>
                        <p className="text-gray-700">
                          1. Használj izolált teszteket
                          2. Mock-old a külső függőségeket
                          3. Teszteld a felhasználói interakciókat
                          4. Használj snapshot teszteket óvatosan
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Integrációs Tesztek</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                    {`// Category.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CocktailProvider } from '../context/CocktailContext';
import Category from './Category';

describe('Category Integration', () => {
    const mockCategories = [
        { strCategory: 'Cocktail' },
        { strCategory: 'Shot' }
    ];

    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ drinks: mockCategories })
            })
        );
    });

    test('loads and displays categories', async () => {
        render(
            <CocktailProvider>
                <Category />
            </CocktailProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('Cocktail')).toBeInTheDocument();
            expect(screen.getByText('Shot')).toBeInTheDocument();
        });
    });

    test('handles category selection', async () => {
        render(
            <CocktailProvider>
                <Category />
            </CocktailProvider>
        );

        const select = await screen.findByRole('combobox');
        fireEvent.change(select, { target: { value: 'Shot' } });

        expect(select.value).toBe('Shot');
    });
});`}
                  </pre>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Teszt Típusok</h5>
                      <ul className="text-sm space-y-1">
                        <li>Unit tesztek</li>
                        <li>Integrációs tesztek</li>
                        <li>E2E tesztek</li>
                        <li>Snapshot tesztek</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Tesztelési Eszközök</h5>
                      <ul className="text-sm space-y-1">
                        <li>Jest</li>
                        <li>React Testing Library</li>
                        <li>Cypress</li>
                        <li>Mock Service Worker</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Tesztelési Stratégiák</h5>
                      <ul className="text-sm space-y-1">
                        <li>TDD (Test Driven Development)</li>
                        <li>BDD (Behavior Driven Development)</li>
                        <li>Continuous Testing</li>
                        <li>Code Coverage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Grade13;