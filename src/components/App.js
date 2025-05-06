import React, { useState, useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputSubmit = () => {
    const parsed = parseInt(number, 10);
    if (!isNaN(parsed)) {
      setNumbers(prev => [...prev, parsed]);
      setNumber('');
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <input
        data-testid="number-input"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleInputSubmit();
          }
        }}
        style={{ fontSize: '20px', textAlign: 'center' }}
      />
      <p data-testid="sum-output" style={{ marginTop: '20px', fontSize: '20px' }}>
        Sum: {sum}
      </p>
    </div>
  );
};

export default App;


