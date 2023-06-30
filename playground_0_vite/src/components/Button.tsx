import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    icon?: 'hamburger';
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    onClick: () => void;
}

const Button = ({children, onClick, icon, color = 'primary', className = '', label}: Props) => {
  let classList: string[] = ["--ac-btn"];
  
  classList.push("btn btn-" + color);

  return (<>
      <button className={classList.join(" ")} onClick={onClick}>
        {icon && <span className={"btn-icon icon-" + icon + " w-6 h-6"}></span>}
        {label && <label className="btn-label">{label}</label>} {children}
      </button>  
    </>)
}

export default Button