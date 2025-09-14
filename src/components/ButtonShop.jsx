// components/ui/button.jsx
import React from 'react';
import '../styles/button.css'; 

export function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
}
