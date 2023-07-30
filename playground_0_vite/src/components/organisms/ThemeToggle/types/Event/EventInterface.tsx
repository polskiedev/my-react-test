export type Options = 'NONE' | 'CHRISTMAS' | 'NEW_YEAR' | 'HALLOWEEN' | 
  'VALENTINES' | 'APRIL_FOOLS' | 'EASTER';

export interface ContextType {
  event: Options;
  toggleEvent: (newEvent: Options) => void;
}

export const _default: Options = 'NONE';
