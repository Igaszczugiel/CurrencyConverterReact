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


import React from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import Input from './Components/Input/Input';
import From from './Components/From/From';
import Into from './Components/Into/Into';
import SubmitButton from './Components/SubmitButton/SubmitButton';
import Equals from './Components/Equals/Equals';

function App() {
  return (
    <>
      <Logo></Logo>
      <main>
        <Input></Input>
        <From></From>
        <Into></Into>
        <SubmitButton></SubmitButton>
        <Equals></Equals>
      </main>
    </>
  );
}
export default App;
