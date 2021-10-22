import React from 'react'
import ReactDOM from 'react-dom';
export default function Modal({ children, open, onClose }) {
    const ModalStyles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: 'white',
        padding: '50px',
        zIndex: 1000
    }
    const OverlayStyles = {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000
    };
    if (!open) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div style={OverlayStyles} />
            <div style={ModalStyles}>
                <button onClick={onClose}>Close modal</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
