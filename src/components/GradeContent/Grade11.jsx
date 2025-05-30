import React, { useState } from 'react';
import { FaReact, FaCode, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const Grade11 = () => {
  const [expandedSections, setExpandedSections] = useState({
    reactAlapok: true,
    propsState: false,
    esemenykezeles: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Példa kódok
  const codeExamples = {
    basicComponent: `// Funkcionális komponens
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Ez egy egyszerű komponens</p>
    </div>
  );
}

export default Welcome;`,

    propsExample: `// Props használata
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Életkor: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Használat:
<UserCard 
  name="Kiss János"
  age={25}
  email="janos@example.com"
/>`,

    stateExample: `// State használata
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Számláló értéke: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Növelés
      </button>
      <button onClick={() => setCount(count - 1)}>
        Csökkentés
      </button>
    </div>
  );
}`,

    eventExample: `// Eseménykezelés
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Bejelentkezési adatok:
    Felhasználónév: \${username}
    Jelszó: \${password}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Felhasználónév"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Jelszó"
      />
      <button type="submit">Bejelentkezés</button>
    </form>
  );
}`
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaReact className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">React Alapok</h1>
            <p className="text-cyan-600 font-medium">11. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a React keretrendszer alapjainak tanfolyamán! A React a modern webalkalmazások 
          fejlesztésének egyik legnépszerűbb eszköze, amely komponens alapú architektúrát és hatékony 
          állapotkezelést biztosít.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCode className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Tananyag</h3>
            </div>
            <p className="text-gray-600">
              React alapok, komponensek, props, state, eseménykezelés és gyakorlati példák.
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
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaLightbulb className="text-cyan-500 mr-2" />
              <h3 className="text-xl font-semibold">Kódolj velünk!</h3>
            </div>
            <p className="text-gray-600">
              Élő kódpéldák és mini alkalmazások, amiket közösen fejlesztünk.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-8">
        <section className="bg-white rounded-xl shadow-md overflow-hidden">
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
            onClick={() => toggleSection('reactAlapok')}
          >
            <h3 className="text-2xl font-bold text-gray-800">React alapok</h3>
            <span className="text-gray-500">
              {expandedSections.reactAlapok ? '▲' : '▼'}
            </span>
          </div>
          
          {expandedSections.reactAlapok && (
            <div className="p-6 space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A <strong>React</strong> egy JavaScript könyvtár felhasználói felületek építéséhez. 
                  A React komponenseket használ, amelyek önálló, újrafelhasználható kódrészek.
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Egyszerű React komponens:</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    {codeExamples.basicComponent}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </section>
        
        <section className="bg-white rounded-xl shadow-md overflow-hidden">
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
            onClick={() => toggleSection('propsState')}
          >
            <h3 className="text-2xl font-bold text-gray-800">Props és State</h3>
            <span className="text-gray-500">
              {expandedSections.propsState ? '▲' : '▼'}
            </span>
          </div>
          
          {expandedSections.propsState && (
            <div className="p-6 space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A <strong>props</strong> és <strong>state</strong> a React két alapvető adatkezelési 
                  mechanizmusa.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-2">Props példa:</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    {codeExamples.propsExample}
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">State példa:</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    {codeExamples.stateExample}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </section>
        
        <section className="bg-white rounded-xl shadow-md overflow-hidden">
          <div 
            className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
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
                  A React-ben az eseménykezelés hasonló a DOM eseménykezeléshez. Az események camelCase 
                  elnevezéssel rendelkeznek és JSX-ben függvényt adunk át eseménykezelőként.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Eseménykezelés példa:</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    {codeExamples.eventExample}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Grade11;