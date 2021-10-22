import React, { useState } from 'react';
import logo from './logo.svg';
import Modal from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const BUTTON_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  const CONTENT_STYLE = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }
  return (
    <>
      <div style={BUTTON_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <p>Fancy Modal dialog</p>
        </Modal>
      </div>
      <div style={CONTENT_STYLE}>
        OTHER CONTENT
      </div>
    </>
  );
}

export default App;
