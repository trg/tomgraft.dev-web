import React, { Fragment } from 'react';
import Header from './Header'
import WorkList from './WorkList'
import '../styles/App.scss';

import SimpleIcons from 'simple-icons-react-component';

function App() {
  return (
    <>
      <Header />
      <div className="f2 avenir tc ttu pa2 tracked fw2">Work</div>
      <div className="mw6 center">
        <WorkList />
      </div>

      <footer class="avenir mw5 center mt3 pa3">
        <div className="tc">
          <div className="w2 h2 dib ma2">
            <a href="https://github.com/trg"><SimpleIcons name="GitHub" /></a>
          </div>
          <div className="w2 h2 dib ma2">
            <a href="https://twitter.com/t__"><SimpleIcons name="Twitter" /></a>
          </div>
        </div>
        <div className="tc pa3"><a href="mailto:tom@tomgraft.dev">tom@tomgraft.dev</a></div>
      </footer>
    </>
  );
}

export default App;
