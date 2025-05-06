import React, { useState, useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Handles input changes and adds the number to the list
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') return;
    
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setNumbers(prev => [...prev, parsed]);
    }

    setNumber(''); // Clear the input field after entry
  };

  // Asynchronously calculate the sum when numbers array changes
  useEffect(() => {
    let isCancelled = false;

    const calculateSum = async () => {
      // simulate async processing
      await new Promise(resolve => setTimeout(resolve, 100));
      const total = numbers.reduce((acc, num) => acc + num, 0);
      if (!isCancelled) {
        setSum(total);
      }
    };

    calculateSum();

    return () => {
      isCancelled = true;
    };
  }, [numbers]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onBlur={handleInputChange} // triggers when the input loses focus
        onKeyDown={(e) => e.key === 'Enter' && handleInputChange(e)} // support pressing Enter
        style={{ fontSize: '20px', textAlign: 'center' }}
      />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        Sum: {sum}
      </div>
    </div>
  );
};

export default App;
