import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    fetch('http://localhost:8080/api/motivation')
      .then(res => res.json())
      .then(data => setQuote(data.quote));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>🎯 FocusFlow : Votre Coach IA</h1>
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        <h2 style={{ fontStyle: 'italic' }}>"{quote}"</h2>
      </div>
      
      <input 
        type="text" 
        placeholder="Quel est votre objectif aujourd'hui ?" 
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none' }}>
        Enregistrer l'objectif
      </button>
    </div>
  );
}

export default App;