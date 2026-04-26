// "use client"

// import React, { useState } from 'react';

// function NameCalculator() {
//   const [name1, setName1] = useState('');
//   const [name2, setName2] = useState('');
//   const [result, setResult] = useState('');
//   const [quote, setQuote] = useState('');

//   const quotes = {
//     99: "You are a match made in heaven! 💖",
//     high: "Your love is like the wind, you can't see it but you can feel it. 🌹",
//     medium: "Love is not about how much you say 'I love you', but how much you prove that it's true. 💕",
//     low: "Every love story is beautiful, but ours is my favorite. 💞",
//     special: `vo chutiya hai,,,,,,, Focus only on Bhupesh 💖❤`,
//     arti: "Bhupesh is your only destiny"
//   };

//   const calculateLoveScore = (name1, name2) => {
//     const commonChars = {};
//     const allNames = name1 + 'LOVES' + name2;

//     // Count occurrences of each character
//     for (let char of allNames) {
//       commonChars[char] = (commonChars[char] || 0) + 1;
//     }

//     // Create initial sequence
//     const sequence = Object.values(commonChars);

//     // Function to sum pairs
//     const sumPairs = (seq) => {
//       const newSeq = [];
//       for (let i = 0; i < Math.floor(seq.length / 2); i++) {
//         newSeq.push(seq[i] + seq[seq.length - 1 - i]);
//       }
//       if (seq.length % 2 !== 0) {
//         newSeq.push(seq[Math.floor(seq.length / 2)]);
//       }
//       return newSeq;
//     };

//     // Reduce sequence to two digits
//     let currentSeq = sequence;
//     while (currentSeq.length > 2 || currentSeq.some(num => num >= 10)) {
//       currentSeq = sumPairs(currentSeq.map(num => num.toString().split('').map(Number)).flat());
//     }

//     return currentSeq.join('');
//   };

//   const handleCalculate = () => {
//     // Check for specific names
//     if ((name1.toUpperCase() === 'ARTI' && name2.toUpperCase() === 'BHUPESH') || 
//         (name1.toUpperCase() === 'BHUPESH' && name2.toUpperCase() === 'ARTI')) {
//       setResult('99');
//       setQuote(quotes[99]);
//     } else if ((name1.toUpperCase() === 'JIBBRAN' && name2.toUpperCase() === 'ARTI') || 
//                (name1.toUpperCase() === 'ARTI' && name2.toUpperCase() === 'JIBBRAN')) {
//       setResult('-33');
//       setQuote(quotes.special);
//     } else if (name1.toUpperCase() === 'ARTI' || name2.toUpperCase() === 'ARTI') {
//       setQuote(quotes.arti);
//       const score = calculateLoveScore(name1, name2);
//       setResult(score);
//     } else {
//       const score = calculateLoveScore(name1, name2);
//       setResult(score);
//       if (parseInt(score) > 75) {
//         setQuote(quotes.high);
//       } else if (parseInt(score) > 50) {
//         setQuote(quotes.medium);
//       } else {
//         setQuote(quotes.low);
//       }
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '600px',
//       margin: '50px auto',
//       padding: '40px',
//       textAlign: 'center',
//       backgroundColor: '#fff0f5',
//       borderRadius: '15px',
//       boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//       fontFamily: "'Dancing Script', cursive",
//       color: '#b30000'
//     }}>
//       <h2 style={{ fontSize: '40px', marginBottom: '30px' }}>Love Calculator 💖</h2>
//       <input
//         type="text"
//         placeholder="Enter first name"
//         value={name1}
//         onChange={(e) => setName1(e.target.value)}
//         style={{
//           padding: '15px',
//           margin: '10px 0',
//           width: '100%',
//           borderRadius: '10px',
//           border: '1px solid #ffcccc',
//           fontFamily: "'Dancing Script', cursive",
//           fontSize: '20px'
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Enter second name"
//         value={name2}
//         onChange={(e) => setName2(e.target.value)}
//         style={{
//           padding: '15px',
//           margin: '10px 0',
//           width: '100%',
//           borderRadius: '10px',
//           border: '1px solid #ffcccc',
//           fontFamily: "'Dancing Script', cursive",
//           fontSize: '20px'
//         }}
//       />
//       <button
//         onClick={handleCalculate}
//         style={{
//           padding: '15px 30px',
//           backgroundColor: '#ff4d4d',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '10px',
//           cursor: 'pointer',
//           fontFamily: "'Dancing Script', cursive",
//           fontSize: '22px',
//           transition: 'background-color 0.3s'
//         }}
//         onMouseOver={(e) => e.target.style.backgroundColor = '#e60000'}
//         onMouseOut={(e) => e.target.style.backgroundColor = '#ff4d4d'}
//       >
//         Calculate
//       </button>
//       {result && (
//         <div style={{
//           marginTop: '30px',
//           fontSize: '26px',
//           fontWeight: 'bold',
//           color: '#b30000'
//         }}>
//           Your Love Score: {result} 💞
//         </div>
//       )}
//       {quote && (
//         <div style={{
//           marginTop: '20px',
//           fontSize: '20px',
//           fontStyle: 'italic',
//           color: '#800000'
//         }}>
//           "{quote}"
//         </div>
//       )}
//     </div>
//   );
// }

// export default NameCalculator;