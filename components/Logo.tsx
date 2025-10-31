import React from 'react';

interface LogoProps {
  isWhite?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isWhite = false, className }) => {
  const textColor = isWhite ? '#FFFFFF' : '#1F2937';
  const taglineColor = isWhite ? '#D1D5DB' : '#4B5563';
  const buildingColor = '#000000';
  const leafColor = '#38A169'; 

  return (
    <svg 
      viewBox="0 0 400 150" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GeoCity Ventures Limited Logo"
    >
      <g transform="scale(0.85) translate(30, -20)">
        {/* Buildings */}
        <g fill={buildingColor}>
          <path d="M125 100 V55 L115 40 L105 55 V100z" />
          <path d="M150 100 V40 H170 V100z" />
          <path d="M175 100 V65 L190 50 L205 65 V100z" />
          <path d="M210 100 V20 L220 0 H240 L250 20 V100z" />
          <path d="M255 100 V65 L270 50 L285 65 V100z" />
          <path d="M290 100 V40 H310 V100z" />
          <path d="M315 100 V55 L325 40 L335 55 V100z" />
        </g>
        {/* Leaf */}
        <g fill={leafColor}>
          <path d="M110 95 Q 220 125, 330 95 Q 220 110, 110 95 Z" />
          <path d="M110 105 Q 220 135, 330 105 Q 220 120, 110 105 Z" />
          <path d="M110 115 Q 220 145, 330 115 Q 220 130, 110 115 Z" />
        </g>
      </g>

      <text 
        x="200" 
        y="115" 
        fontFamily="Poppins, sans-serif" 
        fontSize="24" 
        fontWeight="bold" 
        fill={textColor} 
        textAnchor="middle"
        letterSpacing="1"
      >
        GEOCITY VENTURES LIMITED
      </text>
      <text 
        x="200" 
        y="135" 
        fontFamily="Poppins, sans-serif" 
        fontSize="14" 
        fill={taglineColor} 
        textAnchor="middle"
      >
        "Eco Spaces, Expertly Crafted."
      </text>
    </svg>
  );
};

export default Logo;
