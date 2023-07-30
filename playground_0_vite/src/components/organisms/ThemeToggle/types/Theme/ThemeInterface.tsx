export type Options = 'light' | 'dark';

export interface ContextType {
  theme: Options;
  toggleTheme: (option: Options) => void;
}

export const _default: Options = 'light';