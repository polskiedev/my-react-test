import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContextType as EventContextType, Options, _default as defaultEvent} from './EventInterface';

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [event, setEvent] = useState<Options>(defaultEvent);

  const toggleEvent = (newEvent: Options) => {
    setEvent(newEvent);
  };

  return (
    <EventContext.Provider value={{ event, toggleEvent }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within a EventProvider');
  }
  return context;
};

export type {Options};
export { EventProvider, useEvent };
