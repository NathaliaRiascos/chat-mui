import React, { useEffect, useState } from 'react';

const useDimensions = () => {
  const [isMobile, setDimensions] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleDimensions = () => {
      setDimensions(window.innerWidth <= 768);
    };
    window.onresize = handleDimensions;
    return () => window.removeEventListener('resize', handleDimensions);
  }, []);

  return {
    isMobile,
  };
};

export default useDimensions;