import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary', className = '', label}: Props) => {

  return (
    <button className={"component btn btn-" + color + " " + className} onClick={onClick}>
      {label && <label className="btn-label">{label}</label>} {children}
    </button>  
  )
}

export default Button