export type Options = 'BASE' | 
    'VERAJOHN_JP' | 'INTERCASINO_JP' | 'YUUGADO_COM' |
    'HAPPYLUKE_COM' | 'LIVECASINOHOUSE_COM' | 
    'VERAJOHN_COM' | 'INTERCASINO_COM' | 'VERAJOHN_SE' | 'INTERCASINO_SE' |
    'BOABET'

export interface ContextType {
  site: Options;
  toggleSite: (site: Options) => void;
}

export const _default: Options = 'VERAJOHN_COM';