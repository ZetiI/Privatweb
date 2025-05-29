import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaCheckCircle, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';

const Grade9 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    htmlAlapok: true,
    cssAlapok: false,
    gyakorlat: false
  });
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const quizQuestions = [
    {
      id: 1,
      question: "Mire szolgál a HTML?",
      options: [
        "Weboldal struktúrájának megadására",
        "Weboldal stílusozására",
        "Adatbázisok kezelésére"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Hogyan hozunk létre egy fejlécet HTML-ben?",
      options: [
        "<header> cím </header>",
        "<h1> cím </h1>",
        "<head> cím </head>"
      ],
      correct: 1
    },
    {
      id: 3,
      question: "Melyik CSS tulajdonság változtatja meg a szöveg színét?",
      options: [
        "font-color",
        "text-color",
        "color"
      ],
      correct: 2
    }
  ];

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateQuizScore = () => {
    return quizQuestions.reduce((score, question) => {
      return score + (quizAnswers[question.id] === question.correct ? 1 : 0);
    }, 0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaCode className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">HTML & CSS Alapok</h1>
            <p className="text-blue-600 font-medium">9. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a webfejlesztés alapjainak tanfolyamán! Ebben a kurzusban megismerkedünk a web technológiák alapjaival, 
          elsajátítjuk a HTML és CSS használatát, és gyakorlati példákon keresztül építünk saját weboldalakat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaLaptopCode className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Tananyag</h3>
            </div>
            <p className="text-gray-600">
              Alapvető HTML elemek, CSS stílusozás, elrendezési technikák és gyakorlati példák.
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
              <h3 className="text-xl font-semibold">Tippek & Trükkök</h3>
            </div>
            <p className="text-gray-600">
              Hasznos tanácsok, best practice-ek és gyors megoldások gyakori problémákra.
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
          onClick={() => setActiveTab('quiz')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'quiz'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tudáspróba
        </button>
      </div>

      {activeTab === 'tananyag' && (
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('htmlAlapok')}
            >
              <h3 className="text-2xl font-bold text-gray-800">HTML alapok</h3>
              <span className="text-gray-500">
                {expandedSections.htmlAlapok ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.htmlAlapok && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>HTML (HyperText Markup Language)</strong> a weboldalak alapvető építőeleme. 
                    A HTML segítségével definiáljuk a weboldal struktúráját és tartalmát.
                  </p>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Alapvető HTML szerkezet</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Első weboldalam</title>
</head>
<body>
    <h1>Üdvözöljük a weboldalon!</h1>
    <p>Ez egy egyszerű bekezdés.</p>
</body>
</html>`}
                  </pre>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Fontos megjegyzés</h4>
                        <p className="text-gray-700">
                          Minden HTML dokumentumnak tartalmaznia kell <code>&lt;!DOCTYPE html&gt;</code> deklarációt, 
                          valamint <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> és <code>&lt;body&gt;</code> elemeket.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Gyakran használt HTML elemek</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 border-b text-left">Elem</th>
                          <th className="py-2 px-4 border-b text-left">Leírás</th>
                          <th className="py-2 px-4 border-b text-left">Példa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b"><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code></td>
                          <td className="py-2 px-4 border-b">Címsorok</td>
                          <td className="py-2 px-4 border-b"><code>&lt;h1&gt;Főcím&lt;/h1&gt;</code></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b"><code>&lt;p&gt;</code></td>
                          <td className="py-2 px-4 border-b">Bekezdés</td>
                          <td className="py-2 px-4 border-b"><code>&lt;p&gt;Szöveg...&lt;/p&gt;</code></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b"><code>&lt;a&gt;</code></td>
                          <td className="py-2 px-4 border-b">Hivatkozás</td>
                          <td className="py-2 px-4 border-b"><code>&lt;a href="..."&gt;Link&lt;/a&gt;</code></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-4 border-b"><code>&lt;img&gt;</code></td>
                          <td className="py-2 px-4 border-b">Kép</td>
                          <td className="py-2 px-4 border-b"><code>&lt;img src="..." alt="..."&gt;</code></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </section>
          
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('cssAlapok')}
            >
              <h3 className="text-2xl font-bold text-gray-800">CSS alapok</h3>
              <span className="text-gray-500">
                {expandedSections.cssAlapok ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.cssAlapok && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>CSS (Cascading Style Sheets)</strong> a weboldalak megjelenésének és formázásának 
                    szabályozására szolgál. A CSS segítségével szabályokat adhatunk meg a HTML elemek megjelenítésére.
                  </p>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">CSS szintaxis</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`selector {
    property: value;
    property: value;
}`}
                  </pre>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">CSS hozzáadása HTML-hez</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`<!-- Belső stíluslap -->
<style>
    body {
        background-color: lightblue;
    }
</style>

<!-- Külső stíluslap -->
<link rel="stylesheet" href="stilus.css">

<!-- Inline stílus -->
<p style="color: red;">Szöveg</p>`}
                      </pre>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Példa CSS kód</h5>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                        {`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    text-align: center;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Fontos CSS tulajdonságok</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Szöveg</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>color</code> - szöveg színe</li>
                        <li><code>font-family</code> - betűtípus</li>
                        <li><code>font-size</code> - betűméret</li>
                        <li><code>text-align</code> - igazítás</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Doboz modell</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>width</code>/<code>height</code> - méret</li>
                        <li><code>margin</code> - külső tér</li>
                        <li><code>padding</code> - belső tér</li>
                        <li><code>border</code> - keret</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Háttér</h5>
                      <ul className="text-sm space-y-1">
                        <li><code>background-color</code> - háttérszín</li>
                        <li><code>background-image</code> - háttérkép</li>
                        <li><code>background-size</code> - méretezés</li>
                        <li><code>background-position</code> - pozíció</li>
                      </ul>
                    </div>
                  </div>
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
                    <h4 className="text-xl font-semibold text-gray-800">Egyszerű weboldal készítése</h4>
                    <p className="text-gray-600 mt-1">Készíts egy egyszerű weboldalt a következő elemekkel:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Fejléc a weboldal nevével</li>
                  <li>Navigációs menü legalább 3 linkkel</li>
                  <li>Tartalmi rész bekezdésekkel és alcímekkel</li>
                  <li>Lábléc szerzői jogokkal</li>
                  <li>Alkalmazz CSS-t a weboldal stílusozására</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Segítség
                  </h5>
                  <p className="text-blue-700 text-sm">
                    Használd a <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> és 
                    <code>&lt;footer&gt;</code> elemeket a struktúra létrehozásához. A navigációs menüben használj 
                    <code>&lt;a&gt;</code> elemeket a linkekhez.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Profilkártya</h4>
                    <p className="text-gray-600 mt-1">Készíts egy profilkártyát CSS segítségével:</p>
                  </div>
                </div>
                
                <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                  <li>Kép a felhasználóról (használj placeholder képet)</li>
                  <li>Név és bemutatkozás</li>
                  <li>Kontakt információk (email, telefonszám)</li>
                  <li>Kerek sarkok és árnyék effektus</li>
                  <li>Hover hatás, amikor az egér fölé viszük</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <h5 className="font-semibold text-yellow-700 mb-2 flex items-center">
                    <FaLightbulb className="mr-2" /> Tipp
                  </h5>
                  <p className="text-yellow-700 text-sm">
                    Használd a <code>border-radius</code> tulajdonságot a kerek sarkokhoz, és a 
                    <code>box-shadow</code> tulajdonságot az árnyék effekthez. A hover hatáshoz használj 
                    <code>:hover</code> pszeudo-selectort.
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
                  <h4 className="text-lg font-semibold">1. Egyszerű weboldal megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weboldal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        
        header {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        nav {
            background-color: #f4f4f4;
            padding: 1rem;
        }
        
        nav a {
            color: #333;
            text-decoration: none;
            margin-right: 1rem;
            font-weight: bold;
        }
        
        nav a:hover {
            color: #007bff;
        }
        
        main {
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }
        
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Weboldalam</h1>
    </header>
    
    <nav>
        <a href="#">Főoldal</a>
        <a href="#">Rólunk</a>
        <a href="#">Kapcsolat</a>
    </nav>
    
    <main>
        <h2>Üdvözöljük!</h2>
        <p>Ez a weboldal bemutatja a HTML és CSS alapjait.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
    </main>
    
    <footer>
        <p>&copy; 2024 Minden jog fenntartva.</p>
    </footer>
</body>
</html>`}
                  </pre>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h4 className="text-lg font-semibold">2. Profilkártya megoldása</h4>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profilkártya</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
            margin: 0;
        }
        
        .profile-card {
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 300px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .profile-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 30px auto 20px;
            object-fit: cover;
            border: 3px solid #007bff;
        }
        
        .profile-name {
            margin: 0;
            color: #333;
            font-size: 1.5rem;
        }
        
        .profile-title {
            color: #666;
            font-size: 0.9rem;
            margin: 10px 0 20px;
        }
        
        .profile-info {
            padding: 20px;
            color: #555;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        
        .contact-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-top: 1px solid #eee;
        }
        
        .contact-info p {
            margin: 5px 0;
            font-size: 0.85rem;
        }
    </style>
</head>
<body>
    <div class="profile-card">
        <img src="https://via.placeholder.com/150" alt="Profilkép" class="profile-image">
        <h2 class="profile-name">Kovács János</h2>
        <p class="profile-title">Webfejlesztő</p>
        <div class="profile-info">
            <p>Szenvedélyes webfejlesztő, aki szeret kreatív megoldásokat találni komplex problémákra.</p>
        </div>
        <div class="contact-info">
            <p>Email: janos.kovacs@example.com</p>
            <p>Telefon: +36 30 123 4567</p>
        </div>
    </div>
</body>
</html>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Tudáspróba</h3>
          <p className="text-gray-600 mb-8">Teszteld a HTML és CSS ismereteidet ezzel a rövid kvízzel!</p>
          
          <div className="space-y-8">
            {quizQuestions.map((question) => (
              <div key={question.id} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  {question.id}. {question.question}
                </h4>
                <div className="space-y-2">
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="radio"
                        id={`q${question.id}-a${index}`}
                        name={`question-${question.id}`}
                        checked={quizAnswers[question.id] === index}
                        onChange={() => handleQuizAnswer(question.id, index)}
                        className="mr-2"
                      />
                      <label htmlFor={`q${question.id}-a${index}`} className="cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowQuizResults(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Eredmények megtekintése
              </button>
              
              {showQuizResults && (
                <div className="text-lg font-semibold">
                  Eredmény: {calculateQuizScore()} / {quizQuestions.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade9;