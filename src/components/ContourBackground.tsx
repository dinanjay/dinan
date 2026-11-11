import React from 'react';

const ContourBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      <svg 
        className="w-[200vw] h-[200vh] opacity-[0.06] dark:opacity-[0.05] dark:invert" 
        style={{ animation: 'pan-contour 60s linear infinite' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="topo-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.001" numOctaves="2" result="noise">
            <animate attributeName="baseFrequency" values="0.001 0.001; 0.0015 0.0015; 0.001 0.001" dur="25s" repeatCount="indefinite" />
          </feTurbulence>
          <feComponentTransfer in="noise" result="stepped">
            <feFuncR type="discrete" tableValues="0 0.25 0.5 0.75 1" />
            <feFuncG type="discrete" tableValues="0 0.25 0.5 0.75 1" />
            <feFuncB type="discrete" tableValues="0 0.25 0.5 0.75 1" />
          </feComponentTransfer>
          <feConvolveMatrix order="3" kernelMatrix="-1 -1 -1  -1 8 -1  -1 -1 -1" in="stepped" result="lines" />
          <feColorMatrix type="matrix" values="
            0 0 0 0 0
            0 0 0 0 0
            0 0 0 0 0
            1 0 0 0 0" in="lines" result="colored" />
        </filter>
        <rect width="100%" height="100%" filter="url(#topo-filter)" fill="transparent" />
      </svg>
    </div>
  );
};

export default ContourBackground;
