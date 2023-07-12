const ButtonVariants = {
    base: {
      register: '--ac-button',
      display: 'flex text-center gap-1 no-underline align-middle',
      text: 'text-sm 2sm:text-base',
      padding: 'p-1 2sm:px-3 2sm:py-1',
      borderRadius: 'rounded-md'
    },
    variants: {
      variant: {
        default:    'bg-btn-bg hover:bg-btn-hover-bg active:bg-btn-active-bg',
        primary:    'bg-btn-primary-bg hover:bg-btn-primary-hover-bg active:bg-btn-primary-active-bg',
        secondary:  'bg-btn-secondary-bg hover:bg-btn-secondary-hover-bg active:bg-btn-secondary-active-bg',
        tertiary:   'bg-btn-tertiary-bg hover:bg-btn-tertiary-hover-bg active:bg-btn-tertiary-active-bg'
      }, 
      textcolor: {
        default:    '',
        primary:    'text-btn-primary-text hover:text-btn-primary-hover-text active:text-btn-primary-active-text',
        secondary:  'text-btn-secondary-text hover:text-btn-secondary-hover-text active:text-btn-secondary-active-text',
        tertiary:   'text-btn-tertiary-text hover:text-btn-tertiary-hover-text active:text-btn-tertiary-active-text',
      }
    },
    defaultVariants: {
      variant:  'default',
      textcolor: 'default'
    }
};
export default ButtonVariants