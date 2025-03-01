import { createContext, useContext, useState, ReactNode } from 'react';
import { Swiper } from 'swiper/types';

// Define the type for our context state
interface AppContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  swiper: Swiper | null;
  setSwiper: (swiper: Swiper | null) => void;
  isModelLoaded: boolean;
  setIsModelLoaded: (isModelLoaded: boolean) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const value = {
    activeIndex,
    setActiveIndex,
    swiper,
    setSwiper,
    isModelLoaded,
    setIsModelLoaded
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Create a custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
} 