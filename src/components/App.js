import React from 'react';
import Header from './Header'
import WorkList from './WorkList'
import '../styles/App.scss';

import SimpleIcons from 'simple-icons-react-component';

function App() {
  return (
    <>
      <Header />
      <div className="mw6 center">
        <WorkList />
      </div>

      <footer className="avenir mw5 center mt3 ph3 pt5 pb5">
        <div className="tc">
          <div className="w2 h2 dib ma2">
            <a href="https://github.com/trg"><SimpleIcons name="GitHub" /></a>
          </div>
          <div className="w2 h2 dib ma2">
            <a href="https://www.upwork.com/o/profiles/users/_~0127246e78ce33d110/"><SimpleIcons name="Upwork" /></a>
          </div>
          <div className="w2 h2 dib ma2">
            <a href="https://www.linkedin.com/in/thomasgraft/"><SimpleIcons name="LinkedIn" /></a>
          </div>
          <div className="w2 h2 dib ma2">
            <a href="https://twitter.com/t__"><SimpleIcons name="Twitter" /></a>
          </div>
          {/* <div className="w2 h2 dib ma2">
            <a href="/blog"><SimpleIcons name="WordPress" /></a>
          </div> */}
        </div>
        <div className="tc pa3 black">
          let's work together<br />
          <a href="mailto:tom@tomgraft.dev">tom@tomgraft.dev</a>
        </div>
      </footer>
    </>
  );
}

export default App;
