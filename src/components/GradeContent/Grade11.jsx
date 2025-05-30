import React, { useState } from 'react';
import { FaReact, FaCode, FaCheckCircle, FaLightbulb, FaQuestionCircle, FaPlay } from 'react-icons/fa';

const Grade11 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    reactAlapok: true,
    propsState: false,
    esemenykezeles: false,
    adatmodellezés: false
  });
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: todoInput,
        completed: false
      }]);
      setTodoInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const codeExamples = [
    {
      title: "Komponens létrehozása",
      code: `import React from 'react';

function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;`
    },
    {
      title: "Props használata",
      code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Használat:
<Welcome name="Sara" />`
    },
    {
      title: "State kezelése",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
    }
  ];

  const [activeCodeExample, setActiveCodeExample] = useState(0);

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
      </div>

      {activeTab === 'tananyag' && (
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
                    A React komponenseket használ, amelyek önálló, újrafelhasználható kódrészek, és 
                    lehetővé teszik az alkalmazás logikai egységekre bontását.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Miért használjunk Reactet?</h4>
                        <p className="text-gray-700">
                          A React előnyei közé tartozik a virtuális DOM (gyorsabb megjelenítés), a komponens 
                          alapú architektúra (kód újrafelhasználás), az egyszerű állapotkezelés és a nagy 
                          közösség támogatása.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Kódpéldák</h4>
                  
                  <div className="flex space-x-4 mb-4">
                    {codeExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCodeExample(index)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          activeCodeExample === index
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {example.title}
                      </button>
                    ))}
                  </div>
                  
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                    {codeExamples[activeCodeExample].code}
                  </pre>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">React alapfogalmak</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Komponensek</h5>
                      <ul className="text-sm space-y-1">
                        <li>Funkcionális komponensek</li>
                        <li>Osztály komponensek</li>
                        <li>Komponens életciklusa</li>
                        <li>Komponens hierarchia</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Adatkezelés</h5>
                      <ul className="text-sm space-y-1">
                        <li>Props (tulajdonságok)</li>
                        <li>State (állapot)</li>
                        <li>Kontextus API</li>
                        <li>Redux (külső állapotkezelés)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Egyéb</h5>
                      <ul className="text-sm space-y-1">
                        <li>Hookok (useState, useEffect)</li>
                        <li>Eseménykezelés</li>
                        <li>Feltételes renderelés</li>
                        <li>Listák és kulcsok</li>
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
                    A <strong>props</strong> (properties) és a <strong>state</strong> a React két alapvető 
                    adatkezelési mechanizmusa. A props a komponensek között továbbított adatokat jelenti, 
                    míg a state a komponens belső állapotát kezeli.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">Props</h5>
                      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                        <li>Szülő komponensből gyermek komponensbe továbbított adatok</li>
                        <li>Csak olvashatóak (immutable)</li>
                        <li>Bármilyen JavaScript érték lehet (string, number, object, function)</li>
                        <li>Komponensek újrafelhasználhatóságát növelik</li>
                      </ul>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`// Szülő komponens
<Greeting name="Anna" age={25} />

// Gyermek komponens
function Greeting(props) {
  return <h1>Hello {props.name}, you are {props.age} years old</h1>;
}`}
                      </pre>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">State</h5>
                      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                        <li>A komponens belső állapotát kezeli</li>
                        <li>Módosítható (mutable)</li>
                        <li>Csak a saját komponense módosíthatja</li>
                        <li>Állapotváltozás újrarenderelést vált ki</li>
                      </ul>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Mikor használjunk props-ot vagy state-et?</h4>
                        <p className="text-gray-700">
                          Használj <strong>props</strong>-ot, ha adatokat szeretnél átadni a komponensek között. 
                          Használj <strong>state</strong>-et, ha a komponensnek saját belső állapotot kell kezelnie, 
                          ami idővel változhat.
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
                    A React-ben az eseménykezelés hasonló a DOM eseménykezeléshez, de néhány szintaktikai különbséggel:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                    <li>React események camelCase elnevezéssel rendelkeznek (pl. onClick)</li>
                    <li>JSX-ben függvényt adsz át az eseménykezelőként (pl. {'onClick={handleClick}'})</li>
                    <li>Alapértelmezett viselkedés megakadályozásához explicit módon kell meghívni a preventDefault() metódust</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Példák eseménykezelésre</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">Egyszerű kattintás</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`function Button() {
  function handleClick() {
    alert('Clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}`}
                      </pre>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Paraméter átadás</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`function List() {
  const items = ['Apple', 'Banana', 'Orange'];

  function handleClick(item) {
    alert(\`You clicked \${item}\`);
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Form kezelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                    {`function Form() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Submitted: ' + inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
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
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Todo alkalmazás</h4>
                    <p className="text-gray-600 mt-1">Készíts egy egyszerű Todo alkalmazást a következő funkciókkal:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Új feladat hozzáadása input mezővel</li>
                  <li>Feladatok listázása</li>
                  <li>Feladat törlése</li>
                  <li>Feladat befejezésének jelölése (kattintásra átjelölés)</li>
                  <li>Befejezett feladatok külön stílusa (pl. áthúzott szöveg)</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Segítség
                  </h5>
                  <p className="text-blue-700 text-sm">
                    Használd a <code>useState</code> hookot a feladatok listájának kezeléséhez. Minden feladat legyen egy objektum, 
                    amely tartalmazza a szöveget és a befejezett állapotot. A listázáshoz használd a <code>map</code> metódust.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Űrlap komponens</h4>
                    <p className="text-gray-600 mt-1">Készíts egy űrlap komponenst a következő mezőkkel:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Név (szövegmező)</li>
                  <li>Email (email típusú mező)</li>
                  <li>Üzenet (szövegterület)</li>
                  <li>Küldés gomb</li>
                  <li>Az űrlap elküldésekor jelenjen meg egy alert a bevitt adatokkal</li>
                  <li>Az űrlap elküldése után törlődjenek a mezők</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                    <FaLightbulb className="mr-2" /> Tipp
                  </h5>
                  <p className="text-yellow-700 text-sm">
                    Használj egy state objektumot az űrlap adatainak tárolására. Az input mezők <code>onChange</code> 
                    eseménykezelőjében frissítsd a state-et. Ne felejts el a <code>preventDefault()</code> metódust 
                    meghívni az űrlap elküldésekor!
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
                  <h4 className="text-lg font-semibold">1. Todo alkalmazás megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setTodos([...todos, {
      id: Date.now(),
      text: input,
      completed: false
    }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo App</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo..."
        />
        <button type="submit">Add</button>
      </form>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`}
                  </pre>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h4 className="text-lg font-semibold">2. Űrlap komponens megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Name: \${formData.name}\\nEmail: \${formData.email}\\nMessage: \${formData.message}\`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', minHeight: '100px' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;`}
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
          <p className="text-gray-600 mb-8">Próbáld ki az alábbi interaktív React komponenseket!</p>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaPlay className="text-blue-600 mr-2" /> Számláló komponens
              </h4>
              
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold my-6">{counter}</div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => setCounter(c => c - 1)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Csökkent
                  </button>
                  <button 
                    onClick={() => setCounter(0)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Nulláz
                  </button>
                  <button 
                    onClick={() => setCounter(c => c + 1)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Növel
                  </button>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-700 mb-2">Megvalósítás</h5>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                  {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}`}
                </pre>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaPlay className="text-blue-600 mr-2" /> TODO lista gyakorlása
              </h4>
              
              <form onSubmit={handleAddTodo} className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    placeholder="Írj be egy feladatot..."
                    className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg transition-colors"
                  >
                    Hozzáad
                  </button>
                </div>
              </form>
              
              <ul className="space-y-2">
                {todos.map((todo) => (
                  <li 
                    key={todo.id} 
                    className={`flex items-center p-3 border rounded-lg ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="mr-3 h-5 w-5"
                    />
                    <span 
                      className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
                      onClick={() => toggleTodo(todo.id)}
                    >
                      {todo.text}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
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
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <FaPlay className="text-blue-600 mr-2" /> Űrlap komponens
              </h4>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required 
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Küldés
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade11;