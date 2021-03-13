import React from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import Converter from './Components/Converter/Converter';
import SubmitButton from './Components/SubmitButton/SubmitButton';

function App() {
  return (
    <>
      <Logo></Logo>
      <main>
        <Converter></Converter>
        <SubmitButton></SubmitButton>
      </main>
    </>
  );
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


