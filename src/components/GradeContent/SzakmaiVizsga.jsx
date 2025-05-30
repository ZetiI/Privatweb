import React, { useState } from 'react';
import { FaCode, FaDatabase, FaServer, FaCheckCircle, FaLightbulb, FaQuestionCircle, FaPlay, FaDesktop, FaLock, FaCloud, FaNetworkWired, FaDocker } from 'react-icons/fa';

const SzakmaiVizsga = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    expressBasics: true,
    apiExamples: false,
    complexQueries: false,
    dataModification: false,
    teszteles: false,
    authentication: false,
    deployment: false,
    docker: false,
    security: false,
    performance: false,
    networking: false,
    microservices: false,
    graphql: false,
    websockets: false,
    caching: false,
    logging: false
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
            <h1 className="text-4xl font-bold text-gray-800">Modern Backend Fejlesztés</h1>
            <p className="text-green-600 font-medium">13. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a Modern Backend Fejlesztés kurzuson! Ebben a tananyagban a szerveroldali fejlesztés
          legmodernebb technológiáit és gyakorlatait sajátíthatod el, az alapoktól a komplex mikroszolgáltatásokig.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaServer className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Backend Architektúrák</h3>
            </div>
            <p className="text-gray-600">
              Modern backend architektúrák, mikroszolgáltatások és felhő alapú megoldások.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaDatabase className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Adatbázis Technológiák</h3>
            </div>
            <p className="text-gray-600">
              SQL és NoSQL adatbázisok, optimalizálás és teljesítmény hangolás.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaLock className="text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">Biztonság és Teljesítmény</h3>
            </div>
            <p className="text-gray-600">
              Biztonsági gyakorlatok, teljesítmény optimalizálás és skálázhatóság.
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
              onClick={() => toggleSection('expressBasics')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Express.js és SQLite Alapok</h3>
              <span className="text-gray-500">
                {expandedSections.expressBasics ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.expressBasics && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Az Express.js és SQLite kombinációja kiváló választás kisebb alkalmazások fejlesztéséhez.
                    Nézzük meg a legfontosabb alapokat és használati példákat.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Fejlesztési Tipp</h4>
                        <p className="text-gray-700">
                          Használj környezeti változókat a konfigurációhoz és kerüld a hardcoded értékeket.
                          A hibakezelést mindig implementáld megfelelően.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Alapvető Express.js Konfiguráció</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// Különböző Express.js konfigurációs példák
                        
// 1. Alap konfiguráció
const express = require('express')
const app = express()
app.use(express.json())
app.listen(3000)

// 2. CORS és biztonsági beállítások
const cors = require('cors')
app.use(cors())
app.use(helmet())

// 3. Környezeti változók használata
const port = process.env.PORT || 8000
app.listen(port)

// 4. Példa éles környezetre
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.listen(8000, () => console.log("Fut a szerver a 8000-es porton"))`}
                      </pre>

                      <h3 className="text-lg font-semibold mb-2">SQLite Adatbázis Kapcsolódás</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// Különböző SQLite kapcsolódási példák

// 1. Memória adatbázis
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database(':memory:')

// 2. Fájl alapú adatbázis
const db = new sqlite3.Database('./database.db')

// 3. Példa projekt adatbázis
const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./webwill.db", (err) => {
    if (err) console.error('Hiba:', err)
    else console.log('Kapcsolódva')
})`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">REST API Végpontok Példák</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// Különböző API végpont implementációk

// 1. Egyszerű GET végpont
app.get("/api/status", (req, res) => {
    res.json({ status: "OK" })
})

// 2. Üdvözlő végpont példa
app.get("/", (req,res) => {
    res.json({message: "Üdvözöljük a WebWill autóverseny alkalmazásában!"})
})

// 3. Adatok lekérése
app.get("/api/data", (req,res) => {
    db.all("SELECT * FROM data", (error, rows) => {
        if (error) res.json({error})
        else res.json({rows})
    })
})

// 4. Kategóriák kezelése
app.get("/kategoriak", (req,res) => {
    db.all(\`SELECT * FROM kategoriak\`, (error, rows) => {
        if (error) res.json({error})
        else res.json({rows})
    })
})`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Komplex SQL Műveletek</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// Összetett SQL lekérdezések példái

// 1. Több táblás JOIN
app.get("/orders/:id", (req,res) => {
    const id = req.params.id
    db.all(\`
        SELECT o.id, o.date, p.name, c.category
        FROM orders o
        JOIN products p ON o.product_id = p.id
        JOIN categories c ON p.category_id = c.id
        WHERE o.id = ?\`,
        [id],
        (error, rows) => {
            if (error) res.json({error})
            else res.json({rows})
        }
    )
})

// 2. Részletes rendelés lekérdezés
app.get("/rendeles/:razon", (req,res) => {
    const razon = req.params.razon
    db.all(
        \`SELECT rendelesek.razon, rendelesek.rdatum, rendelesek.tazon, rendelesek.db, 
                termekek.tnev as termek_nev, kategoriak.knev as kategoria_nev 
         FROM rendelesek, termekek, kategoriak 
         WHERE rendelesek.tazon = termekek.tazon 
         AND termekek.kazon = kategoriak.kazon 
         AND rendelesek.razon = ?\`,
        [razon],
        (error, rows) => {
            if (error) res.json({error})
            else res.json({rows})
        }
    )
})`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Adatmódosítási Példák</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// Különböző adatmódosítási műveletek

// 1. Új adat beszúrása
app.post("/api/categories", (req,res) => {
    const {id, name} = req.body
    db.run("INSERT INTO categories (id, name) VALUES (?, ?)",
        [id, name],
        (error) => {
            if (error) res.json({error})
            else res.json({message: "Category added"})
        }
    )
})

// 2. Kategória hozzáadása
app.post("/kategoriak", (req,res) => {
    const {kazon, knev} = req.body
    db.run("INSERT INTO kategoriak (kazon, knev) VALUES (?, ?)",
        [kazon, knev],
        (error) => {
            if (error) res.json({error})
            else res.json({message: "Új kategória hozzáadva!"})
        }
    )
})

// 3. Adat módosítása
app.patch("/rendeles/:razon", (req,res) => {
    const razon = req.params.razon
    const {rdatum, tazon, db} = req.body
    const sql = \`UPDATE rendelesek SET rdatum = ?, tazon = ?, db = ? WHERE razon = ?\`
    
    db.run(sql, [rdatum, tazon, db, razon], (error) => {
        if (error) res.json({error})
        else res.json({message: "Rendelés módosítva"})
    })
})`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Fejlesztői Eszközök Konfigurálása</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        {`// package.json konfiguráció példák

// 1. Alap konfiguráció
{
  "name": "api-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  }
}

// 2. Fejlesztői környezet
{
  "scripts": {
    "start": "nodemon index.js",
    "dev": "nodemon --inspect index.js"
  }
}

// 3. Teljes konfiguráció
{
  "name": "webwill-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "nodemon index.js",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "sqlite3": "^5.0.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('apiExamples')}
            >
              <div className="flex items-center">
                <FaCode className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">API Végpont Példák</h2>
              </div>
              <span>{expandedSections.apiExamples ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.apiExamples && (
              <div className="p-6">
                <div className="prose max-w-none">
                  <div className="space-y-8">
    <div>
                      <h3 className="text-lg font-semibold mb-2">Egyszerű GET Végpont</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`app.get("/", (req,res) =>{
    res.json({message: "Üdvözöljük a WebWill autóverseny alkalmazásában!"})
})`}
                      </pre>
    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Adatok Lekérdezése</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`app.get("/kategoriak", (req,res) =>{
    db.all(\`SELECT * FROM kategoriak\`, (error, rows) =>{
        if (error){
            res.json({error})
        }else{
            res.json({rows})
        }
    })
})`}
              </pre>
            </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('complexQueries')}
            >
              <div className="flex items-center">
                <FaDatabase className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Komplex SQL Lekérdezések</h2>
              </div>
              <span>{expandedSections.complexQueries ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.complexQueries && (
              <div className="p-6">
                <div className="prose max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Több Táblás Lekérdezés</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`app.get("/rendeles/:razon", (req,res) =>{
    const razon = req.params.razon
    db.all(
        \`SELECT rendelesek.razon, rendelesek.rdatum, rendelesek.tazon, rendelesek.db, 
                termekek.tnev as termek_nev, kategoriak.knev as kategoria_nev 
         FROM rendelesek, termekek, kategoriak 
         WHERE rendelesek.tazon = termekek.tazon 
         AND termekek.kazon = kategoriak.kazon 
         AND rendelesek.razon = ?\`,
        [razon],
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
            </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('dataModification')}
            >
              <div className="flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Adatmódosítási Műveletek</h2>
              </div>
              <span>{expandedSections.dataModification ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.dataModification && (
              <div className="p-6">
                <div className="prose max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Új Adat Beszúrása</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`app.post("/kategoriak", (req,res) =>{
    const {kazon, knev} = req.body
    const sql = (\`INSERT INTO kategoriak (kazon, knev) VALUES (?, ?)\`)
    db.run(sql, [kazon, knev], (error) =>{
        if (error){
            res.json({error})
        }else{
            res.json({message: "Új kategória hozzáadva!"})
        }
    })
})`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Adat Módosítása</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`app.patch("/rendeles/:razon", (req,res) =>{
    const razon = req.params.razon
    const {rdatum, tazon, db} = req.body
    const sql = \`UPDATE rendelesek SET rdatum = ?, tazon = ?, db = ? WHERE razon = ?\`
    db.run(sql, [rdatum, tazon, db, razon], (error) =>{
        if (error){
            res.json({error})
        }else{
            res.json({message: "Rendelés adatai módosítva!"})
        }
    })
})`}
                      </pre>
      </div>
    </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                    <div className="flex items-center">
                      <FaLightbulb className="text-yellow-500 mr-2" />
                      <h4 className="font-semibold text-gray-800">Fejlesztői Tipp</h4>
    </div>
                    <p className="text-gray-700 mt-2">
                      A fejlesztés során használj nodemon-t az automatikus újraindításhoz:
                    </p>
                    <pre className="bg-yellow-100 mt-2 p-2 rounded">
                      {`"scripts": {
    "start": "nodemon index.js"
}`}
              </pre>
            </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('authentication')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Autentikáció és Authorizáció</h3>
              <span className="text-gray-500">
                {expandedSections.authentication ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.authentication && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A biztonságos autentikáció és authorizáció kritikus fontosságú a modern webalkalmazásokban.
                    Nézzük meg a legfontosabb megoldásokat és biztonsági gyakorlatokat.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Biztonsági Tipp</h4>
                        <p className="text-gray-700">
                          Mindig használj biztonságos jelszó tárolást (pl. bcrypt) és HTTPS-t a kommunikációhoz.
                          Ne tárold a jelszavakat plain text formátumban!
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">JWT Autentikáció Implementálása</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Felhasználó bejelentkezés
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Hibás felhasználónév vagy jelszó' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Hibás felhasználónév vagy jelszó' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Szerver hiba' });
  }
});

// Middleware védett végpontokhoz
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Nincs token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
    } catch (error) {
    res.status(401).json({ error: 'Érvénytelen token' });
  }
};

// Védett végpont példa
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Védett adat' });
});`}
                  </pre>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Autentikációs Módszerek</h5>
                      <ul className="text-sm space-y-1">
                        <li>JWT Tokens</li>
                        <li>Session alapú</li>
                        <li>OAuth 2.0</li>
                        <li>OpenID Connect</li>
                      </ul>
      </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Biztonsági Gyakorlatok</h5>
                      <ul className="text-sm space-y-1">
                        <li>HTTPS használata</li>
                        <li>Password hashing</li>
                        <li>Rate limiting</li>
                        <li>Input validáció</li>
                      </ul>
      </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Authorizáció</h5>
                      <ul className="text-sm space-y-1">
                        <li>Role-based access</li>
                        <li>Permission-based</li>
                        <li>Resource-based</li>
                        <li>Policy-based</li>
                      </ul>
      </div>
      </div>
            </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('deployment')}
            >
              <div className="flex items-center">
                <FaCloud className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Deployment és Felhő Szolgáltatások</h2>
              </div>
              <span>{expandedSections.deployment ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.deployment && (
              <div className="p-6">
                <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                    A modern alkalmazások deploymentje során számos technológiát és szolgáltatást használhatunk.
                    Nézzük meg a legfontosabb lehetőségeket és best practice-eket.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Heroku Deployment</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// Procfile
web: node index.js

// package.json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "engines": {
    "node": "16.x"
  }
}`}
                </pre>
              </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">PM2 Process Manager</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'api',
    script: 'index.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}`}
                      </pre>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Felhő Platformok</h5>
                        <ul className="text-sm space-y-1">
                          <li>AWS</li>
                          <li>Google Cloud</li>
                          <li>Azure</li>
                          <li>Heroku</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">CI/CD</h5>
                        <ul className="text-sm space-y-1">
                          <li>GitHub Actions</li>
                          <li>Jenkins</li>
                          <li>GitLab CI</li>
                          <li>CircleCI</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Monitoring</h5>
                        <ul className="text-sm space-y-1">
                          <li>New Relic</li>
                          <li>Datadog</li>
                          <li>Grafana</li>
                          <li>Prometheus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('docker')}
            >
              <div className="flex items-center">
                <FaDocker className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Docker és Konténerizáció</h2>
              </div>
              <span>{expandedSections.docker ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.docker && (
              <div className="p-6">
                <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                    A Docker és a konténerizáció alapvető eszközök a modern alkalmazásfejlesztésben.
                    Nézzük meg, hogyan lehet egy Node.js alkalmazást Dockerizálni.
                </p>

                  <div className="space-y-8">
    <div>
                      <h3 className="text-lg font-semibold mb-2">Dockerfile Példa</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]`}
                      </pre>
        </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Docker Compose</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
                      </pre>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Docker Alapok</h5>
                        <ul className="text-sm space-y-1">
                          <li>Konténerek</li>
                          <li>Images</li>
                          <li>Volumes</li>
                          <li>Networks</li>
                        </ul>
      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Orchestration</h5>
                        <ul className="text-sm space-y-1">
                          <li>Kubernetes</li>
                          <li>Docker Swarm</li>
                          <li>ECS</li>
                          <li>AKS</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Best Practices</h5>
                        <ul className="text-sm space-y-1">
                          <li>Multi-stage builds</li>
                          <li>Layer caching</li>
                          <li>Security scanning</li>
                          <li>Resource limits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('microservices')}
            >
              <div className="flex items-center">
                <FaNetworkWired className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Mikroszolgáltatások és API Gateway</h2>
      </div>
              <span>{expandedSections.microservices ? '▼' : '▶'}</span>
    </div>
            
            {expandedSections.microservices && (
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    A mikroszolgáltatások architektúra lehetővé teszi a nagy alkalmazások kisebb, független szolgáltatásokra bontását.
                    Nézzük meg a főbb koncepciókat és implementációs példákat.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">API Gateway Példa</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// gateway.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Service registry
const services = {
  auth: 'http://auth-service:3001',
  users: 'http://user-service:3002',
  products: 'http://product-service:3003'
};

// Route definitions
app.use('/auth', createProxyMiddleware({ 
  target: services.auth,
  changeOrigin: true
}));

app.use('/users', createProxyMiddleware({ 
  target: services.users,
  changeOrigin: true
}));

app.use('/products', createProxyMiddleware({ 
  target: services.products,
  changeOrigin: true
}));

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});`}
                </pre>
              </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Discovery</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// service-registry.js
const express = require('express');
const app = express();

const registry = new Map();

app.post('/register', (req, res) => {
  const { serviceName, url } = req.body;
  registry.set(serviceName, url);
  res.json({ message: \`Service \${serviceName} registered\` });
});

app.get('/services', (req, res) => {
  const services = Array.from(registry.entries())
    .map(([name, url]) => ({ name, url }));
  res.json(services);
});`}
                </pre>
              </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Mikroszolgáltatás Minták</h5>
                        <ul className="text-sm space-y-1">
                          <li>Circuit Breaker</li>
                          <li>Service Discovery</li>
                          <li>Load Balancing</li>
                          <li>Event Sourcing</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Kommunikáció</h5>
                        <ul className="text-sm space-y-1">
                          <li>REST</li>
                          <li>gRPC</li>
                          <li>Message Queues</li>
                          <li>Event Bus</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Monitorozás</h5>
                        <ul className="text-sm space-y-1">
                          <li>Distributed Tracing</li>
                          <li>Log Aggregation</li>
                          <li>Health Checks</li>
                          <li>Metrics Collection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('graphql')}
            >
              <div className="flex items-center">
                <FaCode className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">GraphQL API Fejlesztés</h2>
              </div>
              <span>{expandedSections.graphql ? '▼' : '▶'}</span>
            </div>
            
            {expandedSections.graphql && (
              <div className="p-6">
                <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                    A GraphQL egy modern API lekérdezési nyelv és futásidejű környezet, amely lehetővé teszi a kliensek számára,
                    hogy pontosan azokat az adatokat kérjék le, amelyekre szükségük van.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">GraphQL Schema Definíció</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// schema.graphql
type User {
  id: ID!
  username: String!
  email: String!
  orders: [Order!]!
}

type Order {
  id: ID!
  date: String!
  total: Float!
  items: [OrderItem!]!
  user: User!
}

type OrderItem {
  id: ID!
  product: Product!
  quantity: Int!
  price: Float!
}

type Product {
  id: ID!
  name: String!
  description: String
  price: Float!
  category: Category!
}

type Category {
  id: ID!
  name: String!
  products: [Product!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  order(id: ID!): Order
  orders: [Order!]!
  product(id: ID!): Product
  products(category: ID): [Product!]!
}

type Mutation {
  createOrder(userId: ID!, items: [OrderItemInput!]!): Order!
  updateProduct(id: ID!, input: ProductInput!): Product!
  deleteOrder(id: ID!): Boolean!
}`}
                      </pre>
      </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Resolver Implementáció</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// resolvers.js
const resolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.getUser(id);
    },
    products: async (_, { category }, { dataSources }) => {
      return dataSources.productAPI.getProducts(category);
    }
  },
  
  User: {
    orders: async (parent, _, { dataSources }) => {
      return dataSources.orderAPI.getOrdersByUser(parent.id);
    }
  },
  
  Order: {
    items: async (parent, _, { dataSources }) => {
      return dataSources.orderAPI.getOrderItems(parent.id);
    },
    user: async (parent, _, { dataSources }) => {
      return dataSources.userAPI.getUser(parent.userId);
    }
  }
};`}
                      </pre>
    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">GraphQL Alapok</h5>
                        <ul className="text-sm space-y-1">
                          <li>Schema Definition</li>
                          <li>Resolvers</li>
                          <li>Queries</li>
                          <li>Mutations</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Advanced Features</h5>
                        <ul className="text-sm space-y-1">
                          <li>Subscriptions</li>
                          <li>Directives</li>
                          <li>Fragments</li>
                          <li>Interfaces</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Tools</h5>
                        <ul className="text-sm space-y-1">
                          <li>Apollo Server</li>
                          <li>GraphQL Playground</li>
                          <li>Code Generation</li>
                          <li>Type Safety</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50"
              onClick={() => toggleSection('websockets')}
            >
              <div className="flex items-center">
                <FaServer className="text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">WebSocket és Valós Idejű Kommunikáció</h2>
    </div>
              <span>{expandedSections.websockets ? '▼' : '▶'}</span>
              </div>

            {expandedSections.websockets && (
              <div className="p-6">
                <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                    A WebSocket protokoll lehetővé teszi a kétirányú, valós idejű kommunikációt a kliens és szerver között.
                    Nézzük meg a Socket.IO könyvtár használatát Node.js környezetben.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">WebSocket Szerver</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// server.js
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Kapcsolat kezelése
io.on('connection', (socket) => {
  console.log('Új kliens csatlakozott:', socket.id);

  // Csatlakozás szobához
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(\`\${socket.id} csatlakozott: \${roomId}\`);
  });

  // Üzenet küldése
  socket.on('send-message', (data) => {
    io.to(data.roomId).emit('receive-message', {
      sender: socket.id,
      message: data.message,
      timestamp: new Date()
    });
  });

  // Kapcsolat bontása
  socket.on('disconnect', () => {
    console.log('Kliens lecsatlakozott:', socket.id);
  });
});

httpServer.listen(3000);`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">React Kliens Implementáció</h3>
                      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                        {`// ChatComponent.jsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const roomId = 'chat-room-1';

  useEffect(() => {
    // Csatlakozás a szobához
    socket.emit('join-room', roomId);

    // Üzenetek fogadása
    socket.on('receive-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit('send-message', {
        roomId,
        message: newMessage
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <span>{msg.sender}: </span>
            <span>{msg.message}</span>
      </div>
        ))}
      </div>
        <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Küldés</button>
      </div>
  );
}`}
                      </pre>
        </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">WebSocket Features</h5>
                        <ul className="text-sm space-y-1">
                          <li>Bi-directional</li>
                          <li>Real-time</li>
                          <li>Full-duplex</li>
                          <li>Low latency</li>
                        </ul>
          </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Socket.IO Features</h5>
                        <ul className="text-sm space-y-1">
                          <li>Auto-reconnection</li>
                          <li>Room support</li>
                          <li>Broadcasting</li>
                          <li>Fallback options</li>
                        </ul>
          </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-600 mb-2">Use Cases</h5>
                        <ul className="text-sm space-y-1">
                          <li>Chat applications</li>
                          <li>Real-time dashboards</li>
                          <li>Collaborative tools</li>
                          <li>Gaming</li>
                        </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
            )}
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Gyakorló Feladatok</h2>
              
        <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">1. Feladat - Alap API Létrehozása</h3>
              <p className="text-gray-700 mb-4">
                    Hozz létre egy Express.js alapú API-t a következő követelményekkel:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Állítsd be a szervert a 8000-es porton</li>
                    <li>Implementálj CORS támogatást</li>
                    <li>Hozz létre egy üdvözlő végpontot</li>
                    <li>Kapcsolódj egy SQLite adatbázishoz</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">2. Feladat - Kategória Kezelés</h3>
              <p className="text-gray-700 mb-4">
                    Készíts végpontokat kategóriák kezeléséhez:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>GET /kategoriak - összes kategória listázása</li>
                    <li>POST /kategoriak - új kategória hozzáadása</li>
                    <li>PUT /kategoriak/:id - kategória módosítása</li>
                    <li>DELETE /kategoriak/:id - kategória törlése</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">3. Feladat - Komplex Lekérdezések</h3>
              <p className="text-gray-700 mb-4">
                    Készíts egy végpontot, amely összetett SQL lekérdezést használ:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Több tábla összekapcsolása JOIN-okkal</li>
                    <li>Feltételes szűrés WHERE záradékkal</li>
                    <li>Csoportosítás és aggregálás GROUP BY használatával</li>
                    <li>Eredmények rendezése ORDER BY segítségével</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Komplex Gyakorló Feladatok</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">1. Mikroszolgáltatás Projekt</h3>
              <p className="text-gray-700 mb-4">
                    Készíts egy mikroszolgáltatás alapú rendszert a következő komponensekkel:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>API Gateway szolgáltatás</li>
                    <li>Autentikációs szolgáltatás</li>
                    <li>Felhasználókezelő szolgáltatás</li>
                    <li>Termékkezelő szolgáltatás</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">2. Docker Konténerizáció</h3>
              <p className="text-gray-700 mb-4">
                    Dockerizálj egy teljes alkalmazást:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Node.js backend szolgáltatás</li>
                    <li>PostgreSQL adatbázis</li>
                    <li>Redis cache</li>
                    <li>Nginx reverse proxy</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">3. CI/CD Pipeline</h3>
              <p className="text-gray-700 mb-4">
                    Implementálj egy teljes CI/CD pipeline-t:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Automatikus tesztelés</li>
                    <li>Docker image build</li>
                    <li>Kubernetes deployment</li>
                    <li>Monitoring beállítása</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Feladatok Megoldásai</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Feladat Megoldása</h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                    {`const express = require("express")
const cors = require("cors")
const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./webwill.db");

const app = express()
app.use(cors())
app.use(express.json())

app.listen(8000, () => console.log("Server running on port 8000"));

app.get("/", (req,res) =>{
    res.json({message: "Üdvözöljük az API-ban!"})
})`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Feladat Megoldása</h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                    {`// GET - Összes kategória
app.get("/kategoriak", (req,res) =>{
    db.all(\`SELECT * FROM kategoriak\`, (error, rows) =>{
        if (error) res.json({error})
        else res.json({rows})
    })
})

// POST - Új kategória
app.post("/kategoriak", (req,res) =>{
    const {kazon, knev} = req.body
    db.run(
        \`INSERT INTO kategoriak (kazon, knev) VALUES (?, ?)\`,
        [kazon, knev],
        (error) => {
            if (error) res.json({error})
            else res.json({message: "Kategória hozzáadva"})
        }
    )
})`}
              </pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Feladat Megoldása</h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                    {`app.get("/statisztika", (req,res) =>{
    db.all(
        \`SELECT 
            k.knev as kategoria_nev,
            COUNT(t.tazon) as termekek_szama,
            SUM(r.db) as osszes_rendelt_db
         FROM kategoriak k
         LEFT JOIN termekek t ON k.kazon = t.kazon
         LEFT JOIN rendelesek r ON t.tazon = r.tazon
         GROUP BY k.kazon
         ORDER BY termekek_szama DESC\`,
        (error, rows) => {
            if (error) res.json({error})
            else res.json({rows})
        }
    )
})`}
              </pre>
                </div>
              </div>
        </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Komplex Feladatok Megoldásai</h2>
              
        <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Mikroszolgáltatás Megoldás</h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                    {`// docker-compose.yml
version: '3.8'

services:
  gateway:
    build: ./gateway
    ports:
      - "3000:3000"
    depends_on:
      - auth
      - users
      - products

  auth:
    build: ./auth-service
    environment:
      - JWT_SECRET=your-secret-key
    depends_on:
      - auth-db

  users:
    build: ./user-service
    depends_on:
      - user-db

  products:
    build: ./product-service
    depends_on:
      - product-db

  auth-db:
    image: postgres:13
    environment:
      - POSTGRES_DB=auth
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password

  user-db:
    image: postgres:13
    environment:
      - POSTGRES_DB=users
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password

  product-db:
    image: postgres:13
    environment:
      - POSTGRES_DB=products
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password`}
              </pre>
            </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. CI/CD Pipeline Megoldás</h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 whitespace-pre-wrap break-words">
                    {`# .github/workflows/main.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16.x'
      - run: npm ci
      - run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t myapp:\${GITHUB_SHA} .
      - name: Push to registry
        run: |
          docker login -u \${DOCKER_USER} -p \${DOCKER_PASSWORD}
          docker push myapp:\${GITHUB_SHA}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Kubernetes
        uses: steebchen/kubectl@v2
        with:
          config: \${KUBE_CONFIG_DATA}
          command: set image deployment/myapp myapp=myapp:\${GITHUB_SHA}`}
              </pre>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gyakorlas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Önálló Gyakorló Feladatok</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Mini Projekt: Webshop API</h3>
                  <p className="text-gray-700 mb-4">
                    Készíts egy egyszerű webshop API-t a következő funkciókkal:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    <li>Termékek kezelése (CRUD műveletek)</li>
                    <li>Kategóriák kezelése</li>
                    <li>Rendelések kezelése</li>
                    <li>Statisztikák készítése</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tippek:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Használj megfelelő HTTP metódusokat</li>
                      <li>Implementálj hibakezelést</li>
                      <li>Készíts dokumentációt a végpontokhoz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SzakmaiVizsga; 