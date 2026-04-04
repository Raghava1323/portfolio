// Wave and angular section dividers for visual wow-factor

export const WaveDivider = ({ flip = false, color = '#ffffff', className = '' }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
      <path
        d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100Z"
        fill={color}
      />
    </svg>
  </div>
);

export const AngledDivider = ({ flip = false, color = '#ffffff', className = '' }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
      <polygon points="0,60 1440,0 1440,60" fill={color} />
    </svg>
  </div>
);

export const CurveDivider = ({ flip = false, color = '#ffffff', className = '' }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px]">
      <path
        d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80Z"
        fill={color}
      />
    </svg>
  </div>
);
