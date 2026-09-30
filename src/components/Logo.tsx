import React from "react";

interface LogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export default function Logo({ className = "h-10", isDarkBackground = false }: LogoProps) {
  // If isDarkBackground is true, we use white/gold colors for contrast.
  // If false, we use the original bronze/brown colors from the uploaded logo.
  const accentColor = isDarkBackground ? "#F3E5AB" : "#4A3419"; 
  const strokeColor = isDarkBackground ? "#2C1E0A" : "#4A3419"; 
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 120"
      className={className}
    >
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A47E3B" />
          <stop offset="30%" stopColor="#E8C86C" />
          <stop offset="50%" stopColor="#FFF3D1" />
          <stop offset="70%" stopColor="#E8C86C" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
      </defs>
      
      {/* Main Brand Text "LORINDALE" */}
      <text
        x="300"
        y="75"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fontWeight="bold"
        fill="url(#gold-grad)"
        stroke={strokeColor}
        strokeWidth="1.5"
        letterSpacing="2"
        textAnchor="middle"
      >
        LORINDALE
      </text>
      
      {/* Sub-text PHARMA lines */}
      <line
        x1="30"
        y1="102"
        x2="175"
        y2="102"
        stroke={accentColor}
        strokeWidth="2"
      />
      
      <text
        x="300"
        y="110"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="24"
        fontWeight="bold"
        fill={accentColor}
        letterSpacing="12"
        textAnchor="middle"
      >
        PHARMA
      </text>
      
      <line
        x1="425"
        y1="102"
        x2="570"
        y2="102"
        stroke={accentColor}
        strokeWidth="2"
      />
    </svg>
  );
}
