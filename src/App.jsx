import React, { useState, useEffect } from 'react';
import Divider from '../src/assets/divider.svg';
import Dice from '../src/assets/icon-dice.svg';

const App = () => {
  // Initial state to store the advice
  const [advice, setAdvice] = useState('');
  const [id, setId] = useState('');
  let url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => console.log('Error fetching advice', error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1f2632]">
      <div className="w-full max-w-xl bg-[#323a49] p-8 rounded-lg shadow-lg text-center">
        
        {/* Displaying Advice ID */}
        <p className="text-xl text-[#52ffa8] tracking-widest mb-4">Advice #{id}</p>

        {/* Displaying Advice */}
        <p className="text-xl text-[#cee3e9] font-[800] leading-9 text-[28px] mb-6">" {advice} " </p>

        {/* Divider Image */}
        <img className="mx-auto mb-6 " src={Divider} alt="divider" />

        {/* Dice Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-[50px] h-[50px] bg-[#52ffa8] rounded-full flex justify-center items-center shadow-xl cursor-pointer relative overflow-hidden">
            {/* Button to generate new advice */}
            <img 
              onClick={() => {
                fetch(url)
                  .then((res) => res.json())
                  .then((data) => {
                    setAdvice(data.slip.advice);
                    setId(data.slip.id);
                  })
                  .catch((error) => console.log('Error fetching advice', error));
              }} 
              className="cursor-pointer transition-all transform hover:scale-110 hover:shadow-2xl hover:animate-pulse" 
              src={Dice} 
              alt="dice" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
