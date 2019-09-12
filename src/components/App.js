import React from 'react';
import Header from './Header'
import WorkList from './WorkList'
import '../styles/App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="f2 avenir tc ttu pa2">Work</div>
      <div className="mw6 center">
        <WorkList />
      </div>
    </div>
  );
}

export default App;
