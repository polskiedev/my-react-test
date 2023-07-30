import React, { createContext, useContext, useState, ReactNode } from 'react';

import { ContextType as ThemeContextType, Options as ThemeOptions, _default as defaultTheme} from './types/Theme/ThemeInterface';
import { ContextType as SiteContextType, Options as SiteOptions, _default as defaultSite} from './types/Site/SiteInterface';
import { ContextType as EventContextType, Options as EventOptions, _default as defaultEvent} from './types/Event/EventInterface';

import { ThemeProvider, useTheme } from './types/Theme/ThemeProvider';
import { SiteProvider, useSite } from './types/Site/SiteProvider';
import { EventProvider, useEvent } from './types/Event/EventProvider';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const SiteContext = createContext<SiteContextType | undefined>(undefined);
const EventContext = createContext<EventContextType | undefined>(undefined);

interface ThemesProviderProps {
  children: ReactNode;
}

const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {

  return (
    <>
      <SiteProvider>
        <ThemeProvider>
          <EventProvider>
            {children}
          </EventProvider>
        </ThemeProvider>
      </SiteProvider>
    </>
  );
};

export type { ThemeOptions,  SiteOptions, EventOptions };
export { 
  ThemesProvider, useTheme, defaultTheme,
  SiteProvider, useSite, defaultSite,
  EventProvider, useEvent, defaultEvent,
};
