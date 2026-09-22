import React from 'react';

interface CloudDividerProps {
  className?: string;
}

export const CloudDivider: React.FC<CloudDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20 select-none ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1600 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="relative block w-full h-[110px] sm:h-[145px] md:h-[175px] lg:h-[210px] text-white translate-y-[2px]"
      >
        {/* Solid white bottom block to guarantee 100% white base with zero gaps */}
        <rect x="0" y="170" width="1600" height="90" fill="#ffffff" />

        {/* 
          PIXEL-PERFECT CLOUD SILHOUETTE FROM REFERENCE IMAGE:
          1. Left Rise & Dip:
             (-30, 180), (35, 155), (85, 135), (145, 100), (205, 65), (265, 110), (310, 140)
          2. Towering Cluster 1 (Left-Center):
             (360, 110), (410, 65), (465, 25), (525, 40), (580, 85), (630, 125)
          3. Center Multiple Rolling Bubbles (No flat spot!):
             (670, 145), (715, 115), (760, 135), (805, 110), (855, 130), (905, 95)
          4. Towering Cluster 2 (Right-Center):
             (960, 50), (1020, 20), (1080, 45), (1135, 80), (1185, 120)
          5. Right Trailing Cluster:
             (1230, 140), (1275, 115), (1330, 75), (1390, 55), (1450, 85), (1510, 120), (1570, 150), (1630, 175)
        */}

        {/* --- Cluster 1 (Left Edge & First Rise) --- */}
        <circle cx="-30" cy="190" r="75" fill="#ffffff" />
        <circle cx="35" cy="165" r="70" fill="#ffffff" />
        <circle cx="90" cy="140" r="65" fill="#ffffff" />
        <circle cx="150" cy="100" r="80" fill="#ffffff" />
        <circle cx="210" cy="65" r="90" fill="#ffffff" />
        <circle cx="270" cy="110" r="70" fill="#ffffff" />
        <circle cx="315" cy="145" r="60" fill="#ffffff" />

        {/* --- Cluster 2 (Left-Center High Towering Peak) --- */}
        <circle cx="365" cy="115" r="70" fill="#ffffff" />
        <circle cx="415" cy="70" r="85" fill="#ffffff" />
        <circle cx="470" cy="25" r="100" fill="#ffffff" />
        <circle cx="530" cy="40" r="90" fill="#ffffff" />
        <circle cx="585" cy="85" r="80" fill="#ffffff" />
        <circle cx="635" cy="125" r="65" fill="#ffffff" />

        {/* --- Cluster 3 (Center Active Fluffy Waves - NO Flat Section) --- */}
        <circle cx="675" cy="145" r="55" fill="#ffffff" />
        <circle cx="720" cy="115" r="65" fill="#ffffff" />
        <circle cx="765" cy="135" r="55" fill="#ffffff" />
        <circle cx="810" cy="105" r="65" fill="#ffffff" />
        <circle cx="860" cy="130" r="60" fill="#ffffff" />
        <circle cx="910" cy="95" r="75" fill="#ffffff" />

        {/* --- Cluster 4 (Right-Center High Towering Peak) --- */}
        <circle cx="965" cy="50" r="95" fill="#ffffff" />
        <circle cx="1025" cy="20" r="105" fill="#ffffff" />
        <circle cx="1085" cy="45" r="95" fill="#ffffff" />
        <circle cx="1140" cy="85" r="80" fill="#ffffff" />
        <circle cx="1190" cy="125" r="65" fill="#ffffff" />

        {/* --- Cluster 5 (Right Edge Trailing Bubbles) --- */}
        <circle cx="1235" cy="145" r="60" fill="#ffffff" />
        <circle cx="1280" cy="115" r="70" fill="#ffffff" />
        <circle cx="1335" cy="75" r="85" fill="#ffffff" />
        <circle cx="1395" cy="55" r="90" fill="#ffffff" />
        <circle cx="1455" cy="85" r="80" fill="#ffffff" />
        <circle cx="1515" cy="120" r="75" fill="#ffffff" />
        <circle cx="1575" cy="150" r="70" fill="#ffffff" />
        <circle cx="1635" cy="180" r="75" fill="#ffffff" />

        {/* Continuous Infill Underneath all bubbles to prevent any subpixel gaps */}
        <polygon
          points="-50,260 1650,260 1650,180 1575,150 1515,120 1395,75 1335,95 1280,125 1190,135 1140,95 1025,40 910,110 810,120 720,130 635,140 585,95 470,45 365,130 270,120 210,80 90,150 -30,190"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
