import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div className='font-sans text-white w-100'>
      <header className='  p-3 bg-black w-100'>
        <h1 className='float-left text-xl tracking-wider text-lime-500'>
          projector
        </h1>
        <nav className='display-block align-right'>
          <ul className='display-inline'>
            <li className='float-right pr-4'>about</li>
            <li className='float-right pr-4'>about2</li>
            <li className='float-right pr-4'>about3</li>
            <li className='float-right pr-4'>about3</li>
          </ul>
        </nav>
      </header>
      <section className='pt-9'></section>
    </div>
  );
}

export default App;
