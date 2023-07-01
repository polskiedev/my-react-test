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

  if(className) classList.push(className);

  //Tailwind
  classList.push("flex text-center gap-1 no-underline align-middle rounded-md p-1 text-sm mobile:px-3 mobile:py-1 mobile:text-base");

  return (<>
      <button className={classList.join(" ")} onClick={onClick}>
        {icon && <span className={"btn-icon icon-" + icon + " w-6 h-6 inline-block"}></span>}
        {label && <label className="btn-label hidden tablet:block">{label}</label>} {children}
      </button>  
    </>)
}

export default Button