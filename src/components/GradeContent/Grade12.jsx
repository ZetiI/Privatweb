import React, { useState } from 'react';
import { FaCode, FaDatabase, FaServer, FaCheckCircle, FaLightbulb, FaQuestionCircle, FaPlay } from 'react-icons/fa';

const Grade12 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');
  const [expandedSections, setExpandedSections] = useState({
    jsIntegracio: true,
    ajaxFetch: false,
    sqlAlapok: false,
    sqlOsszetett: false,
    apiIntegracio: false,
    security: false,
    testing: false,
    deployment: false
  });
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data:\nUsername: ${formData.username}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ username: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaDatabase className="text-blue-600 text-2xl" />
          </div>
    <div>
            <h1 className="text-4xl font-bold text-gray-800">Webfejlesztés és Adatbázisok</h1>
            <p className="text-green-600 font-medium">12. osztályos informatika</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Üdvözöljük a webfejlesztés és adatbázis-kezelés haladó kurzusán! Ebben a tananyagban 
          megtanuljuk, hogyan lehet összekapcsolni a JavaScript kódot az adatbázisokkal, hogyan 
          kezeljünk komplex adatstruktúrákat, és hogyan építsünk teljes webalkalmazásokat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCode className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Tananyag</h3>
            </div>
            <p className="text-gray-600">
              JavaScript és SQL integráció, AJAX kérések, adatbázis műveletek és gyakorlati példák.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">Feladatok</h3>
            </div>
            <p className="text-gray-600">
              Komplex projektfeladatok és gyakorlati példák a tanultak alkalmazására.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FaServer className="text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">Backend Fejlesztés</h3>
            </div>
            <p className="text-gray-600">
              Szerver oldali programozás, API-k készítése és adatbázis kapcsolatok.
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
              onClick={() => toggleSection('jsIntegracio')}
            >
              <h3 className="text-2xl font-bold text-gray-800">JavaScript és HTML Integráció</h3>
              <span className="text-gray-500">
                {expandedSections.jsIntegracio ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.jsIntegracio && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A modern webalkalmazások fejlesztésénél kulcsfontosságú a JavaScript és HTML elemek 
                    hatékony integrációja. Nézzük meg a legfontosabb technikákat és best practice-eket.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Fontos tudnivaló</h4>
                        <p className="text-gray-700">
                          Mindig használj eseménydelegálást nagy listák vagy dinamikusan generált elemek esetén 
                          a jobb teljesítmény érdekében.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">DOM manipuláció példák</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                {`// DOM elemek kiválasztása
const element = document.getElementById('myElement');
const elements = document.getElementsByClassName('myClass');
const queryElement = document.querySelector('.myClass');

// Eseménykezelés
element.addEventListener('click', function(event) {
    console.log('Kattintás történt!');
    event.preventDefault();
});

// DOM módosítás
element.innerHTML = 'Új tartalom';
element.classList.add('newClass');
element.style.color = 'red';`}
              </pre>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Elemek kezelése</h5>
                      <ul className="text-sm space-y-1">
                        <li>createElement()</li>
                        <li>appendChild()</li>
                        <li>removeChild()</li>
                        <li>replaceChild()</li>
                      </ul>
            </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Attribútumok</h5>
                      <ul className="text-sm space-y-1">
                        <li>getAttribute()</li>
                        <li>setAttribute()</li>
                        <li>hasAttribute()</li>
                        <li>removeAttribute()</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Stílusok</h5>
                      <ul className="text-sm space-y-1">
                        <li>style tulajdonság</li>
                        <li>classList metódusok</li>
                        <li>computedStyle</li>
                        <li>CSS változók</li>
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
              onClick={() => toggleSection('ajaxFetch')}
            >
              <h3 className="text-2xl font-bold text-gray-800">AJAX és Fetch API</h3>
              <span className="text-gray-500">
                {expandedSections.ajaxFetch ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.ajaxFetch && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Az AJAX (Asynchronous JavaScript and XML) és a modern Fetch API lehetővé teszi 
                    az aszinkron adatkommunikációt a szerverrel, így a weboldalunk frissítése nélkül 
                    tudunk adatokat küldeni és fogadni.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Modern megközelítés</h4>
                        <p className="text-gray-700">
                          A modern webfejlesztésben a Fetch API és az async/await szintaxis használata 
                          ajánlott az XMLHttpRequest helyett.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Fetch API példák</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Adatok lekérése
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Hiba:', error);
    }
}

// Adatok küldése
async function postData(data) {
    try {
        const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log('Sikeres küldés:', result);
    } catch (error) {
        console.error('Hiba:', error);
    }
}`}
              </pre>
            </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('sqlAlapok')}
            >
              <h3 className="text-2xl font-bold text-gray-800">SQL Alapok</h3>
              <span className="text-gray-500">
                {expandedSections.sqlAlapok ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.sqlAlapok && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Az SQL (Structured Query Language) az adatbázis-kezelés alapvető nyelve. 
                    Segítségével tudunk adatokat tárolni, lekérdezni és módosítani relációs 
                    adatbázisokban.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Tipp</h4>
                        <p className="text-gray-700">
                          Mindig használj előkészített lekérdezéseket (prepared statements) a 
                          SQL injection támadások elkerülése érdekében.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Alapvető SQL parancsok</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                {`-- Tábla létrehozása
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adatok beszúrása
INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');

-- Adatok lekérdezése
SELECT * FROM users WHERE email LIKE '%@example.com';

-- Adatok frissítése
UPDATE users 
SET email = 'new@example.com' 
WHERE username = 'john_doe';

-- Adatok törlése
DELETE FROM users WHERE id = 1;`}
              </pre>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">DDL parancsok</h5>
                      <ul className="text-sm space-y-1">
                        <li>CREATE</li>
                        <li>ALTER</li>
                        <li>DROP</li>
                        <li>TRUNCATE</li>
                      </ul>
            </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">DML parancsok</h5>
                      <ul className="text-sm space-y-1">
                        <li>SELECT</li>
                        <li>INSERT</li>
                        <li>UPDATE</li>
                        <li>DELETE</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-600 mb-2">Megszorítások</h5>
                      <ul className="text-sm space-y-1">
                        <li>PRIMARY KEY</li>
                        <li>FOREIGN KEY</li>
                        <li>UNIQUE</li>
                        <li>NOT NULL</li>
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
              onClick={() => toggleSection('sqlOsszetett')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Haladó SQL Műveletek</h3>
              <span className="text-gray-500">
                {expandedSections.sqlOsszetett ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.sqlOsszetett && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A haladó SQL műveletek lehetővé teszik komplex lekérdezések és adatmanipulációk 
                    végrehajtását. Ezek a technikák elengedhetetlenek nagyobb adatbázisok kezeléséhez.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">JOIN műveletek</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                {`-- INNER JOIN példa
SELECT orders.order_id, customers.name, orders.order_date
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

-- LEFT JOIN példa
SELECT customers.name, COUNT(orders.order_id) as order_count
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.id;

-- MULTIPLE JOIN példa
SELECT 
    orders.order_id,
    customers.name,
    products.product_name,
    order_items.quantity
FROM orders
JOIN customers ON orders.customer_id = customers.id
JOIN order_items ON orders.order_id = order_items.order_id
JOIN products ON order_items.product_id = products.id;`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Aggregáló függvények</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`-- Alapvető aggregációk
SELECT 
    COUNT(*) as total_orders,
    SUM(total_amount) as total_revenue,
    AVG(total_amount) as avg_order_value,
    MIN(order_date) as first_order,
    MAX(order_date) as last_order
FROM orders;

-- GROUP BY és HAVING használata
SELECT 
    category_id,
    COUNT(*) as product_count,
    AVG(price) as avg_price
FROM products
GROUP BY category_id
HAVING avg_price > 100;

-- Window függvények
SELECT 
    product_name,
    price,
    category_id,
    AVG(price) OVER (PARTITION BY category_id) as category_avg_price,
    price - AVG(price) OVER (PARTITION BY category_id) as diff_from_avg
FROM products;`}
              </pre>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Teljesítmény tipp</h4>
                        <p className="text-gray-700">
                          Nagy adathalmazoknál mindig használj indexeket a JOIN műveletekhez és WHERE 
                          feltételekhez. Az EXPLAIN paranccsal ellenőrizheted a lekérdezések végrehajtási tervét.
                        </p>
            </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Tranzakciók és zárolás</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`-- Tranzakció kezelés
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Ellenőrzés
IF (SELECT balance FROM accounts WHERE id = 1) >= 0 THEN
    COMMIT;
ELSE
    ROLLBACK;
END IF;

-- Zárolás példa
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
-- Most más tranzakciók várni fognak, amíg ez a tranzakció befejeződik

-- Izolációs szintek beállítása
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- vagy
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`}
                  </pre>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('apiIntegracio')}
            >
              <h3 className="text-2xl font-bold text-gray-800">API Integráció</h3>
              <span className="text-gray-500">
                {expandedSections.apiIntegracio ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.apiIntegracio && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A modern webalkalmazások fejlesztésénél kulcsfontosságú a különböző API-k 
                    integrációja. Nézzük meg a leggyakoribb módszereket és best practice-eket.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">REST API Integráció</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// API kliens osztály
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = localStorage.getItem('token');
    }

    async request(endpoint, options = {}) {
        const url = \`\${this.baseUrl}\${endpoint}\`;
        const headers = {
            'Content-Type': 'application/json',
            ...(this.token && { 'Authorization': \`Bearer \${this.token}\` }),
            ...options.headers
        };

        try {
            const response = await fetch(url, {
                ...options,
                headers
            });

            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }

            const data = await response.json();
            return data;
    } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // CRUD műveletek
    async get(endpoint) {
        return this.request(endpoint);
    }

    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Használat példa
const api = new ApiClient('https://api.example.com');

// Adatok lekérése
try {
    const users = await api.get('/users');
    console.log('Users:', users);

    // Új felhasználó létrehozása
    const newUser = await api.post('/users', {
        name: 'John Doe',
        email: 'john@example.com'
    });

    // Felhasználó módosítása
    await api.put(\`/users/\${newUser.id}\`, {
        name: 'John Updated'
    });

    // Felhasználó törlése
    await api.delete(\`/users/\${newUser.id}\`);
} catch (error) {
    console.error('API művelet sikertelen:', error);
}`}
              </pre>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">API Biztonság</h4>
                        <p className="text-gray-700">
                          Mindig használj HTTPS-t API kommunikációhoz, és implementálj megfelelő 
                          hibakezelést és retry mechanizmusokat a megbízhatatlan hálózati kapcsolatok kezelésére.
                        </p>
            </div>
        </div>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">GraphQL Integráció</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// GraphQL kliens Apollo Client használatával
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.example.com/graphql',
    cache: new InMemoryCache()
});

// Query példa
const GET_USERS = gql\`
    query GetUsers {
        users {
            id
            name
            email
            posts {
                id
                title
            }
        }
    }
\`;

// Mutation példa
const CREATE_USER = gql\`
    mutation CreateUser($name: String!, $email: String!) {
        createUser(name: $name, email: $email) {
            id
            name
            email
        }
    }
\`;

// Használat
async function fetchUsers() {
    try {
        const { data } = await client.query({
            query: GET_USERS
        });
        console.log('Users:', data.users);
    } catch (error) {
        console.error('GraphQL query failed:', error);
    }
}

async function createUser(name, email) {
    try {
        const { data } = await client.mutate({
            mutation: CREATE_USER,
            variables: { name, email }
        });
        console.log('Created user:', data.createUser);
    } catch (error) {
        console.error('GraphQL mutation failed:', error);
    }
}`}
                  </pre>
                </div>
        </div>
      )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('security')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Webalkalmazás Biztonság</h3>
              <span className="text-gray-500">
                {expandedSections.security ? '▲' : '▼'}
              </span>
    </div>

            {expandedSections.security && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A webalkalmazások biztonsága kritikus fontosságú. Ismerjük meg a legfontosabb 
                    biztonsági kockázatokat és azok megelőzési módjait.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">XSS (Cross-Site Scripting) Védelem</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Rossz példa - sebezhető kód
element.innerHTML = userInput;  // SOHA ne csináld ezt!

// Helyes megoldás - escape HTML
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Használat
element.textContent = userInput;  // Biztonságos
// vagy
element.innerHTML = escapeHtml(userInput);  // Biztonságos

// React automatikusan escape-eli a stringeket
const Component = () => {
    return <div>{userInput}</div>;  // Biztonságos
};

// DOMPurify használata ha HTML-t kell engedélyezni
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">CSRF (Cross-Site Request Forgery) Védelem</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// CSRF token generálása
function generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
}

// Token ellenőrzése
app.use((req, res, next) => {
    // Token generálása minden munkamenethez
    if (!req.session.csrfToken) {
        req.session.csrfToken = generateCSRFToken();
    }
    
    // Token ellenőrzése POST kéréseknél
    if (req.method === 'POST') {
        const token = req.headers['x-csrf-token'];
        if (!token || token !== req.session.csrfToken) {
            return res.status(403).json({ error: 'Invalid CSRF token' });
        }
    }
    
    next();
});

// Frontend implementáció
async function submitForm(data) {
    try {
        const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken  // Token küldése
                    },
            body: JSON.stringify(data)
                });
        // ...
            } catch (error) {
        console.error('Form submission failed:', error);
    }
}`}
            </pre>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Biztonsági figyelmeztetés</h4>
                        <p className="text-gray-700">
                          Soha ne tárolj érzékeny adatokat (jelszavak, tokenek) plain textként. 
                          Mindig használj erős titkosítást és hash függvényeket.
                        </p>
        </div>
        </div>
    </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">SQL Injection Védelem</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Rossz példa - sebezhető kód
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;  // SOHA!

// Helyes megoldás - prepared statements
const query = 'SELECT * FROM users WHERE username = ?';
connection.query(query, [username], (error, results) => {
    if (error) throw error;
    console.log(results);
});

// Vagy async/await használatával
async function getUser(username) {
    try {
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await connection.execute(query, [username]);
        return rows[0];
            } catch (error) {
        console.error('Database query failed:', error);
        throw error;
    }
}

// ORM használata (pl. Sequelize)
const user = await User.findOne({
    where: { username }  // Automatikusan biztonságos
});`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Jelszókezelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Bcrypt használata jelszó hasheléshez
const bcrypt = require('bcrypt');
const saltRounds = 12;

// Jelszó hashelése
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        console.error('Password hashing failed:', error);
        throw error;
    }
}

// Jelszó ellenőrzése
async function verifyPassword(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (error) {
        console.error('Password verification failed:', error);
        throw error;
    }
}

// Használat
async function registerUser(username, password) {
    try {
        const hashedPassword = await hashPassword(password);
        // Mentés adatbázisba...
    } catch (error) {
        console.error('User registration failed:', error);
        throw error;
    }
}

async function loginUser(username, password) {
    try {
        const user = await getUser(username);
        if (!user) return false;
        
        const isValid = await verifyPassword(password, user.password);
        return isValid;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}`}
            </pre>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('testing')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Tesztelés és Hibakezelés</h3>
              <span className="text-gray-500">
                {expandedSections.testing ? '▲' : '▼'}
              </span>
        </div>

            {expandedSections.testing && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A megfelelő tesztelés és hibakezelés elengedhetetlen a megbízható alkalmazások 
                    fejlesztéséhez. Ismerjük meg a legfontosabb technikákat.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Unit Tesztelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Jest használata React komponensek teszteléséhez
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm', () => {
    test('renders form elements', () => {
        render(<UserForm />);
        
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('handles form submission', async () => {
        const mockSubmit = jest.fn();
        render(<UserForm onSubmit={mockSubmit} />);
        
        fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: 'testuser' }
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' }
        });
        
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        
        expect(mockSubmit).toHaveBeenCalledWith({
            username: 'testuser',
            password: 'password123'
        });
    });
});

// Függvények tesztelése
describe('utils', () => {
    test('validates email correctly', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('invalid-email')).toBe(false);
    });

    test('formats currency correctly', () => {
        expect(formatCurrency(1234.56)).toBe('$1,234.56');
        expect(formatCurrency(0)).toBe('$0.00');
    });
});`}
            </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Integrációs Tesztelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Supertest használata API teszteléshez
const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
    test('GET /api/users returns users', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200);
            
        expect(response.body).toBeInstanceOf(Array);
    });

    test('POST /api/users creates new user', async () => {
        const userData = {
            username: 'testuser',
            email: 'test@example.com'
        };
        
        const response = await request(app)
            .post('/api/users')
            .send(userData)
            .expect('Content-Type', /json/)
            .expect(201);
            
        expect(response.body).toHaveProperty('id');
        expect(response.body.username).toBe(userData.username);
    });
});

// Adatbázis műveletek tesztelése
describe('Database Operations', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    beforeEach(async () => {
        await db.clear();
    });

    test('creates user in database', async () => {
        const user = await createUser({
            username: 'testuser',
            email: 'test@example.com'
        });
        
        expect(user.id).toBeDefined();
        
        const foundUser = await findUserById(user.id);
        expect(foundUser).toMatchObject({
            username: 'testuser',
            email: 'test@example.com'
        });
    });
});`}
                  </pre>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Tesztelési tipp</h4>
                        <p className="text-gray-700">
                          Használj mock objektumokat és test double-öket a külső függőségek 
                          (pl. adatbázis, API-k) helyettesítésére a unit tesztekben.
                        </p>
            </div>
        </div>
    </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Hibakezelés</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Központi hibakezelő middleware
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// Express hibakezelő middleware
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        // Production
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            // Programming or unknown error
            console.error('ERROR:', err);
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong!'
            });
        }
    }
});

// Async hibakezelő wrapper
const catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// Használat
app.get('/api/users', catchAsync(async (req, res) => {
    const users = await User.find();
    if (!users.length) {
        throw new AppError('No users found', 404);
    }
    res.json(users);
}));`}
                  </pre>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50"
              onClick={() => toggleSection('deployment')}
            >
              <h3 className="text-2xl font-bold text-gray-800">Deployment és CI/CD</h3>
              <span className="text-gray-500">
                {expandedSections.deployment ? '▲' : '▼'}
              </span>
            </div>
            
            {expandedSections.deployment && (
              <div className="p-6 space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A modern webalkalmazások fejlesztésének fontos része a hatékony deployment 
                    folyamat és a folyamatos integráció/folyamatos szállítás (CI/CD) gyakorlata.
                  </p>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Docker Konténerizáció</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`# Dockerfile példa
FROM node:18-alpine

WORKDIR /app

# Függőségek másolása és telepítése
COPY package*.json ./
RUN npm ci --only=production

# Alkalmazás fájlok másolása
COPY . .

# Build process
RUN npm run build

# Port beállítása
EXPOSE 3000

# Alkalmazás indítása
CMD ["npm", "start"]

# Docker Compose konfiguráció
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://user:pass@db:5432/dbname
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=dbname
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
            </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">GitHub Actions CI/CD</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`# .github/workflows/ci.yml
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
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Run linting
      run: npm run lint
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # Add deployment steps here`}
                  </pre>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Deployment tipp</h4>
                        <p className="text-gray-700">
                          Használj környezeti változókat a konfigurációhoz és soha ne commitolj 
                          érzékeny adatokat a verziókezelő rendszerbe.
                        </p>
            </div>
                    </div>
    </div>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Monitoring és Naplózás</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Winston logger konfiguráció
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// Prometheus metrikák
const prometheus = require('prom-client');
const collectDefaultMetrics = prometheus.collectDefaultMetrics;

// Metrikák gyűjtése
collectDefaultMetrics();

// Egyedi metrika
const httpRequestDurationMicroseconds = new prometheus.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 500]
});

// Express middleware a metrikák gyűjtéséhez
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        httpRequestDurationMicroseconds
            .labels(req.method, req.route.path, res.statusCode)
            .observe(duration);
    });
    next();
});

// Metrikák endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(await prometheus.register.metrics());
});`}
                  </pre>

                  <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Teljesítmény Optimalizálás</h4>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    {`// Redis gyorsítótár implementálása
const Redis = require('ioredis');
const redis = new Redis();

// Gyorsítótárazott adatlekérés
async function getCachedData(key, fetchFunction) {
    try {
        // Próbáljuk meg először a cache-ből
        const cachedData = await redis.get(key);
        if (cachedData) {
            return JSON.parse(cachedData);
        }

        // Ha nincs cache, lekérjük az adatot
        const data = await fetchFunction();
        
        // Cache-eljük az eredményt
        await redis.set(key, JSON.stringify(data), 'EX', 3600);
        
        return data;
    } catch (error) {
        console.error('Cache error:', error);
        // Fallback direkt lekérésre hiba esetén
        return fetchFunction();
    }
}

// Webpack optimalizálás
module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};`}
                  </pre>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex items-start">
                      <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Optimalizálási tipp</h4>
                        <p className="text-gray-700">
                          Használj CDN-t a statikus tartalmakhoz, és implementálj lazy loading-ot 
                          a nagy méretű komponensekhez és képekhez.
                        </p>
                    </div>
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

export default Grade12; 