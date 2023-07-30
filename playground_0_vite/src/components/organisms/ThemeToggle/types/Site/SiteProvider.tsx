import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContextType as SiteContextType, Options, _default as defaultSite} from './SiteInterface';

const SiteContext = createContext<SiteContextType | undefined>(undefined);

interface SiteProviderProps {
  children: ReactNode;
}

const SiteProvider: React.FC<SiteProviderProps> = ({ children }) => {
  const [site, setSite] = useState<Options>(defaultSite);

  const toggleSite = (newSite: Options) => {
    setSite(newSite);
  };

  return (
    <SiteContext.Provider value={{ site, toggleSite }}>
      {children}
    </SiteContext.Provider>
  );
};

const useSite = (): SiteContextType => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};

export type {Options};
export { SiteProvider, useSite };
