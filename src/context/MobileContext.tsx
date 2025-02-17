import { createContext, useContext, useEffect, useState } from 'react';

interface MobileContextType {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

const MobileContext = createContext<MobileContextType>({ 
  isMobile: false,
  setIsMobile: () => {} 
});

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
}

export const useMobile = () => useContext(MobileContext); 